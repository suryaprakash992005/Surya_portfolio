import { Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../../lib/data';

export default function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}
    >
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs font-mono"
            style={{ background: 'var(--gradient)' }}
          >
            SVK
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              Suryaprakash VK
            </p>
            <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              Software Engineer
            </p>
          </div>
        </div>

        {/* Center text */}
        <p className="text-xs font-mono text-center" style={{ color: 'var(--text-muted)' }}>
          Built with React · TypeScript · Framer Motion · © {new Date().getFullYear()}
        </p>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="transition-colors duration-200 hover:text-indigo-400"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-indigo-400"
            style={{ color: 'var(--text-muted)' }}
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-indigo-400"
            style={{ color: 'var(--text-muted)' }}
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
