import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-b border-white/[0.04] relative z-10 bg-black overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/[0.015] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/[0.01] blur-[130px] rounded-full pointer-events-none z-0" />

      {/* SVG Neural Node Mesh */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.22] z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="15%" y1="20%" x2="40%" y2="40%" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" />
        <line x1="40%" y1="40%" x2="25%" y2="70%" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" />
        <line x1="25%" y1="70%" x2="10%" y2="50%" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" />
        <line x1="10%" y1="50%" x2="15%" y2="20%" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" />
        <line x1="40%" y1="40%" x2="70%" y2="25%" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" />
        <line x1="70%" y1="25%" x2="85%" y2="60%" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" />
        <line x1="85%" y1="60%" x2="60%" y2="80%" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" />
        <line x1="60%" y1="80%" x2="25%" y2="70%" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" />
        <line x1="40%" y1="40%" x2="60%" y2="80%" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" />

        {/* Pulsing Clusters */}
        <circle cx="15%" cy="20%" r="4" fill="#818cf8" />
        <circle cx="15%" cy="20%" r="10" fill="none" stroke="#818cf8" strokeWidth="1" className="animate-pulse" />

        <circle cx="40%" cy="40%" r="5" fill="#6366f1" />
        <circle cx="40%" cy="40%" r="14" fill="none" stroke="#6366f1" strokeWidth="1" className="animate-pulse" />

        <circle cx="25%" cy="70%" r="3.5" fill="#818cf8" />
        <circle cx="25%" cy="70%" r="9" fill="none" stroke="#818cf8" strokeWidth="1" className="animate-pulse" />

        <circle cx="70%" cy="25%" r="4.5" fill="#6366f1" />
        <circle cx="70%" cy="25%" r="12" fill="none" stroke="#6366f1" strokeWidth="1" className="animate-pulse" />

        <circle cx="85%" cy="60%" r="5" fill="#818cf8" />
        <circle cx="85%" cy="60%" r="14" fill="none" stroke="#818cf8" strokeWidth="1" className="animate-pulse" />

        <circle cx="60%" cy="80%" r="4" fill="#6366f1" />
        <circle cx="60%" cy="80%" r="10" fill="none" stroke="#6366f1" strokeWidth="1" className="animate-pulse" />

        <circle cx="10%" cy="50%" r="2.5" fill="#4f46e5" opacity="0.6" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-6 tracking-tight leading-tight">
            Let's build something <span className="bg-gradient-to-r from-neutral-200 via-white to-neutral-400 bg-clip-text text-transparent">together.</span>
          </h2>
          <p className="text-neutral-400 text-lg font-light leading-relaxed">
            Ready to scale your operations with intelligent systems? We'll help you find the right architecture.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="flex gap-5 items-start group">
              <div className="w-12 h-12 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/25 transition-all shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                <Mail className="text-white w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1.5 group-hover:text-indigo-200 transition-colors">Direct Email</h3>
                <p className="text-neutral-400 font-light text-sm mb-3">Reach out to our engineering team directly.</p>
                <a href="mailto:hello@infosightai.com" className="text-indigo-300 hover:text-white font-mono text-sm transition-colors">
                  hello@infosightai.com
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start group">
              <div className="w-12 h-12 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/25 transition-all shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                <MessageSquare className="text-white w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1.5 group-hover:text-indigo-200 transition-colors">Support Hours</h3>
                <p className="text-neutral-400 font-light text-sm leading-relaxed">
                  Monday to Friday<br/>
                  9:00 AM - 6:00 PM (EST)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {isSubmitted ? (
              <div className="bg-white/[0.01] border border-white/[0.08] backdrop-blur-xl rounded-2xl p-8 md:p-12 text-center h-full flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
                <div className="w-16 h-16 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <Send className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Message Sent</h3>
                <p className="text-neutral-400 text-sm font-light mb-8 max-w-xs mx-auto leading-relaxed">
                  We've received your inquiry and our team will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.12)] hover:bg-neutral-100"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-white/[0.008] border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500 backdrop-blur-xl rounded-2xl space-y-6 shadow-2xl relative overflow-hidden group/form">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm font-light">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2 font-medium">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/[0.01] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/[0.08] shadow-[0_0_20px_rgba(99,102,241,0.02)] transition-all duration-300 font-light text-sm"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2 font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/[0.01] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/[0.08] shadow-[0_0_20px_rgba(99,102,241,0.02)] transition-all duration-300 font-light text-sm"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/[0.01] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/[0.08] shadow-[0_0_20px_rgba(99,102,241,0.02)] transition-all duration-300 resize-none font-light text-sm leading-relaxed"
                    placeholder="Tell us about your operations..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-semibold rounded-lg px-4 py-3.5 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(99,102,241,0.22)] hover:bg-neutral-100 cursor-pointer relative overflow-hidden group"
                >
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-sweep pointer-events-none" />
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>
                  ) : (
                    <span className="relative z-10 flex justify-center items-center gap-2">
                      Submit <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
