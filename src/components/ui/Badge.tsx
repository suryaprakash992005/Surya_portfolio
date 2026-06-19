import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'indigo' | 'cyan' | 'gold';
  size?: 'sm' | 'md';
}

const variantStyles = {
  default: 'bg-white/5 text-[var(--text-secondary)] border-[var(--border)]',
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  gold: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
};

export default function Badge({ children, variant = 'default', size = 'md' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border font-medium font-mono tracking-wide ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </span>
  );
}
