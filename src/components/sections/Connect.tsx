import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '../../hooks/useScrollAnimation';
import { personal } from '../../lib/data';
import { Mail, Github, Linkedin } from 'lucide-react';

const connectLinks = [
  {
    id: 'email-link',
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    description: 'Send a direct message',
    color: '#6366f1',
  },
  {
    id: 'github-link',
    icon: Github,
    label: 'GitHub',
    value: 'suryaprakash992005',
    href: personal.github,
    description: 'See the code I write',
    color: '#ffffff',
  },
  {
    id: 'linkedin-link',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'suryaprakash992005',
    href: personal.linkedin,
    description: 'Professional profile',
    color: '#0a66c2',
  },
];

export default function Connect() {
  const [headerRef, headerControls] = useScrollAnimation();
  const [linksRef, linksControls] = useScrollAnimation();

  return (
    <section id="connect" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-custom">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={fadeUpVariants}
          className="mb-16 text-center"
        >
          <p className="text-xs font-mono tracking-widest mb-3 gradient-text uppercase">
            10 — Connect
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Find Me Online
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            No sales pitch. No collaboration requests. Just the places where I exist online
            and show my work.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          ref={linksRef}
          initial="hidden"
          animate={linksControls}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto"
        >
          {connectLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.id}
                id={link.id}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                variants={staggerItemVariants}
                whileHover={{ y: -6, borderColor: `${link.color}40` }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl p-7 relative overflow-hidden group block"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${link.color}08, transparent)` }}
                />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${link.color}15`, border: `1px solid ${link.color}25` }}
                  >
                    <Icon size={24} style={{ color: link.color }} />
                  </div>
                  <p className="font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                    {link.label}
                  </p>
                  <p className="text-xs font-mono mb-2" style={{ color: 'var(--text-muted)' }}>
                    {link.value}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {link.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Building software because{' '}
            <span className="gradient-text">I love engineering.</span>
          </p>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Suryaprakash VK · Tiruttani, Tamil Nadu, India
          </p>
        </motion.div>
      </div>
    </section>
  );
}
