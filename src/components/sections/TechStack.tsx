import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '../../hooks/useScrollAnimation';
import Badge from '../ui/Badge';
import { techStack } from '../../lib/data';
import {
  SiJavascript, SiHtml5, SiCss, SiReact,
  SiSupabase, SiGit, SiGithub, SiVsco, SiVercel,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Database } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  java: <FaJava size={24} />,
  javascript: <SiJavascript size={24} />,
  sql: <Database size={24} />,
  html5: <SiHtml5 size={24} />,
  css3: <SiCss size={24} />,
  react: <SiReact size={24} />,
  supabase: <SiSupabase size={24} />,
  git: <SiGit size={24} />,
  github: <SiGithub size={24} />,
  vscode: <SiVsco size={24} />,
  vercel: <SiVercel size={24} />,
};

interface TechItem {
  name: string;
  level: string;
  icon: string;
  color: string;
}

function TechCard({ tech }: { tech: TechItem }) {
  const levelVariant = tech.level === 'Intermediate' ? 'indigo' : 'default';
  return (
    <motion.div
      variants={staggerItemVariants}
      whileHover={{ y: -4, borderColor: 'rgba(99,102,241,0.4)' }}
      transition={{ duration: 0.2 }}
      className="glass rounded-2xl p-5 flex flex-col gap-4 group"
      style={{ border: '1px solid var(--border)' }}
    >
      <div className="flex items-start justify-between">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ color: tech.color, background: `${tech.color}18` }}
        >
          {iconMap[tech.icon] || <span className="text-xl">{tech.name[0]}</span>}
        </div>
        <Badge variant={levelVariant as 'indigo' | 'default'} size="sm">
          {tech.level}
        </Badge>
      </div>
      <div>
        <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
          {tech.name}
        </p>
        <div className="mt-2 h-1 rounded-full" style={{ background: 'var(--border)' }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: tech.level === 'Intermediate' ? '65%' : '30%' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${tech.color}, ${tech.color}99)` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

interface StackGroup {
  label: string;
  items: TechItem[];
}

function StackSection({ group, index }: { group: StackGroup; index: number }) {
  const [ref, controls] = useScrollAnimation();

  return (
    <div className="mb-12">
      <motion.p
        ref={ref as React.RefObject<HTMLParagraphElement>}
        initial={{ opacity: 0, x: -20 }}
        animate={controls}
        transition={{ delay: index * 0.1 }}
        className="text-xs font-mono tracking-widest uppercase mb-5"
        style={{ color: 'var(--text-muted)' }}
      >
        {group.label}
      </motion.p>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={staggerContainerVariants}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {group.items.map((tech) => (
          <TechCard key={tech.name} tech={tech} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TechStack() {
  const [headerRef, headerControls] = useScrollAnimation();

  const groups: StackGroup[] = [
    { label: 'Languages', items: techStack.languages },
    { label: 'Frontend', items: techStack.frontend },
    { label: 'Backend & Database', items: techStack.backend },
    { label: 'Tools & Workflow', items: techStack.tools },
  ];

  return (
    <section id="stack" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
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
            02 — Engineering Toolkit
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Technologies I Work With
          </h2>
          <p className="text-sm max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Every tool chosen deliberately. Proficiency is honest — marked as Intermediate or Beginner
            because engineers who overstate their skills build fragile systems.
          </p>
        </motion.div>

        {/* Stack groups */}
        {groups.map((group, i) => (
          <StackSection key={group.label} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}
