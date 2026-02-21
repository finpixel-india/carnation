import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import CanvasSequence from './components/CanvasSequence';
import HudOverlay from './components/HudOverlay';
import Navbar from './components/Navbar';
import Specs from './components/Specs';
import Dogfight from './components/Dogfight';
import Footer from './components/Footer';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="relative w-full min-h-screen selection:bg-[rgba(26,26,26,0.1)] bg-[linear-gradient(135deg,_#EBE8E6_0%,_#D9C3BA_50%,_#9F9B9F_100%)] font-sans text-[#1A1A1A]">

      <Navbar />

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="relative w-full h-[600vh] bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <CanvasSequence scrollYProgress={scrollYProgress} />
          <HudOverlay scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* Cinematic Lower UI */}
      <div className="relative w-full overflow-hidden">
        <Specs />
        <Dogfight />
        <Footer />
      </div>

    </div>
  );
}

export default App;
