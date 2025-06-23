import React from "react";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10 p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md group hover:shadow-lg hover:shadow-gold/10 transition-all">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gold mb-6"
        >
          Ready to Automate Your Trades?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-300 mb-8 max-w-xl mx-auto"
        >
          Join hundreds of traders using AlgoTrade to build, test, and deploy automated strategies — all with zero coding.
        </motion.p>

        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gold text-black font-bold px-8 py-4 rounded-full transition duration-300 hover:bg-opacity-90"
        >
          Get Started Now
        </motion.a>
      </div>

      {/* Floating pulse effect */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal/10 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none" />
    </section>
  );
}
