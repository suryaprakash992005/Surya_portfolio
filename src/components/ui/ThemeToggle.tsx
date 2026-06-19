import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      id="theme-toggle"
      onClick={onToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-white/5"
      aria-label="Toggle theme"
      style={{ border: '1px solid var(--border)' }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <Sun size={16} className="text-indigo-400" />
        ) : (
          <Moon size={16} className="text-indigo-600" />
        )}
      </motion.div>
    </motion.button>
  );
}
