import { motion } from 'motion/react';

export function Industries() {
  const industries = [
    { name: "AEC & Construction", icon: "🏢" },
    { name: "Finance", icon: "📉" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Real Estate", icon: "🔑" },
    { name: "Logistics", icon: "📦" },
    { name: "E-commerce", icon: "🛍️" },
  ];

  // Replacing emojis with clean technical text/abbreviations to match strict SaaS style
  const cleanIndustries = [
    { name: "AEC & Construction", short: "AEC" },
    { name: "Financial Services", short: "FIN" },
    { name: "Healthcare & Life Sciences", short: "HLT" },
    { name: "Real Estate Portfolios", short: "RES" },
    { name: "Supply Chain & Logistics", short: "LOG" },
    { name: "E-commerce Operations", short: "ECO" },
  ];

  return (
    <section className="py-24 border-b border-white/5 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-3">Industries</h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Automation for every sector
            </h3>
          </div>
          <p className="text-neutral-400 max-w-sm md:text-right">
            Architecturally flexible infrastructure that adapts perfectly across distinct operational domains.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cleanIndustries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex flex-col justify-center items-center text-center p-6 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 hover:bg-neutral-800/50 transition-colors"
            >
              <div className="text-xl font-mono font-semibold text-neutral-600 mb-3">{ind.short}</div>
              <h4 className="text-sm font-medium text-neutral-300">{ind.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
