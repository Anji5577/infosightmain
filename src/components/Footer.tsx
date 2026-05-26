import logo from '@/logo.png';

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 relative z-10 overflow-hidden">
      {/* Premium glowing divider separator line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Volumetric glows for cinematic horizon ending */}
      <div className="absolute bottom-0 inset-x-0 h-[280px] bg-[radial-gradient(circle_at_center_bottom,rgba(99,102,241,0.03),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[180px] bg-[radial-gradient(circle_at_center_bottom,rgba(167,139,250,0.025),transparent_60%)] pointer-events-none z-0 blur-[60px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img
                src={logo}
                alt="InfoSightAI Logo"
                className="h-5 md:h-6 w-auto max-w-[180px] md:max-w-none object-contain"
              />
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs mb-6 font-light">
              AI & Automation Services.<br />
              A division of Infosight Consultancy.
            </p>
            <a 
              href="mailto:info@info-sight.net" 
              className="text-sm text-indigo-300 hover:text-white font-mono transition-colors duration-300"
            >
              info@info-sight.net
            </a>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-light">AI Workflow Automation</a></li>
              <li><a href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-light">RFP Automation</a></li>
              <li><a href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-light">PM Automation</a></li>
              <li><a href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-light">Enterprise AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              <li><a href="https://info-sight.net/about_us.html" target="_blank" rel="noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-light">About</a></li>
              <li><a href="#projects" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-light">Projects</a></li>
              <li><a href="https://info-sight.net/contact_us.html" target="_blank" rel="noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-light">Contact</a></li>
              <li><a href="#faq" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-light">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-widest mb-5">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-light">n8n Cloud</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-light">Google Gemini</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-light">Supabase</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-light">React</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 font-light font-mono">
            © 2026 InfoSightAI. All rights reserved.
          </p>
          <a 
            href="https://info-sight.net" 
            target="_blank" 
            rel="noreferrer" 
            className="text-xs text-neutral-500 hover:text-white transition-colors duration-300 font-light font-mono"
          >
            info-sight.net ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
