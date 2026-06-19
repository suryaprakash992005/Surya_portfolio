import { supabase } from "../../lib/supabase";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '../../hooks/useScrollAnimation';
import { personal } from '../../lib/data';
import { Mail, Github, Linkedin, Send, Loader2, CheckCircle2 } from 'lucide-react';

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

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) return;

  setStatus('sending');

  const { error } = await supabase
    .from('contact_messages')
    .insert([
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      }
    ]);

  if (error) {
    console.error(error);
    setStatus('error');
    return;
  }

  setStatus('success');

  setFormData({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
};

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
            Have a project in mind or want to collaborate? Get in touch directly or connect through social channels.
          </p>
        </motion.div>

        {/* Double-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch mb-16">
          {/* Left Column: Social Links */}
          <motion.div
            ref={linksRef}
            initial="hidden"
            animate={linksControls}
            variants={staggerContainerVariants}
            className="lg:col-span-5 flex flex-col gap-4 justify-between"
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
                  whileHover={{ y: -4, borderColor: `${link.color}40` }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl p-6 relative overflow-hidden group flex items-center gap-4 flex-1 min-h-[110px]"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  {/* Hover gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at center, ${link.color}08, transparent)` }}
                  />

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
                    style={{ background: `${link.color}15`, border: `1px solid ${link.color}25` }}
                  >
                    <Icon size={20} style={{ color: link.color }} />
                  </div>

                  <div className="relative z-10 text-left">
                    <p className="font-bold text-sm mb-0.5" style={{ color: 'var(--text-primary)' }}>
                      {link.label}
                    </p>
                    <p className="text-xs font-mono mb-0.5" style={{ color: 'var(--text-muted)' }}>
                      {link.value}
                    </p>
                    <p className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                      {link.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center min-h-[440px]"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center text-center justify-center h-full py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm max-w-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2 rounded-xl text-xs font-mono font-medium border transition-colors hover:bg-white/5"
                    style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                      Get In Touch
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      Have a project in mind or just want to chat? Drop a message.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="px-4 py-3 rounded-xl text-sm transition-all focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none w-full"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        className="px-4 py-3 rounded-xl text-sm transition-all focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none w-full"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-[10px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className="px-4 py-3 rounded-xl text-sm transition-all focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none w-full"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="px-4 py-3 rounded-xl text-sm transition-all focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none w-full resize-none h-32"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div className="flex justify-end mt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={status === 'sending'}
                      type="submit"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold transition-opacity w-full sm:w-auto min-w-[140px] disabled:opacity-70"
                      style={{ background: 'var(--gradient)' }}
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={14} />
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
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
