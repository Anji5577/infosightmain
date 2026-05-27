import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: "How long does deployment take?",
      answer: "Most production systems go live within 1-2 weeks depending on the complexity of workflow integrations and context structuring."
    },
    {
      question: "What tools do you integrate with?",
      answer: "We natively interface with Gmail, Google Drive, Supabase, Telegram, Slack, custom internal APIs, and basically any modern software offering a webhook or API endpoint."
    },
    {
      question: "Do we need technical staff?",
      answer: "Absolutely not. We architect, build, host, monitor, and maintain the entire data infrastructure so you capture pure operational efficiency without engineering management."
    },
    {
      question: "What AI models do you use?",
      answer: "We utilize best-in-class LLMs prioritized for their token context constraints and structured reasoning capabilities, primarily relying heavily on Google Gemini."
    },
    {
      question: "How is pricing structured?",
      answer: "We employ project-based, predictable fixed fees aligned precisely to business outcomes, mitigating the risk of runaway scope creep or variable operational runaway."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 border-b border-white/[0.04] bg-transparent relative z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/[0.01] blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-3xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3 font-medium">FAQ</p>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight">
            Common questions
          </h3>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-white/[0.015] border-white/20 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
                    : 'bg-white/[0.002] border-white/[0.05] hover:border-white/15'
                }`}
              >
                {/* Subtle top glow highlight on active card */}
                {isOpen && (
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
                )}

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left relative z-10"
                >
                  <span className="font-semibold text-white text-base md:text-lg group-hover:text-neutral-200 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 ml-4 group-hover:border-white/20 transition-all">
                    <ChevronDown 
                      size={14} 
                      className={`text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`} 
                    />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 md:p-6 pt-0 text-sm text-neutral-400 leading-relaxed font-light relative z-10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
