import { motion, useTransform, MotionValue } from 'framer-motion';

interface HudOverlayProps {
    scrollYProgress: MotionValue<number>;
}

const HudOverlay = ({ scrollYProgress }: HudOverlayProps) => {

    // Map scroll progress to opacities and transforms for different sections
    // Intro
    const introOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const introY = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

    // Middle action sequence
    const chaseOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
    const chaseX = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [30, 0, 0, -30]);

    // Finale
    const finaleOpacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);
    const finaleY = useTransform(scrollYProgress, [0.7, 0.8], [30, 0]);

    // Progress bar
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 md:p-8">
            {/* Top Navigation Spacer (Navbar is global now) */}
            <div className="h-16 w-full"></div>

            {/* Main Content Areas changing with scroll */}
            <div className="flex-1 relative w-full h-full my-8">
                {/* Intro Phase (0 - 25%) */}
                <motion.div
                    style={{ opacity: introOpacity, y: introY }}
                    className="absolute inset-0 flex flex-col justify-center items-start md:w-5/12 ml-2 md:ml-8"
                >
                    <div className="p-6 md:p-8 border-l border-l-creamy-white/30 backdrop-blur-sm bg-creamy-white/5 rounded-r-2xl">
                        <div className="text-[8px] font-mono uppercase tracking-[0.4em] text-creamy-white/60 mb-3">
                            Initiating Sequence
                        </div>
                        <h2 className="font-display text-2xl md:text-4xl mb-4 font-bold tracking-widest text-creamy-white leading-tight">
                            DEFY<br />GRAVITY
                        </h2>
                        <p className="text-xs md:text-sm opacity-70 mb-6 font-base font-light max-w-[280px] text-creamy-white leading-relaxed">
                            Experience untamed power. Precision engineering meets breathtaking aerodynamics.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-8 bg-creamy-white/40"></div>
                            <span className="text-[8px] uppercase tracking-[0.3em] text-creamy-white/70 animate-pulse">Scroll to ignite</span>
                        </div>
                    </div>
                </motion.div>

                {/* Action Phase (25% - 65%) */}
                <motion.div
                    style={{ opacity: chaseOpacity, x: chaseX }}
                    className="absolute inset-0 flex justify-end items-center mr-2 md:mr-8"
                >
                    <div className="p-6 md:p-8 text-right max-w-[320px] border-r border-r-creamy-white/30 backdrop-blur-sm bg-creamy-white/5 rounded-l-2xl">
                        <div className="flex justify-end items-center gap-2 mb-3">
                            <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-creamy-white/60">
                                Maximum Velocity
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-creamy-white/60"></div>
                        </div>

                        <h2 className="font-display text-2xl md:text-3xl mb-4 font-bold text-creamy-white tracking-widest leading-tight">
                            AERIAL<br />DOMINANCE
                        </h2>
                        <p className="text-xs opacity-70 font-light text-creamy-white leading-relaxed mb-6">
                            Advanced propulsion mechanics for unprecedented multi-terrain versatility and atmospheric maneuvering.
                        </p>

                        {/* Telemetry stats */}
                        <div className="grid grid-cols-2 gap-4 text-left border-t border-creamy-white/10 pt-4">
                            <div>
                                <div className="text-[7px] font-mono uppercase opacity-50 mb-1 tracking-[0.2em] text-creamy-white">Alt.Delta</div>
                                <div className="font-mono text-sm text-creamy-white/90">32,040 ft</div>
                            </div>
                            <div>
                                <div className="text-[7px] font-mono uppercase opacity-50 mb-1 tracking-[0.2em] text-creamy-white">Thrust.Out</div>
                                <div className="font-mono text-sm text-creamy-white/90">14,200 lbf</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Finale Phase (65% - 100%) */}
                <motion.div
                    style={{ opacity: finaleOpacity, y: finaleY }}
                    className="absolute inset-0 flex flex-col justify-end items-start pb-4 md:pb-8 ml-2 md:ml-8"
                >
                    <div className="p-4 md:p-8 text-left max-w-[380px]">
                        <div className="text-[8px] font-mono uppercase tracking-[0.4em] text-creamy-white/60 mb-3">
                            Evolution Complete
                        </div>
                        <h2 className="font-display text-2xl md:text-4xl mb-4 font-bold tracking-[0.2em] text-creamy-white">
                            THE FUTURE<br />IS NOW
                        </h2>
                        <p className="text-xs md:text-sm opacity-70 mb-8 mx-auto font-light text-creamy-white leading-relaxed">
                            Secure your allocation for the next generation of hyper-mobility. Limited slots available.
                        </p>
                        <a href="#specs" className="inline-block pointer-events-auto border border-creamy-white/20 hover:bg-creamy-white/10 backdrop-blur-md text-creamy-white px-8 py-3 rounded-full font-mono uppercase tracking-[0.3em] text-[9px] transition-all duration-300">
                            Reserve Vehicle
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Bottom HUD Elements */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
                <div className="hidden md:block">
                    {/* Minimal telemetry graph */}
                    <div className="w-24 h-6 flex items-end gap-[2px] opacity-40">
                        {[40, 60, 30, 80, 50, 90, 45, 75, 65, 85].map((h, i) => (
                            <div key={i} className="flex-1 bg-creamy-white" style={{ height: `${h}%` }}></div>
                        ))}
                    </div>
                    <div className="mt-2 text-[7px] font-mono tracking-[0.3em] text-creamy-white/40 uppercase">T.P. Beta</div>
                </div>

                <div className="hidden md:flex flex-col items-end gap-1">
                    <div className="text-[7px] font-mono tracking-[0.4em] opacity-40 uppercase text-creamy-white">
                        Global Coordinates
                    </div>
                    <div className="font-mono text-[10px] opacity-60 text-creamy-white">
                        48°08'11.1"N 11°34'12.0"E
                    </div>
                </div>
            </div>

            {/* Global Scroll Progress Bar */}
            <div className="fixed bottom-0 left-0 w-full h-[2px] bg-creamy-white/10 z-50">
                <motion.div
                    className="h-full bg-creamy-white/60"
                    style={{ width: progressWidth }}
                />
            </div>
        </div>
    );
};

export default HudOverlay;
