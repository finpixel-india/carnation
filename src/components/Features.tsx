import { motion } from 'framer-motion';

const Features = () => {
    const features = [
        {
            id: '01',
            title: 'Plasma Propulsion',
            desc: 'Magneto-hydrodynamic thrusters deliver unprecedented torque vectoring and silent acceleration across any terrain or atmosphere.',
            stat: '0-60 in 1.2s'
        },
        {
            id: '02',
            title: 'Adaptive Chassis',
            desc: 'Liquid-metal alloy frame automatically rigidifies upon high-G maneuvers, providing perfect structural integrity at mach speeds.',
            stat: '15G Tolerance'
        },
        {
            id: '03',
            title: 'Neural Link Interface',
            desc: 'Direct biometric sync between pilot and machine. Anticipates maneuvering decisions milliseconds before physical input.',
            stat: '0.4ms Latency'
        }
    ];

    return (
        <section id="aero" className="relative w-full py-32 px-6 md:px-12 z-10 pt-40">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center md:text-left"
                >
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#8a7f78] block mb-6 drop-shadow-sm">
                        Core Systems
                    </span>
                    <h2 className="font-display text-4xl md:text-7xl font-black tracking-widest text-[#2a2624] uppercase leading-tight drop-shadow-md">
                        Engineering<br />Beyond Limits
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            key={feature.id}
                            className="relative group p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_64px_rgba(232,218,209,0.4)] hover:bg-white/60 hover:-translate-y-2 transition-all duration-500 cursor-default"
                        >
                            <div className="flex justify-between items-start mb-16">
                                <div className="text-6xl font-display font-black text-[#2a2624]/10 group-hover:text-[#2a2624]/30 transition-colors duration-500 drop-shadow-sm">
                                    {feature.id}
                                </div>
                                <div className="px-4 py-2 rounded-full border border-white/80 text-[9px] font-mono uppercase tracking-[0.2em] text-[#2a2624]/80 bg-white/70 shadow-sm leading-none">
                                    {feature.stat}
                                </div>
                            </div>

                            <h3 className="font-display text-xl md:text-2xl font-bold tracking-widest text-[#2a2624] mb-4 uppercase">
                                {feature.title}
                            </h3>
                            <p className="text-sm font-light text-[#5a534f] leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
