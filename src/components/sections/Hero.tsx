import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { personal } from '../../lib/data';

const roles = ['Java Developer', 'Full Stack Developer', 'Problem Solver', 'Software Engineer'];

function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="text-white font-semibold font-mono">{displayed}</span>
  );
}

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#connect')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden p-6 md:p-16"
      style={{ background: 'transparent' }}
    >
      {/* Dynamic styles for electric glow & badge floating */}
      <style>{`
        @keyframes electric-glow {
          0%, 100% {
            box-shadow: 0 0 25px rgba(239, 68, 68, 0.4), 0 0 50px rgba(239, 68, 68, 0.2), inset 0 0 15px rgba(239, 68, 68, 0.2);
            border-color: rgba(239, 68, 68, 0.5);
          }
          50% {
            box-shadow: 0 0 45px rgba(239, 68, 68, 0.7), 0 0 90px rgba(239, 68, 68, 0.3), inset 0 0 25px rgba(239, 68, 68, 0.4);
            border-color: rgba(239, 68, 68, 0.9);
          }
        }
        .electric-circle {
          animation: electric-glow 3s infinite ease-in-out;
        }
        @keyframes float-badge-1 {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-6px) rotate(1deg); }
        }
        @keyframes float-badge-2 {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(-9px) rotate(-1deg); }
        }
        .floating-badge-1 {
          animation: float-badge-1 4s infinite ease-in-out;
        }
        .floating-badge-2 {
          animation: float-badge-2 4.5s infinite ease-in-out;
        }
      `}</style>

      {/* Hexagonal Background Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='138.56' viewBox='0 0 80 138.56'%3E%3Cpath d='M40 0 L80 23.09 L80 69.28 L40 92.37 L0 69.28 L0 23.09 Z M40 138.56 L80 115.47 L80 69.28 L40 46.19 L0 69.28 L0 115.47 Z' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '80px 138.56px',
        }}
      />

      {/* Subtle background glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
      />

      {/* Top Row: Logo Monogram */}
      <div className="relative z-10 w-full flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white font-mono text-lg font-bold tracking-widest"
        >
          [ <span className="gradient-text">SVK</span> ]
        </motion.div>
      </div>

      {/* Middle Row: Two-Column Grid Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center flex-grow py-8">
        
        {/* Left Column: Typography & Actions (7/12 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono mb-4 border border-zinc-855 bg-zinc-950/60"
            style={{ color: '#a1a1aa' }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
            Available for opportunities
          </motion.div>

          {/* Location Row */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6"
          >
            <MapPin size={14} className="text-zinc-600" />
            Tiruttani, Tamil Nadu, India
          </motion.div>

          {/* Title Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4"
          >
            Suryaprakash VK<span className="text-zinc-600">.</span>
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl font-medium text-zinc-400 mb-6 flex items-center gap-2"
          >
            I'm a <TypewriterRole />
          </motion.div>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg italic text-zinc-300 mb-6 font-serif max-w-2xl border-l-2 border-zinc-800 pl-4"
          >
            "Building practical, scalable, and impactful digital solutions."
          </motion.p>

          {/* Description Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm md:text-base text-zinc-400 mb-8 max-w-xl leading-relaxed font-sans"
          >
            <p className="mb-2">Full Stack Developer skilled in Java, SQL & Web Technologies.</p>
            <p>Building user-centric, impactful software — one line at a time.</p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-lg"
            >
              View Projects <ArrowRight size={16} />
            </motion.button>

            <motion.a
              href={personal.resumePath}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-950/20 text-white text-sm font-semibold hover:bg-zinc-900/50 transition-colors"
            >
              <Download size={15} /> Resume
            </motion.a>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-950/20 text-white text-sm font-semibold hover:bg-zinc-900/50 transition-colors"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column: Visual Circle & Floating Tech Badges (5/12 cols) */}
        <div className="lg:col-span-5 flex items-center justify-center relative py-12 md:py-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            
            {/* Glowing Red Electric Placeholder Circle */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              className="electric-circle w-64 h-64 md:w-80 md:h-80 rounded-full border border-red-500/50 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-950 shadow-[0_0_50px_rgba(239,68,68,0.2)]"
            >
              {!imgError ? (
                <img
                  src="/profile.jpg"
                  alt="Suryaprakash VK"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <>
                  {/* Internal layout - abstract tech mesh & Monogram */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                      backgroundSize: '16px 16px',
                    }}
                  />
                  <span className="text-4xl md:text-5xl font-bold font-mono tracking-widest text-zinc-700 select-none">
                    SVK
                  </span>
                </>
              )}
            </motion.div>

            {/* Floating Badges */}
            
            {/* 1. Java (Top-Left) */}
            <div className="absolute top-4 left-[-15px] md:top-8 md:left-2 floating-badge-1 z-10">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/95 border border-zinc-800 backdrop-blur-md text-xs font-mono font-semibold text-white shadow-xl">
                <span>☕</span>
                <span>Java</span>
              </div>
            </div>

            {/* 2. Full Stack (Top-Right) */}
            <div className="absolute top-6 right-[-15px] md:top-12 md:right-0 floating-badge-2 z-10">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/95 border border-zinc-800 backdrop-blur-md text-xs font-mono font-semibold text-white shadow-xl">
                <span>⚙️</span>
                <span>Full Stack</span>
              </div>
            </div>

            {/* 3. UI/UX (Bottom-Left) */}
            <div className="absolute bottom-12 left-[-15px] md:bottom-16 md:left-2 floating-badge-2 z-10">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/95 border border-zinc-800 backdrop-blur-md text-xs font-mono font-semibold text-white shadow-xl">
                <span>🎨</span>
                <span>UI/UX</span>
              </div>
            </div>

            {/* 4. AI (Bottom-Right) */}
            <div className="absolute bottom-8 right-[-10px] md:bottom-12 md:right-8 floating-badge-1 z-10">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/95 border border-zinc-800 backdrop-blur-md text-xs font-mono font-semibold text-white shadow-xl">
                <span>🧠</span>
                <span>AI</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Row: Socials & Scroll Indicator */}
      <div className="relative z-10 w-full flex justify-between items-center border-t border-zinc-900 pt-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center gap-4"
        >
          <motion.a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-2 rounded-lg border border-zinc-850 text-zinc-400 hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </motion.a>
          
          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-2 rounded-lg border border-zinc-855 text-zinc-400 hover:text-white transition-colors"
          >
            <Mail size={18} />
          </motion.a>

          <motion.a
            href={`tel:${personal.phone}`}
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-2 rounded-lg border border-zinc-855 text-zinc-400 hover:text-white transition-colors"
          >
            <Phone size={18} />
          </motion.a>

          <div className="h-6 w-px bg-zinc-855 mx-2" />

          <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">
            SCROLL
          </span>
        </motion.div>

        {/* PDF Resume floating icon on bottom-right matching screenshot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-center justify-end"
        >
          <motion.a
            href={personal.resumePath}
            download
            whileHover={{ scale: 1.1, rotate: 4 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600 text-white flex items-center justify-center border border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:bg-red-700 transition-colors"
            title="Download PDF Resume"
          >
            <svg 
              className="w-5 h-5 md:w-6 md:h-6 fill-current" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-5h2v5zm0-7h-2V7h2v2z" opacity=".2"/>
              <path d="M11.5 9.5a1.5 1.5 0 0 1-3 0v-4a1.5 1.5 0 0 1 3 0v4zm-1.5 4h-1v-2h1v2zm5-1.5h-1.5V9H15a1 1 0 0 0 0-2h-3.5v7a1.5 1.5 0 0 0 3 0v-2zm-5 4h-1v-2h1v2zm7.5-6.5a1.5 1.5 0 0 1-3 0v-4a1.5 1.5 0 0 1 3 0v4zM19 12c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7zm-2 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>

    </section>
  );
}
