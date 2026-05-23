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
    <section className="py-32 border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-3 font-medium">How it works</h2>
          <h3 className="text-3xl md:text-4xl font-medium text-white">
            From chaos to clarity in 4 steps
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 pt-8 bg-black border border-white/10 rounded-xl"
            >
              <div className="absolute -top-3 left-6 px-2 bg-black text-xs font-mono text-neutral-500 border border-white/10 rounded px-2 py-1">
                STEP {step.number}
              </div>
              <h4 className="text-lg font-medium text-white mb-2 mt-4">{step.title}</h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
