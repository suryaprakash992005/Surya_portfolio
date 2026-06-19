import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Code2, Download } from 'lucide-react';
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation';
import GlassCard from '../ui/GlassCard';
import { about, education, personal } from '../../lib/data';

export default function About() {
  const [cardsRef, cardsControls] = useScrollAnimation();

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <p className="text-xs font-mono tracking-widest mb-3 gradient-text uppercase">
            01 — About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            The Engineering Mindset
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Story */}
          <div>
            {about.story.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-60px' }}
                className="text-base leading-relaxed mb-5"
                style={{ color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)' }}
              >
                {i === 0 ? <strong>{paragraph}</strong> : paragraph}
              </motion.p>
            ))}

            {/* Education block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              className="mt-8 p-5 rounded-2xl"
              style={{
                background: 'rgba(99,102,241,0.05)',
                border: '1px solid rgba(99,102,241,0.15)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(99,102,241,0.15)' }}
                >
                  <GraduationCap size={18} className="text-indigo-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                    {education.college}
                  </p>
                  <p className="text-xs font-mono mb-3" style={{ color: 'var(--text-secondary)' }}>
                    {education.degree} · Class of {education.graduation}
                  </p>
                  <div className="flex gap-4">
                    <div>
                      <p className="text-lg font-bold gradient-text">{education.cgpa}</p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>CGPA</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold gradient-text">{education.graduation}</p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Graduating</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location + Resume */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-6"
            >
              <div
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono"
                style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
              >
                <MapPin size={12} />
                {personal.location}
              </div>
              <a
                href={personal.resumePath}
                download
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                style={{ border: '1px solid rgba(99,102,241,0.2)', background: 'rgba(99,102,241,0.05)' }}
                id="about-resume-download"
              >
                <Download size={12} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right — Philosophy Cards */}
          <motion.div
            ref={cardsRef}
            initial="hidden"
            animate={cardsControls}
            variants={staggerContainerVariants}
            className="flex flex-col gap-4"
          >
            {about.philosophyCards.map((card, i) => (
              <motion.div key={i} variants={staggerItemVariants}>
                <GlassCard>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                      style={{ background: 'rgba(99,102,241,0.1)' }}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1.5 text-sm" style={{ color: 'var(--text-primary)' }}>
                        {card.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            {/* Code philosophy quote */}
            <motion.div
              variants={staggerItemVariants}
              className="p-5 rounded-2xl relative overflow-hidden"
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border)',
              }}
            >
              <Code2 size={14} className="text-indigo-400 mb-3" />
              <p className="text-sm font-mono leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                "The best engineers don't just write code that works. They write code that
                <span className="gradient-text font-semibold"> communicates intent</span>,
                scales gracefully, and can be understood by the next person."
              </p>
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-5 pointer-events-none"
                style={{ background: '#6366f1' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
