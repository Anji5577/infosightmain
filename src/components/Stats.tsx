import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Stats() {
  const [transactionCount, setTransactionCount] = useState(2481209);
  const [logs, setLogs] = useState<string[]>([
    "SYS [INFO]: Initializing cognitive node mesh...",
    "SYS [INFO]: Verification pathway established.",
    "API [200]: POST /v1/agent/parse_rfp - 118ms",
    "API [200]: GET /v1/telemetry/nodes - 45ms",
    "SYS [OK]: All systems operational."
  ]);

  useEffect(() => {
    const intervalCount = setInterval(() => {
      setTransactionCount(prev => prev + Math.floor(Math.random() * 4) + 1);
    }, 2500);

    const endpoints = [
      "POST /v1/agent/parse_rfp",
      "GET /v1/telemetry/nodes",
      "POST /v1/workflow/dispatch",
      "GET /v1/models/cognitive/active",
      "POST /v1/soundwave/analyze",
      "POST /v1/compliance/check"
    ];
    const types = ["API [200]", "SYS [OK]", "SEC [INFO]", "DB [WRITE]"];

    const intervalLogs = setInterval(() => {
      const randomType = types[Math.floor(Math.random() * types.length)];
      const randomEndpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
      const latency = Math.floor(Math.random() * 200) + 20;
      const logStr = randomType.startsWith("API") 
        ? `${randomType}: ${randomEndpoint} - ${latency}ms`
        : `${randomType}: Core dispatch node #${Math.floor(Math.random() * 900) + 100} calibrated.`;
      
      setLogs(prev => [...prev.slice(1), logStr]);
    }, 1800);

    return () => {
      clearInterval(intervalCount);
      clearInterval(intervalLogs);
    };
  }, []);

  const formattedCount = transactionCount.toLocaleString();

  const logos = [
    { name: "Aether AI", svg: <svg className="h-4 text-neutral-500 hover:text-neutral-300 transition-colors duration-300 fill-current" viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 22h20L12 2zm0 4.5l6 12H6l6-12z"/><text x="28" y="16" className="font-sans font-bold text-xs tracking-widest">AETHER</text></svg> },
    { name: "Cognitive", svg: <svg className="h-4 text-neutral-500 hover:text-neutral-300 transition-colors duration-300 fill-current" viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="12" cy="12" r="3" fill="currentColor"/><text x="28" y="16" className="font-sans font-bold text-xs tracking-widest">COGNITION</text></svg> },
    { name: "Synthesis", svg: <svg className="h-4 text-neutral-500 hover:text-neutral-300 transition-colors duration-300 fill-current" viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z" /><text x="28" y="16" className="font-sans font-bold text-xs tracking-widest">SYNTHESIS</text></svg> },
    { name: "Vector OS", svg: <svg className="h-4 text-neutral-500 hover:text-neutral-300 transition-colors duration-300 fill-current" viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l10 10-10 10L2 12 12 2z" /><text x="28" y="16" className="font-sans font-bold text-xs tracking-widest">VECTOR</text></svg> },
    { name: "Neural", svg: <svg className="h-4 text-neutral-500 hover:text-neutral-300 transition-colors duration-300 fill-current" viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h5l3.5-7 3 14 3-10 1.5 3h5" stroke="currentColor" strokeWidth="2" fill="none"/><text x="28" y="16" className="font-sans font-bold text-xs tracking-widest">NEURAL</text></svg> },
  ];

  const stats = [
    { 
      value: "85%", 
      label: "Manual work reduction", 
      sub: "Operational efficiency baseline", 
      tag: "SYS_FLOW",
      color: "from-indigo-400 via-indigo-200 to-white",
      glow: "bg-indigo-500"
    },
    { 
      value: "<60s", 
      label: "RFP response pipeline", 
      sub: "Data extraction & brief generation", 
      tag: "API_SPEED",
      color: "from-cyan-400 via-cyan-200 to-white",
      glow: "bg-cyan-500"
    },
    { 
      value: "100%", 
      label: "Compliance & accuracy", 
      sub: "Zero-fail validation checks", 
      tag: "VALIDATION",
      color: "from-emerald-400 via-emerald-200 to-white",
      glow: "bg-emerald-500"
    },
    { 
      value: "40+", 
      label: "Hours saved per person/mo", 
      sub: "Unlocking strategic capacity", 
      tag: "CAPACITY_SEC",
      color: "from-rose-400 via-rose-200 to-white",
      glow: "bg-rose-500"
    },
  ];

  return (
    <section className="py-24 md:py-32 border-y border-white/[0.04] bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2 font-medium">Trusted Integrations & Proof of Scale</p>
        </div>

        {/* Infinite Marquee */}
        <div className="relative overflow-hidden w-full flex items-center mb-16 py-5 border-y border-white/[0.04]">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div className="flex gap-16 whitespace-nowrap animate-marquee">
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className="inline-flex items-center justify-center w-36">
                {logo.svg}
              </div>
            ))}
          </div>
        </div>

        {/* Live Telemetry Ticker & Logs */}
        <div className="max-w-5xl mx-auto mb-16 p-6 rounded-2xl border border-white/[0.04] bg-white/[0.003] backdrop-blur-xl relative overflow-hidden grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
          
          <div className="md:col-span-3 flex flex-col justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">SYSTEM CLOUD TELEMETRY</div>
                <div className="text-sm font-semibold text-white font-mono">INFRASTRUCTURE STATUS: ACTIVE</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 divide-x divide-white/5 border-t border-white/[0.03] pt-4">
              <div className="px-2">
                <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest mb-1">TRANSACTIONS PROCESSED</div>
                <div className="text-2xl font-mono font-bold text-white tracking-tight">
                  {formattedCount}
                </div>
              </div>
              <div className="px-4">
                <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest mb-1">SYS HEALTH (SLO)</div>
                <div className="text-2xl font-mono font-bold text-emerald-400">99.982%</div>
              </div>
            </div>
          </div>

          {/* Live scrolling logs terminal */}
          <div className="md:col-span-2 flex flex-col h-[110px] rounded-lg bg-black/40 border border-white/[0.03] p-3 overflow-hidden font-mono text-[10px]">
            <div className="flex items-center justify-between border-b border-white/[0.04] pb-1.5 mb-1.5 text-neutral-500">
              <span className="text-[9px] uppercase tracking-widest">Live Streams</span>
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                <span>syslogd</span>
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-end gap-1 text-neutral-400 overflow-hidden leading-normal">
              {logs.map((log, index) => {
                const isApi = log.includes("API");
                const isSec = log.includes("SEC");
                const isErr = log.includes("ERR");
                let colorClass = "text-neutral-400";
                if (isApi) colorClass = "text-indigo-400";
                else if (isSec) colorClass = "text-amber-400/90";
                else if (isErr) colorClass = "text-rose-400";
                else if (log.includes("SYS [OK]")) colorClass = "text-emerald-400/90";

                return (
                  <div key={index} className="truncate whitespace-nowrap opacity-90 hover:opacity-100 transition-opacity">
                    <span className="text-neutral-600 mr-1.5">{new Date().toLocaleTimeString()}</span>
                    <span className={colorClass}>{log}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-7 rounded-xl border border-white/[0.05] bg-white/[0.008] backdrop-blur-xl hover:border-white/[0.12] transition-colors duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Subtle top glow highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top Row with monospaced tag and pulsing status indicator */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[9px] font-mono text-neutral-500 tracking-widest">{stat.tag}</span>
                <span className={`w-1.5 h-1.5 rounded-full ${stat.glow} animate-pulse`} />
              </div>

              <div className="mb-4">
                <span className={`text-4xl md:text-5xl font-mono font-bold bg-gradient-to-b ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors duration-300 mb-1.5">
                  {stat.label}
                </h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
