import { useState } from 'react';
import { motion } from 'motion/react';
import { Workflow, FileText, LayoutDashboard, Server, Mic } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 border-t border-white/[0.04] bg-transparent relative z-10">

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3 font-medium">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white leading-tight mb-4">
            AI-native systems built for scale
          </h3>
          <p className="text-neutral-400 text-lg font-light leading-relaxed">
            Production-grade orchestrations configured to run 24/7.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Card 1: AI Workflow Automation (Large, 2 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <SpotlightCard className={`h-full p-6 md:p-8 flex flex-col group min-h-[380px] transition-all duration-500 border-l-2 border-l-indigo-500/30 ${hoveredCard === 1 ? 'border-indigo-500/50 bg-white/[0.025] shadow-[0_0_40px_rgba(99,102,241,0.06)]' : 'border-white/[0.06] bg-white/[0.01]'}`}>
              <div className="flex-grow">
                <div className="w-10 h-10 rounded-lg border border-indigo-500/25 flex items-center justify-center bg-indigo-500/5 mb-6 relative group-hover:border-indigo-500/50 transition-colors">
                  <div className="absolute inset-0 rounded-lg blur-md opacity-25 bg-indigo-500" />
                  <Workflow className="w-5 h-5 text-indigo-400 relative z-10" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-300">
                  AI Workflow Automation
                </h4>
                <p className="text-neutral-400 leading-relaxed text-sm font-light max-w-lg mb-6">
                  End-to-end intelligent pipelines that chain AI classification, data extraction, and multi-system orchestration.
                </p>
              </div>

              {/* Interactive Mockup: Active Node Pipeline */}
              <div className="mt-auto border border-white/[0.04] bg-black/40 rounded-xl p-4 md:p-5 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-neutral-500">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-neutral-300">
                    <span className={`w-1.5 h-1.5 rounded-full ${hoveredCard === 1 ? 'bg-indigo-400 animate-ping' : 'bg-indigo-500 animate-pulse'}`} />
                    INGEST
                  </div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 hidden sm:block relative overflow-hidden">
                    <motion.div 
                      animate={hoveredCard === 1 ? { left: ["-100%", "200%"] } : { left: ["-100%", "200%"] }}
                      transition={{ duration: hoveredCard === 1 ? 1.2 : 2.5, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 w-8 h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
                    />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-neutral-300">
                    <span className={`w-1.5 h-1.5 rounded-full ${hoveredCard === 1 ? 'bg-cyan-400 animate-ping' : 'bg-cyan-500 animate-pulse'}`} />
                    STRUCTURING (GEMINI)
                  </div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 hidden sm:block relative overflow-hidden">
                    <motion.div 
                      animate={hoveredCard === 1 ? { left: ["-100%", "200%"] } : { left: ["-100%", "200%"] }}
                      transition={{ duration: hoveredCard === 1 ? 1.2 : 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                      className="absolute top-0 w-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-neutral-300">
                    <span className={`w-1.5 h-1.5 rounded-full ${hoveredCard === 1 ? 'bg-emerald-400 animate-ping' : 'bg-emerald-500 animate-pulse'}`} />
                    DISPATCH
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: RFP Automation (1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <SpotlightCard className={`h-full p-6 md:p-8 flex flex-col group min-h-[380px] transition-all duration-500 border-t-2 border-t-cyan-500/30 ${hoveredCard === 2 ? 'border-cyan-500/50 bg-white/[0.025] shadow-[0_0_40px_rgba(6,182,212,0.06)]' : 'border-white/[0.06] bg-white/[0.01]'}`}>
              <div className="flex-grow">
                <div className="w-10 h-10 rounded-lg border border-cyan-500/25 flex items-center justify-center bg-cyan-500/5 mb-6 relative group-hover:border-cyan-500/50 transition-colors">
                  <div className="absolute inset-0 rounded-lg blur-md opacity-25 bg-cyan-500" />
                  <FileText className="w-5 h-5 text-cyan-400 relative z-10" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                  RFP Automation
                </h4>
                <p className="text-neutral-400 leading-relaxed text-sm font-light mb-6">
                  AI that reads, parses, and summarizes proposals — extracting scope, deadlines, and key terms in seconds.
                </p>
              </div>

              {/* Interactive Mockup: File Progress Bar */}
              <div className="mt-auto border border-white/[0.04] bg-black/40 rounded-xl p-4 flex flex-col gap-2 font-mono text-[10px]">
                <div className="flex justify-between items-center text-neutral-400">
                  <span className="truncate max-w-[130px]">{hoveredCard === 2 ? 'Analyzing proposal parameters...' : 'RFP_Audit_Brief.pdf'}</span>
                  <span className="text-cyan-400">{hoveredCard === 2 ? '100%' : '92%'}</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={hoveredCard === 2 ? { width: "100%" } : { width: "92%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`h-full rounded-full ${hoveredCard === 2 ? 'bg-emerald-400' : 'bg-cyan-400'}`} 
                  />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: PM Automation (1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <SpotlightCard className={`h-full p-6 md:p-8 flex flex-col group min-h-[380px] transition-all duration-500 border-r-2 border-r-emerald-500/30 ${hoveredCard === 3 ? 'border-emerald-500/50 bg-white/[0.025] shadow-[0_0_40px_rgba(16,185,129,0.06)]' : 'border-white/[0.06] bg-white/[0.01]'}`}>
              <div className="flex-grow">
                <div className="w-10 h-10 rounded-lg border border-emerald-500/25 flex items-center justify-center bg-emerald-500/5 mb-6 relative group-hover:border-emerald-500/50 transition-colors">
                  <div className="absolute inset-0 rounded-lg blur-md opacity-25 bg-emerald-500" />
                  <LayoutDashboard className="w-5 h-5 text-emerald-400 relative z-10" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-200 transition-colors duration-300">
                  PM Automation
                </h4>
                <p className="text-neutral-400 leading-relaxed text-sm font-light mb-6">
                  Intelligent task extraction from emails, deadline-proximity scoring, and telegram notification triggers.
                </p>
              </div>

              {/* Interactive Mockup: Task Toggles */}
              <div className="mt-auto border border-white/[0.04] bg-black/40 rounded-xl p-4 flex flex-col gap-2 font-mono text-[10px] text-neutral-400">
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-2 text-[8px] text-neutral-500 uppercase">
                  <span>TELEGRAM ALERT TRIGGER</span>
                  <span className="text-emerald-400 animate-pulse">active</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 border border-white/5 p-2 rounded-md transition-all duration-300">
                  <span className={hoveredCard === 3 ? 'line-through text-neutral-600' : 'text-neutral-300'}>Extract schema requirements</span>
                  <span className={`text-[9px] font-semibold ${hoveredCard === 3 ? 'text-emerald-400' : 'text-amber-400/80'}`}>
                    {hoveredCard === 3 ? '✓ Done' : 'Pending'}
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 4: AI Voice Receptionist (1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <SpotlightCard className={`h-full p-6 md:p-8 flex flex-col group min-h-[380px] transition-all duration-500 border-b-2 border-b-rose-500/30 ${hoveredCard === 4 ? 'border-rose-500/50 bg-white/[0.025] shadow-[0_0_40px_rgba(244,63,94,0.06)]' : 'border-white/[0.06] bg-white/[0.01]'}`}>
              <div className="flex-grow">
                <div className="w-10 h-10 rounded-lg border border-rose-500/25 flex items-center justify-center bg-rose-500/5 mb-6 relative group-hover:border-rose-500/50 transition-colors">
                  <div className="absolute inset-0 rounded-lg blur-md opacity-25 bg-rose-500" />
                  <Mic className="w-5 h-5 text-rose-400 relative z-10" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-rose-200 transition-colors duration-300">
                  AI Voice Receptionist
                </h4>
                <p className="text-neutral-400 leading-relaxed text-sm font-light mb-6">
                  24/7 AI receptionist answering calls, classifying intents, routing lines, and scheduling calendars.
                </p>
              </div>

              {/* Interactive Mockup: Active Sound Waveform */}
              <div className="mt-auto border border-white/[0.04] bg-black/40 rounded-xl p-4 flex items-center justify-center gap-1.5 h-12 relative overflow-hidden">
                <div className="w-1 h-6 bg-rose-500/70 rounded-full animate-soundwave" style={{ animationDelay: '0.1s', animationDuration: hoveredCard === 4 ? '0.5s' : '1.2s' }} />
                <div className="w-1 h-9 bg-rose-400 rounded-full animate-soundwave" style={{ animationDelay: '0.3s', animationDuration: hoveredCard === 4 ? '0.4s' : '1s' }} />
                <div className="w-1 h-4 bg-rose-500/50 rounded-full animate-soundwave" style={{ animationDelay: '0.5s', animationDuration: hoveredCard === 4 ? '0.6s' : '1.4s' }} />
                <div className="w-1 h-7 bg-rose-400 rounded-full animate-soundwave" style={{ animationDelay: '0.2s', animationDuration: hoveredCard === 4 ? '0.3s' : '0.9s' }} />
                <div className="w-1 h-10 bg-rose-500 rounded-full animate-soundwave" style={{ animationDelay: '0.4s', animationDuration: hoveredCard === 4 ? '0.45s' : '1.1s' }} />
                <div className="w-1 h-5 bg-rose-500/80 rounded-full animate-soundwave" style={{ animationDelay: '0.6s', animationDuration: hoveredCard === 4 ? '0.5s' : '1.3s' }} />
                <div className="w-1 h-8 bg-rose-400 rounded-full animate-soundwave" style={{ animationDelay: '0.15s', animationDuration: hoveredCard === 4 ? '0.35s' : '0.95s' }} />
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 5: Enterprise AI Deployment (Large, 2 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <SpotlightCard className={`h-full p-6 md:p-8 flex flex-col group min-h-[380px] transition-all duration-500 border-l-2 border-l-violet-500/30 ${hoveredCard === 5 ? 'border-violet-500/50 bg-white/[0.025] shadow-[0_0_40px_rgba(139,92,246,0.06)]' : 'border-white/[0.06] bg-white/[0.01]'}`}>
              <div className="flex-grow">
                <div className="w-10 h-10 rounded-lg border border-violet-500/25 flex items-center justify-center bg-violet-500/5 mb-6 relative group-hover:border-violet-500/50 transition-colors">
                  <div className="absolute inset-0 rounded-lg blur-md opacity-25 bg-violet-500" />
                  <Server className="w-5 h-5 text-violet-400 relative z-10" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-200 transition-colors duration-300">
                  Enterprise AI Deployment
                </h4>
                <p className="text-neutral-400 leading-relaxed text-sm font-light max-w-lg mb-6">
                  Production-ready AI systems with monitoring, error handling, and scalability integrated into your existing stack.
                </p>
              </div>

              {/* Interactive Mockup: Active Telemetry Logs */}
              <div className="mt-auto border border-white/[0.04] bg-black rounded-xl p-4 md:p-5 flex flex-col gap-2 font-mono text-[9px] text-neutral-500 overflow-hidden relative max-h-[90px]">
                <div className="flex justify-between items-center text-white/40 pb-1.5 border-b border-white/5 mb-1 text-[8px] uppercase">
                  <span>TELEMETRY STREAM</span>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                </div>
                <div className="flex gap-2 transition-all">
                  <span className="text-violet-400">[SYS]</span>
                  <span>{hoveredCard === 5 ? 'Ingesting webhook payload... OK' : 'Calibrating nodes... SUCCESS'}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-indigo-400">[GEMINI]</span>
                  <span>{hoveredCard === 5 ? 'Running semantic check... 200 OK (22ms)' : 'Deploying container image... OK'}</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
