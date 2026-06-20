import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '../../hooks/useScrollAnimation';
import { leetcode } from '../../lib/data';
import { ArrowUpRight, Code2, Flame, Target } from 'lucide-react';
import { ParticleCard } from '../ui/MagicBento';

// Type-safe count-up using useEffect + useState
function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplayed(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold gradient-text"
      >
        {displayed}{suffix}
      </motion.span>
    </div>
  );
}

export default function LeetCodeSection() {
  const [headerRef, headerControls] = useScrollAnimation();
  const [statsRef, statsControls] = useScrollAnimation();

  const difficultyData = [
    { label: 'Easy', count: leetcode.stats.easy, color: '#22c55e', pct: (leetcode.stats.easy / leetcode.totalSolved) * 100 },
    { label: 'Medium', count: leetcode.stats.medium, color: '#f59e0b', pct: (leetcode.stats.medium / leetcode.totalSolved) * 100 },
    { label: 'Hard', count: leetcode.stats.hard, color: '#ef4444', pct: (leetcode.stats.hard / leetcode.totalSolved) * 100 },
  ];

  return (
    <section id="leetcode" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-custom">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={fadeUpVariants}
          className="mb-16"
        >
          <p className="text-xs font-mono tracking-widest mb-3 gradient-text uppercase">
            06 — Coding Practice
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Algorithmic Thinking
          </h2>
          <p className="text-sm max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            {leetcode.philosophy}
          </p>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsControls}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Main stats card */}
          <ParticleCard
            glowColor="245, 158, 11"
            enableBorderGlow={true}
            enableMagnetism={true}
            clickEffect={true}
            enableTilt={false}
            particleCount={10}
            className="md:col-span-2 rounded-3xl"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }} />

            <motion.div variants={staggerItemVariants} className="p-5 sm:p-8 relative overflow-hidden">

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(245,158,11,0.1)' }}>
                  <Code2 size={18} style={{ color: '#f59e0b' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>LeetCode Dashboard</p>
                  <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>@{leetcode.username}</p>
                </div>
              </div>
              <motion.a
                href={leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto sm:ml-auto flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium text-center"
                style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
              >
                View Profile <ArrowUpRight size={12} />
              </motion.a>
            </div>

            {/* Total */}
            <div className="mb-8">
              <AnimatedNumber value={leetcode.totalSolved} suffix="+" />
              <p className="text-xs font-mono mt-1" style={{ color: 'var(--text-muted)' }}>Problems Solved</p>
            </div>

            {/* Difficulty breakdown */}
            <div className="space-y-4">
              {difficultyData.map((d) => (
                <div key={d.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono" style={{ color: d.color }}>{d.label}</span>
                    <span className="text-xs font-mono font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      {d.count}
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: 'var(--border)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${d.pct}%` }}
                      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ background: d.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
            </motion.div>
          </ParticleCard>

          {/* Side cards */}
          <div className="flex flex-col gap-4">
            <ParticleCard
              glowColor="245, 158, 11"
              enableBorderGlow={true}
              enableMagnetism={true}
              clickEffect={true}
              enableTilt={false}
              particleCount={6}
              className="rounded-3xl flex-1"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <motion.div variants={staggerItemVariants} className="p-6 h-full">
                <Flame size={20} style={{ color: '#f59e0b' }} className="mb-4" />
                <p className="text-2xl font-bold gradient-text mb-1">Active</p>
                <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>Problem Solving Streak</p>
                <p className="text-xs mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Consistent daily practice builds pattern recognition that separates good engineers from great ones.
                </p>
              </motion.div>
            </ParticleCard>

            <ParticleCard
              glowColor="99, 102, 241"
              enableBorderGlow={true}
              enableMagnetism={true}
              clickEffect={true}
              enableTilt={false}
              particleCount={6}
              className="rounded-3xl flex-1"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <motion.div variants={staggerItemVariants} className="p-6 h-full">
                <Target size={20} className="text-indigo-400 mb-4" />
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Current Focus</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {leetcode.focus}
                </p>
              </motion.div>
            </ParticleCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
