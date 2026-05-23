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
    <section id="reviews" className="py-32 border-b border-white/5 overflow-hidden bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-400 mb-6">
            Client Results
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-white mb-4">
            Trusted by teams scaling with AI.
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
            Businesses use InfoSightAI to automate operations, reduce overhead, and deploy intelligent systems faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col p-8 md:p-10 rounded-xl bg-black border border-white/5 relative shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8 text-6xl font-serif text-white/5 leading-none select-none">"</div>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed relative z-10 font-light mb-10">
                {review.quote}
              </p>
              <div className="mt-auto pt-6 border-t border-white/5">
                <p className="text-white font-medium text-sm mb-1">{review.author}</p>
                <p className="text-neutral-500 font-mono text-xs">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
