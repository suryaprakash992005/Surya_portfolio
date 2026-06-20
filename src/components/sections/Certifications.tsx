import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '../../hooks/useScrollAnimation';
import { certifications } from '../../lib/data';
import { Award, ExternalLink } from 'lucide-react';
import { ParticleCard } from '../ui/MagicBento';

// Map hex color to rough RGB for glowColor prop
const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
};

export default function Certifications() {
  const [headerRef, headerControls] = useScrollAnimation();
  const [cardsRef, cardsControls] = useScrollAnimation();

  return (
    <section id="certifications" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
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
            05 — Certifications
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Verified Technical Learning
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={cardsRef}
          initial="hidden"
          animate={cardsControls}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 gap-6"
        >
          {certifications.map((cert) => (
            <ParticleCard
              key={cert.id}
              glowColor={hexToRgb(cert.color)}
              enableBorderGlow={true}
              enableMagnetism={true}
              clickEffect={true}
              enableTilt={false}
              particleCount={8}
              className="rounded-3xl group"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <motion.div
                variants={staggerItemVariants}
                whileHover={{ y: -6, borderColor: 'rgba(99,102,241,0.3)' }}
                transition={{ duration: 0.3 }}
                className="p-5 sm:p-8 relative overflow-hidden h-full"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${cert.badgeColor}`}
                />

                {/* Shimmer overlay */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                      style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
                    >
                      {cert.icon}
                    </div>
                    <div
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold"
                      style={{ color: cert.color, background: `${cert.color}10`, border: `1px solid ${cert.color}20` }}
                    >
                      <Award size={12} />
                      {cert.issuer}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {cert.subject}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {cert.description}
                  </p>

                  {/* Bottom bar */}
                  <div
                    className="flex items-center justify-between mt-6 pt-5"
                    style={{ borderTop: '1px solid var(--border)' }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                        Verified Certification
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-1 text-xs font-mono"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <ExternalLink size={11} />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ParticleCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
