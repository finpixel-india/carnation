import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full mt-24 relative pt-32 pb-16 px-6 md:px-12 rounded-t-[100px] md:rounded-t-[200px] glass-footer"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Brand Title */}
                <div className="mb-12 cursor-default group flex flex-col items-center animate-[float_4s_ease-in-out_infinite]">
                    <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl tracking-[0.3em] md:tracking-[0.5em] uppercase text-[#1A1A1A] drop-shadow-[0_0_20px_rgba(212,160,168,0.3)] ml-[0.3em] md:ml-[0.5em]">
                        Car Nation
                    </h2>
                    <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#D4A0A0] to-transparent mt-4 opacity-60"></div>
                </div>

                {/* Minimalist Navigation */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 text-[10px] font-mono uppercase tracking-[0.3em] text-[#4A4A4A] font-extrabold">
                    <a href="#hero" className="hover:text-[#C4828A] hover:drop-shadow-[0_0_8px_rgba(212,160,168,0.5)] hover:scale-110 transition-all duration-300">Hero</a>
                    <a href="#specs" className="hover:text-[#C4828A] hover:drop-shadow-[0_0_8px_rgba(212,160,168,0.5)] hover:scale-110 transition-all duration-300">Specs</a>
                    <a href="#dogfight" className="hover:text-[#C4828A] hover:drop-shadow-[0_0_8px_rgba(212,160,168,0.5)] hover:scale-110 transition-all duration-300">Feature</a>
                </div>

                {/* Social Icons & Copyright */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-[rgba(212,160,168,0.25)] pt-8 gap-6 text-[#1A1A1A]">
                    <div className="text-[9px] font-mono uppercase tracking-[0.2em] font-bold text-[#4A4A4A]">
                        &copy; {new Date().getFullYear()} Car Nation. Beyond Gravity.
                    </div>

                    <div className="flex gap-4">
                        {['IG', 'TW', 'YT'].map((social, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-[rgba(255,240,243,0.4)] flex items-center justify-center hover:bg-[linear-gradient(135deg,rgba(255,225,230,0.8),rgba(255,240,243,0.6))] border border-[rgba(212,160,168,0.3)] hover:border-[rgba(212,160,168,0.5)] hover:shadow-[0_4px_16px_rgba(212,160,168,0.2)] hover:scale-110 transition-all duration-300 text-[9px] font-mono font-extrabold text-[#1A1A1A] backdrop-blur-sm"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </motion.footer>
    );
};

export default Footer;
