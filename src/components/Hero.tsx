import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden flex lg:min-h-[75vh] items-center">
      
      {/* Spotlight Ambient Beam */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Cinematic Deep Glow */}
      <div className="absolute top-0 left-0 w-full max-w-2xl h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-full max-w-[400px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
        
        {/* Left Content Column */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white leading-[1.05] tracking-tight mb-4"
          >
            Turning manual operations into <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-neutral-200 via-white to-neutral-500 bg-clip-text text-transparent">intelligent systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-6 leading-relaxed font-light"
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

        {/* Right 3D Content Container: Stacked relative on mobile/tablet, absolutely positioned on desktop */}
        <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 w-full lg:w-[48%] xl:w-[800px] h-[320px] sm:h-[400px] lg:h-[90%] z-0 flex items-center justify-center mt-6 lg:mt-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

      </div>
    </section>
  );
}
