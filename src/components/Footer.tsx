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
                    <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl tracking-[0.3em] md:tracking-[0.5em] uppercase text-[#1A1A1A] drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] ml-[0.3em] md:ml-[0.5em]">
                        Car Nation
                    </h2>
                    <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#1A1A1A] to-transparent mt-4 opacity-50"></div>
                </div>

                {/* Minimalist Navigation */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 text-[10px] font-mono uppercase tracking-[0.3em] text-[#4A4A4A] font-extrabold">
                    <a href="#hero" className="hover:text-[#1A1A1A] hover:drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:scale-110 transition-all duration-300">Hero</a>
                    <a href="#specs" className="hover:text-[#1A1A1A] hover:drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:scale-110 transition-all duration-300">Specs</a>
                    <a href="#dogfight" className="hover:text-[#1A1A1A] hover:drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:scale-110 transition-all duration-300">Feature</a>
                </div>

                {/* Social Icons & Copyright */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-[rgba(255,255,255,0.8)] pt-8 gap-6 text-[#1A1A1A]">
                    <div className="text-[9px] font-mono uppercase tracking-[0.2em] font-bold text-[#4A4A4A]">
                        &copy; {new Date().getFullYear()} Car Nation. Beyond Gravity.
                    </div>

                    <div className="flex gap-4">
                        {['IG', 'TW', 'YT'].map((social, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.4)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.8)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:scale-110 transition-all duration-300 text-[9px] font-mono font-extrabold text-[#1A1A1A]"
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
