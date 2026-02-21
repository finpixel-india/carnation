

const Navbar = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 pointer-events-none">
                <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.4)] backdrop-blur-md flex items-center justify-center border border-[rgba(255,255,255,0.8)] shadow-md">
                            <div className="w-3 h-3 bg-[#1A1A1A] rounded-full"></div>
                        </div>
                        <span className="font-display font-black text-xl tracking-[0.3em] uppercase text-[#1A1A1A] drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                            Car Nation
                        </span>
                    </div>

                    {/* Navbar Links - Desktop */}
                    <div className="hidden md:flex items-center gap-8 glass-panel px-8 py-3 !rounded-full pointer-events-auto">
                        <a href="#hero" className="font-mono text-[10px] tracking-[0.2em] font-extrabold uppercase text-[#1A1A1A] hover:text-[#4A4A4A] transition-colors drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">Hero</a>
                        <a href="#specs" className="font-mono text-[10px] tracking-[0.2em] font-extrabold uppercase text-[#1A1A1A] hover:text-[#4A4A4A] transition-colors drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">Specs</a>
                        <a href="#dogfight" className="font-mono text-[10px] tracking-[0.2em] font-extrabold uppercase text-[#1A1A1A] hover:text-[#4A4A4A] transition-colors drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">Feature</a>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation - Fixed Bottom Pill */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 glass-panel px-6 py-3 !rounded-full flex items-center gap-6 z-50 pointer-events-auto shadow-2xl border border-[rgba(255,255,255,0.9)] bg-[rgba(255,255,255,0.6)]">
                <a href="#hero" className="font-mono text-[9px] tracking-[0.2em] font-extrabold uppercase text-[#1A1A1A] hover:text-[#4A4A4A]">Hero</a>
                <a href="#specs" className="font-mono text-[9px] tracking-[0.2em] font-extrabold uppercase text-[#1A1A1A] hover:text-[#4A4A4A]">Specs</a>
                <a href="#dogfight" className="font-mono text-[9px] tracking-[0.2em] font-extrabold uppercase text-[#1A1A1A] hover:text-[#4A4A4A]">Feature</a>
            </div>
        </>
    );
};

export default Navbar;
