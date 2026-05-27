import { motion } from 'motion/react';

export function Testimonials() {
  const reviews = [
    {
      quote: "InfoSightAI transformed our RFP workflow into a highly efficient automated system. What previously required extensive manual coordination can now be completed faster, with greater accuracy and significantly improved operational visibility.",
      author: "KSN Prasad",
      role: "Managing Director, Infosight Consultancy — Dubai"
    },
    {
      quote: "The Project Managers Automation system developed by InfoSightAI streamlined project tracking, reporting, and team coordination across multiple departments. The automation reduced operational bottlenecks, improved accountability, and enabled faster decision-making.",
      author: "Vamsidhar Babu",
      role: "Managing Director, Infosight Consultancy — India"
    }
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 border-b border-white/[0.04] overflow-hidden bg-neutral-950/20 relative z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/[0.01] blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.08] text-xs font-mono text-neutral-400 mb-6">
            Client Results
          </div>
          <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4">
            Trusted by teams scaling with AI
          </h3>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Businesses use InfoSightAI to automate operations, reduce overhead, and deploy intelligent systems faster.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col p-8 md:p-10 rounded-xl bg-white/[0.01] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.02] relative transition-all duration-300 shadow-2xl group overflow-hidden"
            >
              {/* Subtle top glow highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-0 right-0 p-8 text-7xl font-serif text-white/5 leading-none select-none group-hover:text-indigo-500/10 transition-colors duration-300">"</div>
              
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed relative z-10 font-light mb-8 italic">
                {review.quote}
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/[0.05] relative z-10 group-hover:border-white/[0.1] transition-colors duration-300">
                <p className="text-white font-semibold text-sm mb-1">{review.author}</p>
                <p className="text-neutral-500 font-mono text-xs tracking-wider uppercase">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
