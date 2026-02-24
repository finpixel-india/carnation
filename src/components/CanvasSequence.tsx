import { useEffect, useRef, useState } from 'react';
import { MotionValue, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 240;

interface CanvasSequenceProps {
    scrollYProgress: MotionValue<number>;
}

const CanvasSequence = ({ scrollYProgress }: CanvasSequenceProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadedCount, setLoadedCount] = useState(0);

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            const indexStr = i.toString().padStart(3, '0');
            img.src = `/images/frames/ezgif-frame-${indexStr}.jpg`;

            img.onload = () => setLoadedCount(c => c + 1);
            img.onerror = () => setLoadedCount(c => c + 1);

            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const drawImage = (index: number) => {
        if (images.length === 0 || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[index];
        if (!img || !img.complete || img.naturalWidth === 0) return;

        // Handle high-dpi displays and resize to cover the screen
        const windowRatio = window.innerWidth / window.innerHeight;
        const imgRatio = img.naturalWidth / img.naturalHeight;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (windowRatio > imgRatio) {
            drawHeight = drawWidth / imgRatio;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = drawHeight * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Setup canvas size
    useEffect(() => {
        const handleResize = () => {
            if (!canvasRef.current) return;
            canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
            canvasRef.current.height = window.innerHeight * window.devicePixelRatio;

            const currentScroll = scrollYProgress.get();
            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(currentScroll * FRAME_COUNT)
            );
            drawImage(frameIndex);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [images, loadedCount, scrollYProgress]);

    // Update canvas on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (images.length === 0) return;
        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(latest * FRAME_COUNT)
        );
        drawImage(frameIndex);
    });

    return (
        <div className="absolute inset-0 w-full h-full z-0 bg-black">
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover"
                style={{ width: '100%', height: '100%' }}
            />
            {/* Loading State Overlay */}
            {loadedCount < FRAME_COUNT && (
                <div className="absolute inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-1000">
                    <div className="text-[#fdfcfb] flex flex-col items-center gap-6">
                        <div className="w-8 h-8 border-[1px] border-[#fdfcfb]/20 border-t-[#fdfcfb] rounded-full animate-spin"></div>
                        <div className="flex flex-col items-center gap-1">
                            <p className="font-mono tracking-[0.3em] text-[10px] opacity-60 uppercase">System Initializing</p>
                            <p className="font-mono tracking-widest text-xs opacity-80">{Math.round((loadedCount / FRAME_COUNT) * 100)}%</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CanvasSequence;
