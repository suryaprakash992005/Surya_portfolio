import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import LeetCodeSection from './components/sections/LeetCode';
import Achievements from './components/sections/Achievements';
import CurrentlyLearning from './components/sections/CurrentlyLearning';
import Journey from './components/sections/Journey';
import Connect from './components/sections/Connect';
import AnimatedCursor from './components/ui/AnimatedCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import Hyperspeed from './components/ui/Hyperspeed';
import { personal } from './lib/data';

const HYPERSPEED_OPTIONS = {
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.03, 400 * 0.2],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0xffffff,
    brokenLines: 0xffffff,
    leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
    rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
    sticks: 0x03b3c3
  }
};

// Loading screen
function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#080808' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-6"
      >
        {/* Logo */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl font-mono"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            boxShadow: '0 0 40px rgba(99,102,241,0.4)',
          }}
        >
          SVK
        </div>

        {/* Name */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm font-mono text-gray-400"
          >
            Suryaprakash VK
          </motion.p>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-px bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const { theme, toggle } = useTheme();
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Loading */}
      <AnimatePresence>
        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Custom Cursor — desktop only */}
      <AnimatedCursor />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Main content */}
      {!loading && (
        <>
          <div 
            className="fixed inset-0 pointer-events-none" 
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              zIndex: -1,
              overflow: 'hidden'
            }}
          >
            <Hyperspeed effectOptions={HYPERSPEED_OPTIONS} />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen relative z-10"
            style={{ background: 'var(--bg-primary)' }}
          >
          <Navbar theme={theme} onToggleTheme={toggle} />

          <main>
            <Hero />
            <About />
            <TechStack />
            <Experience />
            <Projects />
            <Certifications />
            <LeetCodeSection />
            <Achievements />
            <CurrentlyLearning />
            <Journey />
            <Connect />
          </main>

          <Footer />

        </motion.div>
        </>
      )}
    </>
  );
}
