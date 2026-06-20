import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, User, Layers, FolderOpen, Map, Mail, Home } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import Dock from '../ui/Dock';
import StaggeredMenu from '../ui/StaggeredMenu';
import { personal } from '../../lib/data';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const navLinks = [
  { label: 'Home',     href: '#hero',     icon: <Home     size={17} /> },
  { label: 'About',   href: '#about',    icon: <User     size={17} /> },
  { label: 'Stack',   href: '#stack',    icon: <Layers   size={17} /> },
  { label: 'Projects',href: '#projects', icon: <FolderOpen size={17} /> },
  { label: 'Journey', href: '#journey',  icon: <Map      size={17} /> },
  { label: 'Connect', href: '#connect',  icon: <Mail     size={17} /> },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
          scrolled
            ? 'glass border-b border-[var(--border)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm font-mono"
              style={{ background: 'var(--gradient)' }}
            >
              SVK
            </div>
            <span
              className="font-semibold text-sm hidden sm:block"
              style={{ color: 'var(--text-primary)' }}
            >
              Suryaprakash VK
            </span>
          </motion.a>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-white/5"
              style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-white/5"
              style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <motion.a
              href={personal.resumePath}
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-medium"
              style={{ background: 'var(--gradient)' }}
              id="nav-resume-download"
            >
              <Download size={14} />
              Resume
            </motion.a>
          </div>
        </div>
      </motion.header>

      {/* Mobile Header (Staggered Menu) */}
      <div className="block md:hidden">
        <StaggeredMenu
          isFixed={true}
          position="right"
          colors={['var(--bg-card)', 'var(--accent-indigo-glow)', 'var(--accent-indigo)']}
          accentColor="var(--accent-indigo)"
          items={navLinks.map(link => ({
            label: link.label,
            ariaLabel: `Go to ${link.label}`,
            link: link.href,
            onClick: () => scrollTo(link.href)
          }))}
          socialItems={[
            { label: 'GitHub', link: personal.github },
            { label: 'LinkedIn', link: personal.linkedin }
          ]}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor={theme === 'dark' ? '#fff' : '#000'}
          openMenuButtonColor={theme === 'dark' ? '#fff' : '#000'}
          logoUrl="" // SVG fallback
          headerActions={<ThemeToggle theme={theme} onToggle={onToggleTheme} />}
        />
      </div>
      {/* ── Bottom Dock Navigation ── */}
      <div
        className="fixed bottom-4 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none"
        style={{ height: 120 }}
      >
        <div className="pointer-events-auto">
          <Dock
            items={navLinks.map(link => ({
              icon: (
                <div style={{
                  color: activeSection === link.href.slice(1) ? '#818cf8' : 'inherit',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3
                }}>
                  {link.icon}
                  {activeSection === link.href.slice(1) && (
                    <span className="dock-active-dot" />
                  )}
                </div>
              ),
              label: link.label,
              onClick: () => scrollTo(link.href),
            }))}
            panelHeight={60}
            baseItemSize={46}
            magnification={68}
            distance={180}
            spring={{ mass: 0.1, stiffness: 180, damping: 13 }}
          />
        </div>
      </div>
    </>
  );
}
