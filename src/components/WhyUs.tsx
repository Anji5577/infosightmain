import { motion } from 'motion/react';
import { Zap, Brain, Blocks, Box, TrendingUp, ShieldCheck } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

export function WhyUs() {
  const reasons = [
    {
      icon: <Zap size={18} className="text-neutral-400" />,
      title: "Ships in Days",
      description: "Working production systems deployed in days, avoiding risky monolithic multi-month timelines."
    },
    {
      icon: <Brain size={18} className="text-neutral-400" />,
      title: "Domain-Aware AI",
      description: "We tune prompts, provide contextual vector retrieval, and adapt models strictly for your industry context."
    },
    {
      icon: <Blocks size={18} className="text-neutral-400" />,
      title: "Custom to Your Stack",
      description: "No forced proprietary lock-in. Built firmly around your existing SaaS tools and internal APIs."
    },
    {
      icon: <Box size={18} className="text-neutral-400" />,
      title: "Full-Stack Ownership",
      description: "From webhook ingestion to frontend dashboards, we engineer and own the entire end-to-end pipeline."
    },
    {
      icon: <TrendingUp size={18} className="text-neutral-400" />,
      title: "Measurable ROI",
      description: "We establish clear before/after baseline metrics ensuring automation drastically cuts real capital overhead."
    },
    {
      icon: <ShieldCheck size={18} className="text-neutral-400" />,
      title: "Fully Managed",
      description: "Ongoing 24/7 observability, error handling, rate-limit management, and model version upgrades."
    }
  ];

  return (
    <section id="why" className="py-16 md:py-20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-12 max-w-2xl mx-auto text-center"
        >
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-3 font-medium">Why InfoSightAI</h2>
          <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-white">
            Built different by design
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <SpotlightCard className="h-full p-5 md:p-6">
                <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center bg-white/5 mb-4">
                  {reason.icon}
                </div>
                <h4 className="text-lg font-medium text-white mb-2">{reason.title}</h4>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
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
