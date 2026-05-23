import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      {/* Vercel-like Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-300 mb-8"
          >
            <Terminal size={14} className="text-neutral-400" />
            <span>AI Automation infrastructure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
          >
            Turning manual operations into <span className="text-neutral-500">intelligent systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed"
          >
            We help businesses automate workflows, deploy AI systems, and scale operations without increasing headcount. Production-grade from day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
            >
              Book a consultation
              <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-md bg-neutral-900 border border-neutral-800 text-white font-medium hover:bg-neutral-800 hover:border-neutral-700 transition-colors"
            >
              Explore services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
