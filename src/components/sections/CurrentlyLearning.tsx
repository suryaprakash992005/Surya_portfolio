import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '../../hooks/useScrollAnimation';
import { currentlyLearning } from '../../lib/data';
import { BookOpen, Lightbulb } from 'lucide-react';

export default function CurrentlyLearning() {
  const [headerRef, headerControls] = useScrollAnimation();
  const [cardsRef, cardsControls] = useScrollAnimation();

  return (
    <section id="learning" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
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
            08 — Currently Learning
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Engineering Roadmap
          </h2>
          <p className="text-sm max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            The best engineers are always learning. These are the domains I'm actively deepening my understanding of right now.
          </p>
        </motion.div>

        {/* Learning Cards */}
        <motion.div
          ref={cardsRef}
          initial="hidden"
          animate={cardsControls}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {currentlyLearning.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItemVariants}
              whileHover={{ y: -6, borderColor: 'rgba(99,102,241,0.3)' }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-7 relative overflow-hidden group"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              {/* Subtle gradient background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at top right, ${item.color}08, transparent)` }}
              />

              <div className="relative z-10">
                {/* Icon + Status */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                  >
                    {item.icon}
                  </div>
                  <div
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono"
                    style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#34d399' }}
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    Active
                  </div>
                </div>

                {/* Topic */}
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {item.topic}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>

                {/* Progress bar */}
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>Progress</span>
                    <span className="text-xs font-mono font-semibold" style={{ color: item.color }}>{item.progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: 'var(--border)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}80)` }}
                    />
                  </div>
                </div>

                {/* Why */}
                <div className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <Lightbulb size={12} className="mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                  <span>{item.why}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 p-7 rounded-3xl flex items-start gap-4"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <BookOpen size={20} className="text-indigo-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Learning philosophy: </span>
            I don't learn to list things on a resume. I learn because understanding a technology deeply
            changes how I think about every problem. Depth before breadth — always.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
