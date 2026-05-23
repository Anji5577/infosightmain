import logo from '@/logo.png';

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img
                src={logo}
                alt="InfoSightAI Logo"
                className="h-5 md:h-6 w-auto max-w-[180px] md:max-w-none object-contain"
              />
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs mb-6">
              AI & Automation Services.<br />
              A division of Infosight Consultancy.
            </p>
            <a href="mailto:info@info-sight.net" className="text-sm text-neutral-300 hover:text-white transition-colors">
              info@info-sight.net
            </a>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors">AI Workflow Automation</a></li>
              <li><a href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors">RFP Automation</a></li>
              <li><a href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors">PM Automation</a></li>
              <li><a href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors">Enterprise AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="https://info-sight.net/about_us.html" target="_blank" rel="noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-sm text-neutral-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="https://info-sight.net/contact_us.html" target="_blank" rel="noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#faq" className="text-sm text-neutral-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">n8n Cloud</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Google Gemini</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Supabase</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">React</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © 2026 InfoSightAI. All rights reserved.
          </p>
          <a href="https://info-sight.net" target="_blank" rel="noreferrer" className="text-xs text-neutral-500 hover:text-white transition-colors">
            info-sight.net ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
