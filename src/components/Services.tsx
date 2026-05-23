import { motion } from 'motion/react';
import { Workflow, FileText, LayoutDashboard, Server, Mic } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Workflow className="w-5 h-5 text-white" />,
      title: "AI Workflow Automation",
      description: "End-to-end intelligent pipelines that chain AI classification, data extraction, and multi-system orchestration.",
      colSpan: "md:col-span-2 lg:col-span-2"
    },
    {
      icon: <FileText className="w-5 h-5 text-white" />,
      title: "RFP Automation",
      description: "AI that reads, parses, and summarizes proposals — extracting scope, deadlines, and key terms into PDF briefs in under 60 seconds.",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      icon: <LayoutDashboard className="w-5 h-5 text-white" />,
      title: "PM Automation",
      description: "Intelligent task extraction from emails, deadline-proximity scoring, real-time dashboards with instant Telegram alerts.",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      icon: <Server className="w-5 h-5 text-white" />,
      title: "Enterprise AI Deployment",
      description: "Production-ready AI systems with monitoring, error handling, and scalability integrated into your existing stack.",
      colSpan: "md:col-span-2 lg:col-span-1"
    },
    {
      icon: <Mic className="w-5 h-5 text-white" />,
      title: "AI Voice Receptionist",
      description: "24/7 AI-powered voice system that answers calls, understands intent, routes to the right team, and books appointments.",
      colSpan: "md:col-span-1 lg:col-span-1"
    }
  ];

  return (
    <section id="services" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight mb-4">
            Intelligent automation, end to end
          </h3>
          <p className="text-neutral-400 text-lg">
            Every system we deliver is production-grade from day one. Designed for scale, reliability, and measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-6 sm:p-8 rounded-xl bg-neutral-900/50 border border-white/10 hover:bg-neutral-900 transition-colors flex flex-col ${service.colSpan}`}
            >
              <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center bg-white/5 mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-medium text-white mb-3 tracking-tight">{service.title}</h4>
              <p className="text-neutral-400 leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
