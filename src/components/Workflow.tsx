import { motion } from 'motion/react';
import { Search, PenTool, Radio, RefreshCw } from 'lucide-react';

export function Workflow() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "We audit your workflows and map every manual process.",
      icon: <Search className="w-5 h-5 text-indigo-400 group-hover:rotate-[15deg] group-hover:scale-110 transition-transform duration-300" />,
      telemetry: "AUDITED: 24 Core APIs"
    },
    {
      number: "02",
      title: "Design",
      description: "We architect an AI pipeline tailored to your stack.",
      icon: <PenTool className="w-5 h-5 text-cyan-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />,
      telemetry: "SCHEMA: YAML Spec v4"
    },
    {
      number: "03",
      title: "Deploy",
      description: "Working production system in days, tested on your data.",
      icon: <Radio className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />,
      telemetry: "PROD: ACTIVE Node #08"
    },
    {
      number: "04",
      title: "Optimize",
      description: "24/7 monitoring, continuous improvement, scaling.",
      icon: <RefreshCw className="w-5 h-5 text-rose-400 group-hover:rotate-180 transition-transform duration-500" />,
      telemetry: "AGENTS: Auto-Scaling"
    },
  ];

  return (
    <section className="py-24 md:py-32 border-b border-white/[0.04] bg-transparent relative overflow-hidden z-10">

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3 font-medium">Orchestration Graph</h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white leading-tight">
            From chaos to clarity in 4 steps
          </h3>
        </motion.div>

        {/* Node Graph Container */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Desktop Custom Bezier Spline Pathway Connection (Dual Data Pipelines) */}
          <div className="absolute top-[32px] left-[12.5%] right-[12.5%] w-[75%] h-[40px] hidden md:block z-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path 
                d="M 0 20 Q 200 40 400 20 T 800 20" 
                stroke="rgba(255,255,255,0.06)" 
                strokeWidth="1.5" 
                fill="none" 
              />
              <motion.path 
                d="M 0 20 Q 200 40 400 20 T 800 20" 
                stroke="url(#splineGlow)" 
                strokeWidth="2.5" 
                fill="none" 
                strokeDasharray="60 180"
                animate={{ strokeDashoffset: [-240, 240] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              <motion.path 
                d="M 0 20 Q 200 40 400 20 T 800 20" 
                stroke="url(#splineGlowCyan)" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="40 200"
                animate={{ strokeDashoffset: [-240, 240] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1.5 }}
              />
              <defs>
                <linearGradient id="splineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6344F5" stopOpacity="0" />
                  <stop offset="50%" stopColor="#18CCFC" />
                  <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="splineGlowCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                  <stop offset="50%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Mobile Connecting Line */}
          <div className="absolute left-[31px] top-[40px] bottom-[40px] w-[1.5px] bg-gradient-to-b from-transparent via-white/[0.08] to-transparent md:hidden z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-6 pt-8 bg-white/[0.008] border border-white/[0.04] backdrop-blur-md rounded-2xl hover:border-white/[0.12] hover:bg-white/[0.015] transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Subtle top glow highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Node bubble */}
                <div className="w-16 h-16 rounded-2xl border border-white/10 bg-black flex items-center justify-center mb-6 relative group-hover:border-indigo-500/40 group-hover:scale-105 transition-all duration-300 shadow-inner z-10">
                  <div className="absolute inset-0 rounded-2xl bg-indigo-500/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
                  
                  {/* Glowing particle ring around node */}
                  <div className="absolute -inset-1 rounded-2xl border border-indigo-500/10 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 animate-pulse" />
                  
                  <div className="relative z-10">{step.icon}</div>
                </div>

                <div className="text-[10px] font-mono text-neutral-500 mb-2 uppercase tracking-widest">
                  Step {step.number}
                </div>

                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-300">
                  {step.title}
                </h4>
                
                <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-[200px]">
                  {step.description}
                </p>

                {/* Micro-telemetry display */}
                <div className="mt-6 pt-3 border-t border-white/[0.03] w-full flex items-center justify-between font-mono text-[9px] text-neutral-500 uppercase tracking-wider group-hover:border-white/[0.08] transition-colors">
                  <span>System Log</span>
                  <span className="text-neutral-400 group-hover:text-indigo-300 transition-colors font-medium">{step.telemetry}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
