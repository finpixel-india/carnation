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
                                Every surface is acoustically tuned. We’ve harmonized the extreme velocity of the vessel with a tranquil interior atmosphere, canceling sonic booms into absolute stillness.
                            </p>
                            <p>
                                The cabin geometry adapts to your posture in real time. Intelligent glassmorphism displays dynamically position mission-critical telemetry wherever your eyes naturally rest.
                            </p>
                        </div>

                        <div className="mt-12">
                            <button className="flex items-center gap-4 group cursor-pointer focus:outline-none">
                                <div className="w-14 h-14 rounded-full border border-white/60 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300 shadow-md bg-white/40 backdrop-blur-sm">
                                    <div className="w-2 h-2 bg-[#2a2624] rounded-full group-hover:scale-150 transition-all duration-300"></div>
                                </div>
                                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#2a2624] font-bold group-hover:tracking-[0.4em] transition-all duration-300">
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
                        <div className="absolute inset-x-8 inset-y-12 rounded-[3rem] bg-white/20 backdrop-blur-md border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.05)] transform -translate-z-12"></div>

                        {/* Layer 2: Main Glass Interface */}
                        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/70 to-white/20 backdrop-blur-2xl border border-white/80 shadow-[0_32px_64px_rgba(0,0,0,0.08)] flex flex-col p-10 justify-between">
                            <div className="flex justify-between items-center border-b border-[#2a2624]/10 pb-4">
                                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#8a7f78] font-bold">System Status</span>
                                <div className="px-3 py-1.5 rounded-full bg-white shadow-sm text-[8px] font-mono tracking-[0.2em] text-[#2a2624] font-black">OPTIMAL</div>
                            </div>

                            <div className="flex-1 flex flex-col justify-center items-center py-8">
                                <div className="w-40 h-40 rounded-full border-[1px] border-dashed border-[#2a2624]/20 animate-[spin_20s_linear_infinite] flex items-center justify-center bg-white/10 shadow-inner">
                                    <div className="w-28 h-28 rounded-full border border-white/60 flex items-center justify-center bg-white/30 backdrop-blur-md">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#dfc6b8] to-[#f4ebe6] shadow-lg animate-[pulse_4s_ease-in-out_infinite]"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="h-2 rounded-full bg-white/60 border border-white/80 backdrop-blur-sm shadow-inner"></div>
                                ))}
                            </div>
                        </div>

                        {/* Layer 3: Floating UI Elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 top-1/4 px-8 py-6 rounded-3xl bg-white/80 backdrop-blur-3xl border border-white shadow-2xl transform translate-z-12"
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
