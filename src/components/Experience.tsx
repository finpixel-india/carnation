import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Subtly parallax the central glass piece
    const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotateParallax = useTransform(scrollYProgress, [0, 1], [-2, 2]);

    return (
        <section id="experience" ref={containerRef} className="relative w-full py-32 px-6 md:px-12 z-10 overflow-hidden">

            {/* Decorative ambient glow */}
            <div className="absolute top-1/4 -left-[100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(212,160,168,0.12)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">

                {/* Text Content */}
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#8a7f78] block mb-6 drop-shadow-sm">
                            Sensory Design
                        </span>
                        <h2 className="font-display text-4xl md:text-7xl font-black tracking-widest text-[#2a2624] uppercase mb-8 leading-tight drop-shadow-md">
                            Symphony<br />Of Motion
                        </h2>
                        <div className="space-y-6 text-[#5a534f] text-sm md:text-base font-light leading-relaxed">
                            <p>
                                Every surface is acoustically tuned. We've harmonized the extreme velocity of the vessel with a tranquil interior atmosphere, canceling sonic booms into absolute stillness.
                            </p>
                            <p>
                                The cabin geometry adapts to your posture in real time. Intelligent glassmorphism displays dynamically position mission-critical telemetry wherever your eyes naturally rest.
                            </p>
                        </div>

                        <div className="mt-12">
                            <button className="flex items-center gap-4 group cursor-pointer focus:outline-none">
                                <div className="w-14 h-14 rounded-full border border-[rgba(212,160,168,0.4)] flex items-center justify-center group-hover:bg-[linear-gradient(135deg,rgba(255,230,235,0.8),rgba(255,255,255,0.6))] group-hover:border-[rgba(212,160,168,0.6)] transition-all duration-300 shadow-[0_4px_12px_rgba(212,160,168,0.1)] bg-[rgba(255,240,243,0.4)] backdrop-blur-sm">
                                    <div className="w-2 h-2 bg-[#2a2624] rounded-full group-hover:scale-150 transition-all duration-300"></div>
                                </div>
                                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#2a2624] font-bold group-hover:tracking-[0.4em] group-hover:text-[#C4828A] transition-all duration-300">
                                    Explore Cockpit
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Engaging Parallax Graphic Feature */}
                <div className="w-full md:w-1/2 h-[500px] relative perspective-[2000px]">
                    <motion.div
                        style={{ y: yParallax, rotateX: rotateParallax, rotateY: -10 }}
                        className="w-full h-full relative"
                    >
                        {/* Layer 1: Frosted Backplane */}
                        <div className="absolute inset-x-8 inset-y-12 rounded-[3rem] bg-[linear-gradient(135deg,rgba(255,230,235,0.25),rgba(255,255,255,0.15))] backdrop-blur-md border border-[rgba(212,160,168,0.2)] shadow-[0_20px_40px_rgba(180,100,120,0.05)] transform -translate-z-12"></div>

                        {/* Layer 2: Main Glass Interface */}
                        <div className="absolute inset-0 rounded-[3rem] bg-[linear-gradient(135deg,rgba(255,240,243,0.5),rgba(255,230,235,0.2),rgba(255,255,255,0.3))] backdrop-blur-2xl border border-[rgba(255,220,228,0.5)] shadow-[0_32px_64px_rgba(180,100,120,0.08)] flex flex-col p-10 justify-between">
                            <div className="flex justify-between items-center border-b border-[rgba(212,160,168,0.15)] pb-4">
                                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#8a7f78] font-bold">System Status</span>
                                <div className="px-3 py-1.5 rounded-full bg-[linear-gradient(135deg,rgba(255,240,243,0.8),rgba(255,255,255,0.9))] shadow-[0_2px_8px_rgba(212,160,168,0.1)] text-[8px] font-mono tracking-[0.2em] text-[#2a2624] font-black">OPTIMAL</div>
                            </div>

                            <div className="flex-1 flex flex-col justify-center items-center py-8">
                                <div className="w-40 h-40 rounded-full border-[1px] border-dashed border-[rgba(212,160,168,0.3)] animate-[spin_20s_linear_infinite] flex items-center justify-center bg-[rgba(255,240,243,0.1)] shadow-inner">
                                    <div className="w-28 h-28 rounded-full border border-[rgba(212,160,168,0.3)] flex items-center justify-center bg-[rgba(255,235,240,0.3)] backdrop-blur-md">
                                        <div className="w-16 h-16 rounded-full bg-[linear-gradient(135deg,#D4A0A0,#E8C5C5,#F0DADA)] shadow-[0_8px_24px_rgba(212,160,168,0.3)] animate-[pulse_4s_ease-in-out_infinite]"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="h-2 rounded-full bg-[linear-gradient(90deg,rgba(255,230,235,0.5),rgba(255,255,255,0.4))] border border-[rgba(212,160,168,0.2)] backdrop-blur-sm shadow-inner"></div>
                                ))}
                            </div>
                        </div>

                        {/* Layer 3: Floating UI Elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 top-1/4 px-8 py-6 rounded-3xl bg-[linear-gradient(135deg,rgba(255,240,243,0.85),rgba(255,255,255,0.8))] backdrop-blur-3xl border border-[rgba(212,160,168,0.3)] shadow-[0_16px_48px_rgba(180,100,120,0.12)] transform translate-z-12"
                        >
                            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#8a7f78] block mb-2 font-bold">Acoustics</span>
                            <span className="text-2xl font-display font-black text-[#2a2624]">0.0 dB</span>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
