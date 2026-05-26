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
    <section id="projects" className="py-24 md:py-32 border-b border-white/[0.04] bg-black relative z-10">
      {/* Cinematic ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-500/[0.015] blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3 font-medium">Success stories</h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4">
            Systems in production
          </h3>
          <p className="text-neutral-400 text-lg font-light leading-relaxed">
            Real pipelines solving complex entity problems natively 24/7.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            if (index === 0) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-2 h-full"
                >
                  <SpotlightCard className="h-full flex flex-col group relative">
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="p-6 md:p-8 flex-grow grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-7 flex flex-col justify-center h-full">
                        <div className="inline-block self-start px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-neutral-300 mb-5 font-medium group-hover:border-white/20 transition-all duration-300">
                          {project.category}
                        </div>
                        <h4 className="text-2xl md:text-3xl font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-300 leading-tight">
                          {project.title}
                        </h4>
                        <div className="text-xs font-mono text-neutral-500 mb-5 tracking-wider uppercase">
                          {project.client}
                        </div>
                        <p className="text-sm text-neutral-400 font-light leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Right side interactive graphic representing data flow */}
                      <div className="md:col-span-5 h-[160px] border border-white/[0.04] bg-black/40 rounded-xl p-4 flex flex-col justify-center items-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03),transparent_60%)]" />
                        
                        <div className="relative w-full h-full flex items-center justify-around z-10">
                          <div className="flex flex-col items-center gap-1.5">
                            <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-[10px] font-mono text-indigo-300">IN</div>
                            <span className="text-[8px] font-mono text-neutral-500">EMAIL</span>
                          </div>
                          
                          <div className="flex-grow max-w-[40px] h-[1px] bg-indigo-500/20 relative">
                            <motion.div 
                              animate={{ left: ["0%", "100%"] }} 
                              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                              className="absolute -top-0.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#6366f1]"
                            />
                          </div>

                          <div className="flex flex-col items-center gap-1.5">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[10px] font-mono text-cyan-300 animate-pulse">AI</div>
                            <span className="text-[8px] font-mono text-neutral-500">PARSING</span>
                          </div>

                          <div className="flex-grow max-w-[40px] h-[1px] bg-cyan-500/20 relative">
                            <motion.div 
                              animate={{ left: ["0%", "100%"] }} 
                              transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.9 }}
                              className="absolute -top-0.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]"
                            />
                          </div>

                          <div className="flex flex-col items-center gap-1.5">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[10px] font-mono text-emerald-300">OUT</div>
                            <span className="text-[8px] font-mono text-neutral-500">DISPATCH</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 md:px-8 py-5 border-t border-white/[0.05] bg-white/[0.005] flex flex-wrap gap-2 group-hover:border-white/[0.1] transition-colors duration-300">
                      {project.metrics.map((metric, i) => (
                        <span 
                          key={i} 
                          className="text-xs font-mono text-neutral-300 px-3 py-1.5 rounded-md bg-white/[0.02] border border-white/[0.05] shadow-inner group-hover:border-white/[0.12] transition-all duration-300"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-1 h-full"
              >
                <SpotlightCard className="h-full flex flex-col group relative">
                  {/* Subtle top glow highlight */}
                  <div className={`absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent ${index === 1 ? 'via-cyan-500/30' : 'via-rose-500/30'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="p-6 md:p-8 flex-grow">
                    <div className="inline-block px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-neutral-300 mb-5 font-medium group-hover:border-white/20 transition-all duration-300">
                      {project.category}
                    </div>
                    
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-300">
                      {project.title}
                    </h4>
                    
                    <div className="text-xs font-mono text-neutral-500 mb-5 tracking-wider uppercase">
                      {project.client}
                    </div>
                    
                    <p className="text-sm text-neutral-400 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics footer section */}
                  <div className="px-6 md:px-8 py-5 border-t border-white/[0.05] bg-white/[0.005] flex flex-wrap gap-2 group-hover:border-white/[0.1] transition-colors duration-300">
                    {project.metrics.map((metric, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-mono text-neutral-300 px-3 py-1.5 rounded-md bg-white/[0.02] border border-white/[0.05] shadow-inner group-hover:border-white/[0.12] transition-all duration-300"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
