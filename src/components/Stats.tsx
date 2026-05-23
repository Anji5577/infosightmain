export function Stats() {
  const stats = [
    { value: "85%", label: "Reduction in manual work" },
    { value: "<60s", label: "RFP processing time" },
    { value: "100%", label: "Deadline compliance" },
    { value: "40+", label: "Hours saved per person/mo" },
  ];

  return (
    <section className="py-16 border-y border-white/5 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/5">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <span className="text-3xl md:text-4xl font-mono font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm text-neutral-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
