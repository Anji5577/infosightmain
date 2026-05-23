import { motion } from 'motion/react';

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
    <section id="projects" className="py-24 border-b border-white/5 bg-neutral-950/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-3">Success stories</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Systems in production
          </h3>
          <p className="text-neutral-400 text-lg">
            Real pipelines solving complex entity problems natively 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden"
            >
              <div className="p-6 md:p-8 flex-grow">
                <div className="inline-block px-3 py-1 rounded-full bg-neutral-800 border border-white/5 text-xs font-mono text-neutral-300 mb-6">
                  {project.category}
                </div>
                <h4 className="text-xl font-medium text-white mb-2 tracking-tight">{project.title}</h4>
                <div className="text-xs font-mono text-neutral-500 mb-4">{project.client}</div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="px-6 md:px-8 py-4 bg-neutral-950 border-t border-neutral-800 flex flex-wrap gap-2">
                {project.metrics.map((metric, i) => (
                  <span key={i} className="text-xs font-mono text-neutral-400 px-2 py-1 rounded bg-neutral-900 border border-neutral-800">
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
