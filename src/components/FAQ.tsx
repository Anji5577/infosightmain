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
    <section id="faq" className="py-24 border-b border-white/5">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-3 font-medium">FAQ</h2>
          <h3 className="text-3xl font-medium text-white">
            Common questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-lg transition-colors duration-200 ${isOpen ? 'bg-neutral-900 border-neutral-700' : 'bg-transparent border-neutral-800 hover:border-neutral-700'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <span className="font-medium text-white text-base">{faq.question}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-neutral-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 md:p-6 pt-0 text-sm text-neutral-400 leading-relaxed">
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
