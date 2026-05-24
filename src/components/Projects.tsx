import { motion } from 'motion/react';
import { SpotlightCard } from './ui/SpotlightCard';

export function Projects() {
  const projects = [
    {
      category: "RFP Automation",
      title: "Automated RFP Intelligence Pipeline",
      client: "Infosight Consultancy · AEC & ELV",
      description: "35-node AI pipeline that intercepts RFP emails, classifies with Gemini, extracts structured scope data, generates PDF briefs, and distributes automatically.",
      metrics: ["12x Faster", "<60s Per RFP", "35+ Nodes"]
    },
    {
      category: "PM Automation",
      title: "Intelligent Project Manager System",
      client: "Infosight Consultancy · AEC & ELV",
      description: "AI-powered PM layer monitoring all emails, auto-extracting tasks, scoring priority, surfacing everything in a live React dashboard with Telegram alerts.",
      metrics: ["85% Less work", "0 Missed", "24/7 Running"]
    },
    {
      category: "Voice AI",
      title: "AI Voice Receptionist System",
      client: "Infosight Consultancy · AEC & ELV",
      description: "AI-powered voice receptionist answering calls 24/7, understanding intent with NLP, routing inquiries, booking appointments, sending Telegram summaries.",
      metrics: ["24/7 Live", "0 Missed calls", "95% Accuracy"]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-white/5 bg-neutral-950/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-3 font-medium">Success stories</h2>
          <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-white mb-4">
            Systems in production
          </h2>
          <p className="text-neutral-400 text-lg font-light">
            Real pipelines solving complex entity problems natively 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <SpotlightCard className="h-full flex flex-col">
                <div className="p-5 md:p-6 flex-grow">
                  <div className="inline-block px-3 py-1 rounded-full bg-neutral-800 border border-white/5 text-xs font-mono text-neutral-300 mb-4 font-medium">
                    {project.category}
                  </div>
                  <h4 className="text-xl font-medium text-white mb-2">{project.title}</h4>
                  <div className="text-xs font-mono text-neutral-500 mb-4">{project.client}</div>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="px-5 md:px-6 py-4 border-t border-white/5 flex flex-wrap gap-2">
                  {project.metrics.map((metric, i) => (
                    <span key={i} className="text-xs font-mono text-neutral-300 px-2.5 py-1 rounded bg-white/5 border border-white/5">
                      {metric}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
