import { motion } from 'framer-motion';

const Specs = () => {
    const specs = [
        { title: 'Plasma Engine', value: '4,200 hp', desc: 'Sustained output via magneto-hydrodynamic thrust.' },
        { title: 'Downforce', value: '14,000 lbf', desc: 'Active aero surfaces reacting in 0.2ms.' },
        { title: 'Max Velocity', value: 'Mach 2.4', desc: 'Trans-atmospheric capability unlocked.' },
        { title: 'Chassis', value: '0.4ms', desc: 'Neural link latency for fluid bio-mechanical sync.' },
    ];

    return (
        <section id="specs" className="relative w-full min-h-screen py-32 px-6 md:px-12 z-10 overflow-hidden">

            {/* Decorative pink radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,160,168,0.15)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-center h-full">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20 text-center md:text-left animate-[float_4s_ease-in-out_infinite_reverse]"
                >
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#4A4A4A] block mb-4 font-extrabold">
                        Aerodynamics & Power
                    </span>
                    <h2 className="font-display text-4xl md:text-6xl font-black tracking-widest text-[#1A1A1A] uppercase leading-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
                        Defying<br />Physics
                    </h2>
                </motion.div>

                {/* Asymmetrical Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 cursor-default">
                    {/* Large Main Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:col-span-8 p-10 md:p-14 glass-panel animate-[float_4s_ease-in-out_infinite] flex flex-col justify-between min-h-[300px]"
                    >
                        <div className="flex justify-between items-start">
                            <h3 className="font-display text-2xl md:text-3xl font-black tracking-widest text-[#1A1A1A] uppercase">
                                {specs[0].title}
                            </h3>
                            <div className="px-4 py-2 rounded-full border border-[rgba(212,160,168,0.4)] text-[10px] font-mono uppercase tracking-[0.2em] text-[#1A1A1A] bg-[linear-gradient(135deg,rgba(255,230,235,0.6),rgba(255,255,255,0.5))] font-extrabold shadow-[0_2px_8px_rgba(212,160,168,0.12)]">
                                Primary
                            </div>
                        </div>
                        <div className="mt-12 md:mt-0 relative z-10">
                            <div className="font-mono text-4xl sm:text-5xl md:text-7xl text-[#1A1A1A] font-black tracking-tighter mb-4 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
                                {specs[0].value}
                            </div>
                            <p className="text-sm font-bold text-[#4A4A4A] max-w-sm">
                                {specs[0].desc}
                            </p>
                        </div>
                    </motion.div>

                    {/* Smaller Stacking Cards */}
                    <div className="md:col-span-4 flex flex-col gap-6 md:gap-8">
                        {specs.slice(1, 3).map((spec, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: (i + 1) * 0.15, ease: "easeOut" }}
                                key={i}
                                className="flex-1 p-6 md:p-8 glass-panel animate-[float_4s_ease-in-out_infinite_reverse]"
                                style={{ animationDelay: `${i * 1.5}s` }}
                            >
                                <h3 className="font-display text-base md:text-lg font-black tracking-widest text-[#1A1A1A] uppercase mb-4 md:mb-6">
                                    {spec.title}
                                </h3>
                                <div>
                                    <div className="font-mono text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] font-black tracking-tighter mb-2 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
                                        {spec.value}
                                    </div>
                                    <p className="text-[10px] md:text-[11px] font-bold text-[#4A4A4A]">
                                        {spec.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Wide Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="md:col-span-12 p-6 md:p-10 glass-card-accent animate-[float_4s_ease-in-out_infinite] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                        style={{ animationDelay: '2s' }}
                    >
                        <div>
                            <h3 className="font-display text-lg md:text-xl font-black tracking-widest text-[#1A1A1A] uppercase mb-2">
                                {specs[3].title}
                            </h3>
                            <p className="text-sm font-bold text-[#4A4A4A]">
                                {specs[3].desc}
                            </p>
                        </div>
                        <div className="font-mono text-3xl md:text-4xl text-[#1A1A1A] font-black tracking-tighter drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
                            {specs[3].value}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Specs;
