import { motion } from 'motion/react';
import { SubtleMesh } from './ui/SubtleMesh';
import logo from '@/logo.png';

export function CTA() {
  return (
    <section className="py-40 border-b border-white/5 relative overflow-hidden bg-black">
      {/* 3D Wireframe Depth System */}
      <SubtleMesh />

      {/* Cinematic ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <div className="absolute inset-0 bg-neutral-950/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center mb-10">
            <img
              src={logo}
              alt="InfoSightAI Logo"
              className="h-10 md:h-12 w-auto max-w-[200px] md:max-w-none object-contain"
              style={{ filter: 'invert(1) hue-rotate(180deg)' }}
            />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-white tracking-tight leading-[1.05] mb-8">
            Transform your business operations
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Deploy intelligent automation processes mapped directly to your internal needs and accelerate operational efficiency significantly.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-medium rounded-md hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Start your AI deployment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
