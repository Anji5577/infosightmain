import { motion } from 'motion/react';
import { SpotlightCard } from './ui/SpotlightCard';

export function Industries() {
  const cleanIndustries = [
    { name: "AEC & Construction", short: "AEC", desc: "Automating tender processes, RFP data extraction, and contract compliance reviews.", glowColor: "rgba(99, 102, 241, 0.15)" },
    { name: "Financial Services", short: "FIN", desc: "Streamlining financial reports, transaction auditing, and multi-system ledger updates.", glowColor: "rgba(6, 182, 212, 0.15)" },
    { name: "Healthcare & Life Sciences", short: "HLT", desc: "AI-powered intake summarization, HIPAA-compliant document processing, and scheduling.", glowColor: "rgba(16, 185, 129, 0.15)" },
    { name: "Real Estate Portfolios", short: "RES", desc: "Automating tenant routing pipelines, lease data extraction, and maintenance tracking.", glowColor: "rgba(139, 92, 246, 0.15)" },
    { name: "Supply Chain & Logistics", short: "LOG", desc: "Automating waybill classification, cargo manifest data capture, and custom alerts.", glowColor: "rgba(244, 63, 94, 0.15)" },
    { name: "E-commerce Operations", short: "ECO", desc: "AI-based order intent classification, auto-refund workflow triggers, and customer CRM sync.", glowColor: "rgba(245, 158, 11, 0.15)" },
  ];

  return (
    <section className="py-24 md:py-32 border-b border-white/[0.04] bg-neutral-950/20 relative z-10">

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
        >
          <div>
            <h2 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3 font-medium">Sectors</h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight">
              Automation for every sector
            </h3>
          </div>
          <p className="text-neutral-400 max-w-sm lg:text-right font-light leading-relaxed text-sm">
            Architecturally flexible infrastructure that adapts perfectly across distinct operational domains.
          </p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cleanIndustries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <SpotlightCard className="h-full p-6 md:p-8 flex flex-col group relative">
                {/* Subtle top glow highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Colored tag */}
                <div className="flex justify-between items-center mb-5">
                  <span className="text-xs font-mono font-semibold text-neutral-500 tracking-wider uppercase bg-white/[0.02] border border-white/[0.05] px-2.5 py-1 rounded">
                    {ind.short}
                  </span>
                  
                  {/* Subtle decorative glow dot */}
                  <div 
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: ind.glowColor,
                      boxShadow: `0 0 10px ${ind.glowColor}`
                    }}
                  />
                </div>

                <h4 className="text-lg font-semibold text-white mb-2.5 group-hover:text-indigo-200 transition-colors duration-300">
                  {ind.name}
                </h4>
                
                <p className="text-sm text-neutral-400 font-light leading-relaxed flex-grow">
                  {ind.desc}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
