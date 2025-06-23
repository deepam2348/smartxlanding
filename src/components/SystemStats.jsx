import React, { useEffect, useState } from "react";

const stats = [
  {
    label: "Bots Running",
    value: 1248,
    color: "#1E808D",
  },
  {
    label: "Trades Executed",
    value: 2100000,
    color: "#D09D42",
  },
  {
    label: "Avg ROI (30 days)",
    value: 8.6,
    suffix: "%",
    color: "#1E808D",
  },
];

export default function SystemStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => {
          const target = stats[i].value;
          const step = target / 50;
          const next = val + step;
          return next >= target ? target : next;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0e0e0e] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gold mb-4">Live Performance Stats</h2>
        <p className="text-gray-400">Data reflects real-time system usage and results.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#1c1c1c] py-10 px-6 rounded-xl border border-gray-800 shadow-md hover:shadow-lg transition"
          >
            <h3
              className="text-4xl font-bold mb-2"
              style={{ color: stat.color }}
            >
              {stat.suffix
                ? `${counts[index].toFixed(1)}${stat.suffix}`
                : counts[index].toLocaleString()}
            </h3>
            <p className="text-gray-300 text-sm uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
