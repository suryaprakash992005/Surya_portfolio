import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '../../hooks/useScrollAnimation';
import Badge from '../ui/Badge';
import { experience } from '../../lib/data';
import { CheckCircle2, Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const [headerRef, headerControls] = useScrollAnimation();
  const [cardRef, cardControls] = useScrollAnimation();

  const exp = experience[0];

  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
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
            03 — Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Engineering Experience
          </h2>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          ref={cardRef}
          initial="hidden"
          animate={cardControls}
          variants={fadeUpVariants}
        >
          <div
            className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            {/* Gradient orb */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-5 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }}
            />

            <div className="grid md:grid-cols-[1fr_auto] gap-8">
              {/* Left */}
              <div>
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
                  >
                    <Briefcase size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <p className="font-medium gradient-text text-sm">{exp.company}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {exp.description}
                </p>

                {/* Learning bullets */}
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
                    Key Learning Outcomes
                  </p>
                  <motion.ul
                    initial="hidden"
                    animate={cardControls}
                    variants={staggerContainerVariants}
                    className="space-y-3"
                  >
                    {exp.learnings.map((item, i) => (
                      <motion.li
                        key={i}
                        variants={staggerItemVariants}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <CheckCircle2 size={15} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.tags.map(tag => (
                    <Badge key={tag} variant="indigo" size="sm">{tag}</Badge>
                  ))}
                </div>
              </div>

              {/* Right — metadata */}
              <div className="flex flex-wrap md:flex-col gap-4 md:gap-6 md:items-end md:text-right">
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono"
                  style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#34d399' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {exp.type}
                </div>
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono"
                  style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                >
                  <Calendar size={12} />
                  {exp.duration} · {exp.period}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
