import { useState } from 'react';
import { motion } from 'framer-motion';

const Dogfight = () => {
    const [mode, setMode] = useState<'AEROSPACE' | 'AUTOMOTIVE'>('AEROSPACE');

    return (
        <section id="dogfight" className="relative w-full min-h-screen py-32 px-4 md:px-12 z-10 overflow-hidden flex flex-col items-center justify-center">

            {/* Massive Glass Overlay Box */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-full max-w-6xl p-10 md:p-20 glass-panel cursor-default animate-[float_6s_ease-in-out_infinite]"
            >
                <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#4A4A4A] block mb-4 font-extrabold">
                        The Dogfight
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-8xl font-black tracking-widest text-[#1A1A1A] uppercase leading-none drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] mb-8 md:mb-12">
                        Beyond<br />Gravity
                    </h2>

                    {/* Interactive Switch */}
                    <div className="flex items-center gap-2 md:gap-6 mb-16 p-2 rounded-full glass-panel !shadow-inner bg-[rgba(255,255,255,0.2)] border-[rgba(255,255,255,0.8)]">
                        <button
                            onClick={() => setMode('AEROSPACE')}
                            className={`px-6 py-3 rounded-full font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300 font-extrabold ${mode === 'AEROSPACE' ? 'bg-[#1A1A1A] text-[#FFFFFF] shadow-md' : 'text-[#4A4A4A] hover:text-[#1A1A1A]'}`}
                        >
                            Aerospace
                        </button>
                        <button
                            onClick={() => setMode('AUTOMOTIVE')}
                            className={`px-6 py-3 rounded-full font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300 font-extrabold ${mode === 'AUTOMOTIVE' ? 'bg-[#1A1A1A] text-[#FFFFFF] shadow-md' : 'text-[#4A4A4A] hover:text-[#1A1A1A]'}`}
                        >
                            Automotive
                        </button>
                    </div>

                    {/* Data Display */}
                    <div className="w-full max-w-3xl min-h-[350px] sm:min-h-[250px] md:min-h-[150px] flex flex-col items-center">
                        {mode === 'AEROSPACE' && (
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                className="w-full flex flex-col items-center"
                            >
                                <p className="text-lg md:text-2xl font-bold text-[#1A1A1A] leading-relaxed max-w-2xl">
                                    "Mach dynamics applied to terrestrial surfaces. The fuselage is designed identical to a 5th-generation fighter jet, channeling air to eliminate drag completely."
                                </p>
                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full border-t border-[rgba(255,255,255,0.8)] pt-8">
                                    <div>
                                        <div className="text-[9px] font-mono tracking-[0.2em] text-[#4A4A4A] uppercase mb-1 font-extrabold">Drag Coef</div>
                                        <div className="font-mono text-xl md:text-2xl font-black text-[#1A1A1A] shadow-sm">0.12 Cd</div>
                                    </div>
                                    <div>
                                        <div className="text-[9px] font-mono tracking-[0.2em] text-[#4A4A4A] uppercase mb-1 font-extrabold">Thrust/Weight</div>
                                        <div className="font-mono text-xl md:text-2xl font-black text-[#1A1A1A] shadow-sm">1.18</div>
                                    </div>
                                    <div>
                                        <div className="text-[9px] font-mono tracking-[0.2em] text-[#4A4A4A] uppercase mb-1 font-extrabold">G-Limit</div>
                                        <div className="font-mono text-xl md:text-2xl font-black text-[#1A1A1A] shadow-sm">+9.0G</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        {mode === 'AUTOMOTIVE' && (
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                className="w-full flex flex-col items-center"
                            >
                                <p className="text-lg md:text-2xl font-bold text-[#1A1A1A] leading-relaxed max-w-2xl">
                                    "Hyper-adaptive suspension geometry. The liquid-metal chassis stiffens on high-speed cornering to maintain absolute adherence to the asphalt."
                                </p>
                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full border-t border-[rgba(255,255,255,0.8)] pt-8">
                                    <div>
                                        <div className="text-[9px] font-mono tracking-[0.2em] text-[#4A4A4A] uppercase mb-1 font-extrabold">0-100 KM/H</div>
                                        <div className="font-mono text-xl md:text-2xl font-black text-[#1A1A1A] shadow-sm">1.2s</div>
                                    </div>
                                    <div>
                                        <div className="text-[9px] font-mono tracking-[0.2em] text-[#4A4A4A] uppercase mb-1 font-extrabold">Cornering</div>
                                        <div className="font-mono text-xl md:text-2xl font-black text-[#1A1A1A] shadow-sm">3.4G</div>
                                    </div>
                                    <div>
                                        <div className="text-[9px] font-mono tracking-[0.2em] text-[#4A4A4A] uppercase mb-1 font-extrabold">Downforce</div>
                                        <div className="font-mono text-xl md:text-2xl font-black text-[#1A1A1A] shadow-sm">14k LBF</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>

        </section>
    );
};

export default Dogfight;
