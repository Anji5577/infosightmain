import { motion } from 'motion/react';
import { SubtleMesh } from './ui/SubtleMesh';
import logo from '@/logo.png';

export function CTA() {
  return (
    <section className="py-20 md:py-24 border-b border-white/5 relative overflow-hidden bg-transparent">
      {/* 3D Wireframe Depth System */}
      <SubtleMesh />
      
      <div className="absolute inset-0 bg-neutral-950/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center mb-6">
            <img
              src={logo}
              alt="InfoSightAI Logo"
              className="h-8 md:h-10 w-auto max-w-[240px] md:max-w-none object-contain"
            />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-white tracking-tight leading-[1.05] mb-4">
            Transform your business operations
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
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
