import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';
import { SplineScene } from './ui/SplineScene';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex min-h-[90vh] items-center">
      
      {/* Spline 3D Scene */}
      <SplineScene />

      {/* Cinematic Deep Glow */}
      <div className="absolute top-0 left-0 w-full max-w-2xl h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-full max-w-[400px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pointer-events-none">
        <div className="flex flex-col items-start text-left max-w-2xl pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-xs font-mono text-neutral-300 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span>AI Automation infrastructure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white leading-[1.05] tracking-tight mb-6"
          >
            Turning manual operations into <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-neutral-200 via-white to-neutral-500 bg-clip-text text-transparent">intelligent systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed font-light"
          >
            We help businesses automate workflows, deploy AI systems, and scale operations without increasing headcount. Production-grade from day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-md bg-white text-black font-medium hover:scale-[1.02] transition-transform duration-300 ease-out"
            >
              Book a consultation
              <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-md bg-neutral-900 border border-neutral-800 text-white font-medium hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300"
            >
              Explore services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
