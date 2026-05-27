import { motion } from 'motion/react';
import { Zap, Brain, Blocks, Box, TrendingUp, ShieldCheck } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

export function WhyUs() {
  const reasons = [
    {
      icon: <Zap size={18} className="text-indigo-400" />,
      title: "Ships in Days",
      description: "Working production systems deployed in days, avoiding risky monolithic multi-month timelines.",
      glowColor: "rgba(99, 102, 241, 0.1)"
    },
    {
      icon: <Brain size={18} className="text-cyan-400" />,
      title: "Domain-Aware AI",
      description: "We tune prompts, provide contextual vector retrieval, and adapt models strictly for your industry context.",
      glowColor: "rgba(6, 182, 212, 0.1)"
    },
    {
      icon: <Blocks size={18} className="text-emerald-400" />,
      title: "Custom to Your Stack",
      description: "No forced proprietary lock-in. Built firmly around your existing SaaS tools and internal APIs.",
      glowColor: "rgba(16, 185, 129, 0.1)"
    },
    {
      icon: <Box size={18} className="text-violet-400" />,
      title: "Full-Stack Ownership",
      description: "From webhook ingestion to frontend dashboards, we engineer and own the entire end-to-end pipeline.",
      glowColor: "rgba(139, 92, 246, 0.1)"
    },
    {
      icon: <TrendingUp size={18} className="text-rose-400" />,
      title: "Measurable ROI",
      description: "We establish clear before/after baseline metrics ensuring automation drastically cuts real capital overhead.",
      glowColor: "rgba(244, 63, 94, 0.1)"
    },
    {
      icon: <ShieldCheck size={18} className="text-amber-400" />,
      title: "Fully Managed",
      description: "Ongoing 24/7 observability, error handling, rate-limit management, and model version upgrades.",
      glowColor: "rgba(245, 158, 11, 0.1)"
    }
  ];

  return (
    <section id="why" className="py-24 md:py-32 border-b border-white/[0.04] bg-black relative z-10">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/[0.015] blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-2xl mx-auto text-center"
        >
          <h2 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3 font-medium">Why InfoSightAI</h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white leading-tight">
            Built different by design
          </h3>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <SpotlightCard className="h-full p-6 md:p-8 flex flex-col group relative">
                {/* Subtle top glow highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glowing Icon Container */}
                <div 
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center bg-white/5 mb-6 relative transition-all duration-300 group-hover:border-white/20"
                  style={{
                    boxShadow: `0 0 12px ${reason.glowColor}`
                  }}
                >
                  <div className="absolute inset-0 rounded-lg blur-md opacity-25 group-hover:opacity-45 transition-opacity" style={{ background: reason.glowColor }} />
                  <div className="relative z-10">{reason.icon}</div>
                </div>

                <h4 className="text-lg font-semibold text-white mb-2.5 group-hover:text-indigo-200 transition-colors duration-300">
                  {reason.title}
                </h4>
                <p className="text-sm text-neutral-400 font-light leading-relaxed flex-grow">
                  {reason.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
