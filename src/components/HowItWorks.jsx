import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      icon: "📊",
      title: "Choose Strategy",
      desc: "Pick from a library of proven strategies or build your own using simple inputs — no coding needed.",
    },
    {
      icon: "⏱️",
      title: "Backtest Easily",
      desc: "Test your strategy against years of real historical market data before you deploy.",
    },
    {
      icon: "🤖",
      title: "Auto Trade Live",
      desc: "Turn on automation and let AlgoTrade handle trades 24/7 — even while you sleep.",
    },
  ];

  return (
    <section className="bg-dark text-light py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-gold mb-4">How It Works</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Start trading smarter in just three easy steps.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] p-8 rounded-xl text-left border border-teal hover:shadow-xl hover:scale-105 transition-transform"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold text-gold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
