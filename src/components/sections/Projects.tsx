import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '../../hooks/useScrollAnimation';
import Badge from '../ui/Badge';
import { projects } from '../../lib/data';
import { ArrowUpRight, Layers, CheckCircle2, ExternalLink } from 'lucide-react';
import { ParticleCard } from '../ui/MagicBento';
import SplashCursor from '../ui/SplashCursor';

export default function Projects() {
  const [headerRef, headerControls] = useScrollAnimation();
  const [cardRef, cardControls] = useScrollAnimation();
  const [archRef, archControls] = useScrollAnimation();

  const project = projects[0];

  return (
    <section id="projects" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <SplashCursor />
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
            04 — Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            What I've Built
          </h2>
          <p className="text-sm max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Not sandbox tutorials. Not college assignments. A production software product
            delivered to a real client and deployed to production.
          </p>
        </motion.div>

        {/* Featured Project — Full Width Hero Card */}
        <motion.div
          ref={cardRef}
          initial="hidden"
          animate={cardControls}
          variants={fadeUpVariants}
          className="rounded-3xl overflow-hidden mb-8"
          style={{ border: '1px solid var(--border)' }}
        >
          {/* Project header bar */}
          <div
            className="p-8 md:p-10 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(6,182,212,0.05))',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />

            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex flex-wrap items-center gap-3">
                {/* Real Client Badge — gold, prominent */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(252,211,77,0.1))',
                    border: '1px solid rgba(245,158,11,0.4)',
                    color: '#fbbf24',
                  }}
                >
                  ⭐ REAL CLIENT PROJECT
                </motion.div>
                <Badge variant="success">Live in Production</Badge>
              </div>

              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(99,102,241,0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold"
                style={{ background: 'var(--gradient)' }}
                id="project-live-demo"
              >
                <ExternalLink size={14} />
                Live Demo
                <ArrowUpRight size={14} />
              </motion.a>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              {project.name}
            </h3>
            <p className="text-sm font-mono mb-4" style={{ color: 'var(--text-secondary)' }}>
              Role: <span className="gradient-text font-semibold">{project.role}</span>
            </p>
            <p className="text-base max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {project.tagline}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.stack.map(tech => (
                <Badge key={tech} variant="indigo">{tech}</Badge>
              ))}
            </div>
          </div>

          {/* Problem + Solution */}
          <div className="grid md:grid-cols-2" style={{ background: 'var(--bg-card)' }}>
            <div className="p-8 md:p-10" style={{ borderRight: '1px solid var(--border)' }}>
              <div
                className="inline-block px-2 py-1 rounded text-xs font-mono mb-4"
                style={{ background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' }}
              >
                Problem
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.problem}
              </p>
            </div>
            <div className="p-8 md:p-10">
              <div
                className="inline-block px-2 py-1 rounded text-xs font-mono mb-4"
                style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399', border: '1px solid rgba(16,185,129,0.2)' }}
              >
                Solution
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
            <div className="p-8 md:p-10">
              <p className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: 'var(--text-muted)' }}>
                Feature Set
              </p>
              <motion.div
                initial="hidden"
                animate={cardControls}
                variants={staggerContainerVariants}
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
              >
                {project.features.map((feature, i) => (
                  <ParticleCard
                    key={i}
                    glowColor="99, 102, 241"
                    enableBorderGlow={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    enableTilt={false}
                    particleCount={6}
                    className="rounded-xl"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                  >
                    <motion.div
                      variants={staggerItemVariants}
                      className="flex items-start gap-3 p-4 w-full h-full"
                    >
                      <span className="text-xl flex-shrink-0">{feature.icon}</span>
                      <div>
                        <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                          {feature.label}
                        </p>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  </ParticleCard>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Architecture Table */}
        <ParticleCard
          ref={undefined}
          glowColor="6, 182, 212"
          enableBorderGlow={true}
          enableMagnetism={false}
          clickEffect={false}
          enableTilt={false}
          particleCount={8}
          className="rounded-3xl overflow-hidden"
          style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
        >
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Layers size={18} className="text-indigo-400" />
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                System Architecture
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    {['Layer', 'Technology', 'Responsibility'].map(col => (
                      <th
                        key={col}
                        className="text-left text-xs font-mono uppercase tracking-widest pb-4 pr-8"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {project.architecture.map((row, i) => (
                    <tr
                      key={i}
                      className="transition-colors hover:bg-white/2"
                      style={{ borderBottom: i < project.architecture.length - 1 ? '1px solid var(--border)' : 'none' }}
                    >
                      <td className="py-4 pr-8">
                        <span className="font-semibold text-xs font-mono gradient-text">{row.layer}</span>
                      </td>
                      <td className="py-4 pr-8">
                        <Badge variant="indigo" size="sm">{row.tech}</Badge>
                      </td>
                      <td className="py-4" style={{ color: 'var(--text-secondary)' }}>
                        {row.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex items-center gap-3 p-4 rounded-xl"
              style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)' }}>
              <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
              <p className="text-sm font-mono" style={{ color: '#34d399' }}>
                {project.outcome}
              </p>
            </div>
          </div>
        </ParticleCard>
      </div>
    </section>
  );
}
