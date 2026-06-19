import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants } from '../../hooks/useScrollAnimation';
import { journey } from '../../lib/data';
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';

export default function Journey() {
  const [headerRef, headerControls] = useScrollAnimation();

  return (
    <section id="journey" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={fadeUpVariants}
          className="mb-20 text-center"
        >
          <p className="text-xs font-mono tracking-widest mb-3 gradient-text uppercase">
            09 — Engineering Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            The Path So Far
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Every engineer has a story. This is mine — from the first line of code to building real products.
          </p>
        </motion.div>

        {/* Scroll Stack cards */}
        <div className="relative w-full max-w-4xl mx-auto px-4 md:px-0">
          <ScrollStack
            useWindowScroll={true}
            itemDistance={120}
            itemScale={0.04}
            itemStackDistance={35}
            stackPosition="20%"
            scaleEndPosition="10%"
            baseScale={0.9}
            rotationAmount={1}
            blurAmount={1}
          >
            {journey.map((item) => (
              <ScrollStackItem key={item.stage}>
                <div 
                  className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 h-full w-full p-8 rounded-[24px] bg-[var(--bg-card)]"
                  style={{
                    border: `1px solid ${item.color}30`,
                    boxShadow: `0 15px 35px -5px ${item.color}10, 0 0 30px rgba(0, 0, 0, 0.2)`
                  }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-mono font-bold px-2 py-0.5 rounded animate-pulse"
                        style={{ background: `${item.color}15`, color: item.color }}
                      >
                        Stage {item.stage}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono mb-3 gradient-text uppercase tracking-wider font-semibold">
                      {item.subtitle}
                    </p>
                    <p className="text-sm md:text-base leading-relaxed text-gray-300" style={{ color: 'var(--text-secondary)' }}>
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Large background watermark or accent icon */}
                  <div 
                    className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl text-3xl md:text-4xl flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}25, ${item.color}05)`,
                      border: `1px solid ${item.color}40`,
                      boxShadow: `0 8px 32px ${item.color}10`,
                    }}
                  >
                    {item.icon}
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* Current status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-mono gradient-text font-medium">
              Currently: Expanding Full Stack capabilities · Writing better code every day
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
