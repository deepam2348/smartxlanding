import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaRobot, FaShieldAlt, FaBrain } from "react-icons/fa";
import smartLogo2 from "../assets/images/smartlogo2.svg";

export default function About() {
  return (
    <section className="bg-[#0a0a0a] text-white">
      {/* HERO */}
<div className="text-center py-24 px-6 max-w-4xl mx-auto">
  <h1 className="text-5xl font-bold text-[#D09D42] mb-4">
    Smarter. Faster. Automated.
  </h1>
  <p className="text-gray-300 text-lg mb-6">
    Experience AI-driven trading automation with zero coding. Build, test, and deploy strategies that scale — in minutes.
  </p>
  <a
    href="/get-started"
    className="inline-block bg-[#D09D42] text-black font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 transition"
  >
    Get Started
  </a>
</div>


      {/* OUR VISION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 px-6 max-w-6xl mx-auto items-center pb-24"
      >
        <div>
          <h2 className="text-3xl font-bold text-[#1E808D] mb-4">Our Vision</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            We believe that trading should be intelligent, accessible, and automated. Our mission
            is to empower traders of all levels with tools that used to be reserved for hedge funds.
          </p>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/23/14/37/blur-1853262_1280.jpg"
            alt="Vision"
            className="rounded-xl w-full shadow-lg"
            loading="lazy"
          />
        </div>
      </motion.div>

    {/* CORE VALUES */}
<div className="bg-[#111111] py-20 px-6">
  <h2 className="text-center text-3xl font-bold text-[#D09D42] mb-12">Core Principles</h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
    {[
      {
        icon: <FaBolt className="text-4xl text-[#1E808D]" />,
        title: "Speed & Precision",
        desc: "Milliseconds matter. Our platform is optimized for lightning-fast decision-making.",
      },
      {
        icon: <FaRobot className="text-4xl text-[#1E808D]" />,
        title: "No-Code Automation",
        desc: "Build strategies visually — no code needed. Just logic, drag-and-drop, and deploy.",
      },
      {
        icon: <FaShieldAlt className="text-4xl text-[#1E808D]" />,
        title: "Security First",
        desc: "Your data and trades are protected by enterprise-grade security protocols.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 rounded-xl p-8 hover:shadow-xl transition flex flex-col items-center text-center"
      >
        <div className="mb-4">{item.icon}</div>
        <h3 className="text-xl font-semibold text-[#D09D42] mb-2">{item.title}</h3>
        <p className="text-gray-300">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</div>


      {/* WHY ALGOTRADE */}
      <div className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1E808D] mb-6">Why Choose AlgoTrade?</h2>
        <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
          From retail traders to professionals, AlgoTrade empowers you with features like real-time
          backtesting, strategy templates, broker integration, and analytics — all under one roof.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {["Backtest Engine", "Drag & Drop Builder", "Multi-Broker Support", "Live Execution Tracking"].map((feature, i) => (
            <span
              key={i}
              className="bg-[#1E808D]/20 text-[#D09D42] border border-[#1E808D] px-4 py-2 rounded-full text-sm font-medium"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* TECH PARTNERS */}
    
<div className="py-20 px-6 text-center bg-[#0f0f0f]">
  <h2 className="text-2xl font-semibold text-[#D09D42] mb-8">Powered by Trusted Infrastructure</h2>
  <div className="flex justify-center">
    <img
      src="https://zerodha.com/static/images/logo.svg"
      alt="Zerodha"
      className="h-10 object-contain"
    />
  </div>
</div>


      {/* CTA */}
      <div className="text-center py-20 bg-[#121212] px-6">
        <h2 className="text-3xl font-bold text-[#D09D42] mb-4">Build Your First Strategy Today</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Start automating your trades with zero coding. Fast, reliable, and built for modern traders.
        </p>
        <a
          href="/get-started"
          className="inline-block bg-[#D09D42] text-black font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
