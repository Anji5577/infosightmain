import { motion } from 'motion/react';

export function Workflow() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "We audit your workflows and map every manual process.",
    },
    {
      number: "02",
      title: "Design",
      description: "We architect an AI pipeline tailored to your stack.",
    },
    {
      number: "03",
      title: "Deploy",
      description: "Working production system in days, tested on your data.",
    },
    {
      number: "04",
      title: "Optimize",
      description: "24/7 monitoring, continuous improvement, scaling.",
    },
  ];

  return (
    <section className="py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-3">How it works</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            From chaos to clarity in 4 steps
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative p-6 pt-8 bg-neutral-900 border border-white/10 rounded-xl"
            >
              <span className="absolute top-4 right-6 text-3xl font-mono font-bold text-neutral-800 pointer-events-none select-none">
                {step.number}
              </span>
              <h4 className="text-lg font-medium text-white mb-2 mt-4">{step.title}</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
