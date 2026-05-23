export function CTA() {
  return (
    <section className="py-32 border-b border-white/5 relative overflow-hidden bg-black">
      {/* Subtle depth effect */}
      <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <div className="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center font-bold text-2xl font-mono mx-auto mb-8">
          IS
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
          Transform your business operations
        </h2>
        <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
          Deploy intelligent automation processes mapped directly to your internal needs and accelerate operational efficiency significantly.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-md hover:bg-neutral-200 transition-colors"
        >
          Book a consultation
        </a>
      </div>
    </section>
  );
}
