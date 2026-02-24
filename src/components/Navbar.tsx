
const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 pointer-events-none">
            <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
                {/* Brand */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[linear-gradient(135deg,rgba(255,230,235,0.6),rgba(255,255,255,0.4))] backdrop-blur-md flex items-center justify-center border border-[rgba(255,220,228,0.6)] shadow-[0_4px_12px_rgba(212,160,168,0.15)]">
                        <div className="w-3 h-3 bg-[#1A1A1A] rounded-full"></div>
                    </div>
                    <span className="font-display font-black text-xl tracking-[0.3em] uppercase text-[#1A1A1A] drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                        Car Nation
                    </span>
                </div>

                {/* Navbar Links - Desktop */}
                <div className="hidden md:flex items-center gap-8 glass-panel px-8 py-3 !rounded-full pointer-events-auto">
                    <a href="#hero" className="font-mono text-[10px] tracking-[0.2em] font-extrabold uppercase text-[#1A1A1A] hover:text-[#C4828A] transition-colors duration-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">Hero</a>
                    <a href="#specs" className="font-mono text-[10px] tracking-[0.2em] font-extrabold uppercase text-[#1A1A1A] hover:text-[#C4828A] transition-colors duration-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">Specs</a>
                    <a href="#dogfight" className="font-mono text-[10px] tracking-[0.2em] font-extrabold uppercase text-[#1A1A1A] hover:text-[#C4828A] transition-colors duration-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">Feature</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
