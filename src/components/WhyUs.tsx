import { motion } from 'motion/react';
import { Zap, Brain, Blocks, Box, TrendingUp, ShieldCheck } from 'lucide-react';

export function WhyUs() {
  const reasons = [
    {
      icon: <Zap size={20} />,
      title: "Ships in Days",
      description: "Working production systems deployed in days, avoiding risky monolithic multi-month timelines."
    },
    {
      icon: <Brain size={20} />,
      title: "Domain-Aware AI",
      description: "We tune prompts, provide contextual vector retrieval, and adapt models strictly for your industry context."
    },
    {
      icon: <Blocks size={20} />,
      title: "Custom to Your Stack",
      description: "No forced proprietary lock-in. Built firmly around your existing SaaS tools and internal APIs."
    },
    {
      icon: <Box size={20} />,
      title: "Full-Stack Ownership",
      description: "From webhook ingestion to frontend dashboards, we engineer and own the entire end-to-end pipeline."
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Measurable ROI",
      description: "We establish clear before/after baseline metrics ensuring automation drastically cuts real capital overhead."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Fully Managed",
      description: "Ongoing 24/7 observability, error handling, rate-limit management, and model version upgrades."
    }
  ];

  return (
    <section id="why" className="py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16 max-w-2xl mx-auto text-center">
          <h2 className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-3">Why InfoSightAI</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Built different by design
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="p-6 md:p-8 rounded-xl bg-neutral-900 border border-neutral-800"
            >
              <div className="text-neutral-300 mb-5">
                {reason.icon}
              </div>
              <h4 className="text-lg font-medium text-white mb-2">{reason.title}</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
