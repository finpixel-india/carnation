import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import CanvasSequence from './components/CanvasSequence';
import HudOverlay from './components/HudOverlay';
import Navbar from './components/Navbar';
import Specs from './components/Specs';
import Experience from './components/Experience';
import Dogfight from './components/Dogfight';
import Footer from './components/Footer';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="relative w-full min-h-screen selection:bg-[rgba(196,130,138,0.25)] bg-[linear-gradient(160deg,_#F5EFED_0%,_#EDDDD9_25%,_#E8CDD2_50%,_#D9C3C8_75%,_#C9B3BB_100%)] font-sans text-[#1A1A1A]">

      {/* Decorative Ambient Orbs */}
      <div className="orb orb-pink w-[500px] h-[500px] top-[80vh] -left-[100px] z-0" />
      <div className="orb orb-peach w-[400px] h-[400px] top-[140vh] -right-[80px] z-0" style={{ animationDelay: '3s' }} />
      <div className="orb orb-pink w-[350px] h-[350px] top-[220vh] left-[20%] z-0" style={{ animationDelay: '5s' }} />
      <div className="orb orb-peach w-[450px] h-[450px] top-[300vh] right-[10%] z-0" style={{ animationDelay: '2s' }} />

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
        <Experience />
        <Dogfight />
        <Footer />
      </div>

    </div>
  );
}

export default App;
