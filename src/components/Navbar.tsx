import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '@/logo.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Us', href: '#why' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-xl border-white/[0.06] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="InfoSightAI Logo"
            className="h-5 md:h-6 w-auto max-w-[180px] md:max-w-none object-contain transition-opacity group-hover:opacity-85"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="text-sm font-medium bg-white/[0.03] text-white border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-md hover:bg-white/[0.08] transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
          >
            Get in touch
          </a>
        </div>

        <button
          className="md:hidden text-white hover:opacity-80 transition-opacity"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/[0.08] py-6 px-6 md:hidden flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-300 hover:text-white py-1 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium bg-white text-black px-4 py-2.5 rounded border border-white text-center mt-2 hover:bg-neutral-200 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in touch
          </a>
        </motion.div>
      )}
    </nav>
  );
}
