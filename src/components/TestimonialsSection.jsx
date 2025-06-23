import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    user: "Rohit S.",
    title: "Consistent Profits",
    message:
      "AlgoTrade changed how I trade. I’ve been getting consistent returns with zero emotional errors. Total game changer!",
  },
  {
    user: "Priya D.",
    title: "Saved Me From a Loss",
    message:
      "I backtested a strategy and realized it would've failed badly. This feature alone is worth it!",
  },
  {
    user: "Amit Shah",
    title: "24/7 Execution",
    message:
      "No more missed entries! My bots run day and night without me staring at charts all day. Absolutely loving it!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0f0f0f] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gold mb-4">
          Hear It From Real Traders
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Success stories from people who let automation work for them.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-light shadow-xl hover:shadow-gold/30 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gold mb-2">{t.title}</h3>
            <p className="text-gray-300 mb-4 italic">"{t.message}"</p>
            <div className="text-right text-sm text-teal font-semibold">
              — {t.user}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
