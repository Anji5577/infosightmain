import { motion } from 'motion/react';

export function Testimonials() {
  const reviews = [
    {
      quote: "InfoSightAI transformed our RFP workflow into a highly efficient automated system. What previously required extensive manual coordination can now be completed faster, with greater accuracy and significantly improved operational visibility. The automation has helped our teams focus on strategic execution instead of repetitive tasks.",
      author: "KSN Prasad",
      role: "Managing Director, Infosight Consultancy — Dubai"
    },
    {
      quote: "The Project Managers Automation system developed by InfoSightAI streamlined project tracking, reporting, and team coordination across multiple departments. The automation reduced operational bottlenecks, improved accountability, and enabled faster decision-making throughout our delivery process.",
      author: "Vamsidhar Babu",
      role: "Managing Director, Infosight Consultancy — India"
    }
  ];

  return (
    <section id="reviews" className="py-24 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 mb-6">
            Client Results
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Trusted by teams scaling with AI.
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Businesses use InfoSightAI to automate operations, reduce overhead, and deploy intelligent systems faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col p-8 md:p-10 rounded-xl bg-neutral-900 border border-neutral-800 relative"
            >
              <span className="absolute top-8 left-8 text-5xl font-serif text-neutral-800 leading-none select-none">"</span>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed relative z-10 font-medium mb-8">
                {review.quote}
              </p>
              <div className="mt-auto pt-6 border-t border-white/5">
                <p className="text-white font-semibold text-sm mb-1">{review.author}</p>
                <p className="text-neutral-500 font-mono text-xs">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
