import { motion } from 'motion/react';
import { SpotlightCard } from './ui/SpotlightCard';

export function Industries() {
  const cleanIndustries = [
    { name: "AEC & Construction", short: "AEC" },
    { name: "Financial Services", short: "FIN" },
    { name: "Healthcare & Life Sciences", short: "HLT" },
    { name: "Real Estate Portfolios", short: "RES" },
    { name: "Supply Chain & Logistics", short: "LOG" },
    { name: "E-commerce Operations", short: "ECO" },
  ];

  return (
    <section className="py-16 md:py-20 border-b border-white/5 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10"
        >
          <div>
            <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-3 font-medium">Industries</h2>
            <h3 className="text-3xl md:text-4xl font-medium text-white">
              Automation for every sector
            </h3>
          </div>
          <p className="text-neutral-400 max-w-sm md:text-right font-light leading-relaxed">
            Architecturally flexible infrastructure that adapts perfectly across distinct operational domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cleanIndustries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <SpotlightCard className="h-full flex flex-col justify-center items-center text-center p-5 !bg-neutral-900 border-neutral-800">
                <div className="text-xl font-mono font-semibold text-white/50 mb-3">{ind.short}</div>
                <h4 className="text-sm font-medium text-neutral-300">{ind.name}</h4>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
