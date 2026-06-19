import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '../../hooks/useScrollAnimation';
import { achievements } from '../../lib/data';

export default function Achievements() {
  const [headerRef, headerControls] = useScrollAnimation();
  const [cardsRef, cardsControls] = useScrollAnimation();

  return (
    <section id="achievements" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
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
            07 — Milestones
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Engineering Milestones
          </h2>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          ref={cardsRef}
          initial="hidden"
          animate={cardsControls}
          variants={staggerContainerVariants}
          className="grid sm:grid-cols-2 gap-5"
        >
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItemVariants}
              whileHover={{ y: -4, borderColor: 'rgba(99,102,241,0.3)' }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-7 relative overflow-hidden group"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              {/* Gradient on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.04), rgba(6,182,212,0.04))' }} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: 'rgba(99,102,241,0.08)' }}
                  >
                    {item.icon}
                  </div>
                  <div
                    className="px-3 py-1 rounded-xl text-xs font-mono font-bold gradient-text"
                    style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}
                  >
                    {item.metric}
                  </div>
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
