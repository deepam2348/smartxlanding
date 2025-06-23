import React from "react";
import { motion } from "framer-motion";

const strategies = [
  {
    name: "Golden Crossover",
    roi: "6.8%",
    desc: "A long-term swing strategy that uses 50/200 MA crossovers with trend filters to identify high-probability entry zones.",
  },
  {
    name: "Breakout Hunter",
    roi: "9.2%",
    desc: "Designed to detect volume surges and breakouts across price levels. Ideal for aggressive momentum trading.",
  },
  {
    name: "Reversal Catcher",
    roi: "8.1%",
    desc: "Combines RSI divergence and candlestick exhaustion signals to detect trend reversals at key levels.",
  },
];

export default function StrategyShowcase() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 space-y-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gold mb-4">Featured Trading Systems</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          These are not just templates — these are production-grade bots used by real traders in real markets.
        </p>
      </div>

      {strategies.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`relative group flex flex-col md:flex-row items-center justify-between gap-10 rounded-2xl p-10 transition-all border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden ${
            i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Glow pulse background */}
          <div className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:bg-gold/10 before:blur-xl before:opacity-0 before:scale-100 group-hover:before:opacity-70 group-hover:before:scale-105 before:transition-all before:duration-700" />

          {/* Card Content */}
          <div className="relative z-10 flex-1">
            <h3 className="text-3xl font-bold text-gold mb-3">{s.name}</h3>
            <p className="text-gray-300 mb-6">{s.desc}</p>
            <button className="bg-gold text-black font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition">
              Clone & Run Strategy
            </button>
          </div>

          {/* ROI box */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center bg-[#121212] border border-teal rounded-2xl p-8 min-w-[200px] shadow-lg">
            <div className="text-sm text-gray-400 uppercase mb-2">Avg ROI</div>
            <div className="text-4xl font-extrabold text-teal">{s.roi}</div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
