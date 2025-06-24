import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaRobot, FaShieldAlt, FaBrain} from "react-icons/fa";


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
    <p className="text-gray-400 leading-relaxed text-lg space-y-4">
      At <span className="text-white font-semibold">SmartXAlgo</span>, we imagine a world where{" "}
      <span className="text-[#D09D42] font-semibold">technology works hand-in-hand with the trader</span> —
      not to replace them, but to empower them.
      <br /><br />
      We’ve seen how trading can be exciting — but also overwhelming, emotional, and exhausting.
      Our vision is to build a platform where anyone, from a curious beginner to a seasoned pro, can{" "}
      <span className="text-[#D09D42] font-semibold">trade with clarity, confidence, and peace of mind.</span>
      <br /><br />
      We’re not just here to automate trades.
      We’re here to help people{" "}
      <span className="text-[#D09D42] font-semibold">trade smarter, live freer, and trust the process.</span>
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


   {/* CORE PRINCIPLES */}
<div className="bg-[#111111] py-20 px-6">
  <h2 className="text-center text-3xl font-bold text-[#D09D42] mb-12">Our Core Principles</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
    {[
      {
        icon: <FaBolt className="text-4xl text-[#1E808D]" />,
        title: "Simplicity First",
        desc: "Great technology doesn’t need to be complicated. We believe in clean design, clear tools, and making algo trading feel easy—even for someone who’s never coded a line in their life.",
      },
      {
        icon: <FaShieldAlt className="text-4xl text-[#1E808D]" />,
        title: "Transparency Always",
        desc: "No black boxes. No gimmicks. Just strategies you can see, test, and understand. You should know how your system works—and why it works.",
      },
      {
        icon: <FaBrain className="text-4xl text-[#1E808D]" />,
        title: "Data Over Drama",
        desc: "Markets move fast. Emotions move faster. That’s why we let the data lead—backtested logic, real-time insights, and AI that doesn’t panic when the market does.",
      },
      {
        icon: <FaRobot className="text-4xl text-[#1E808D]" />,
        title: "Built for Humans",
        desc: "Behind every strategy is a human goal—more freedom, more consistency, more time. Everything we build comes back to making trading work better for you.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:border-[#D09D42]/30 transition-all duration-300 flex flex-col items-center text-center"
      >
        <div className="mb-4">{item.icon}</div>
        <h3 className="text-xl font-semibold text-[#D09D42] mb-3">{item.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed tracking-wide">
          {item.desc}
        </p>
      </motion.div>
    ))}
  </div>
</div>




      {/* WHY ALGOTRADE */}
<div className="py-20 px-6 max-w-5xl mx-auto text-center">
  <h2 className="text-3xl font-bold text-[#1E808D] mb-6">Why Choose Algo Trading?</h2>
  <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
    Let’s be real: trading manually is hard.
    <br /><br />
    It takes time, patience, and often... a lot of emotional energy.
  </p>

  <p className="text-[#D09D42] font-semibold text-xl mb-6">
    "Algo trading changes that."
  </p>

  <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
    It lets you set your plan once and let the system do the work. It’s faster, more disciplined, and doesn’t flinch when the market gets shaky.
    <br /><br />
    And when you add machine learning into the mix—like we do at <span className="font-semibold text-white">SmartXAlgo</span>—it gets even better.
    The system starts to learn from the markets, adapt to new conditions, and find smarter opportunities, all in real-time.
  </p>

  <div className="flex flex-wrap justify-center gap-6">
    {[
      "Backtest Engine",
      "Drag & Drop Builder",
      "Multi-Broker Support",
      "Live Execution Tracking",
    ].map((feature, i) => (
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
  <h2 className="text-2xl font-semibold text-[#D09D42] mb-10">
    Powered by Trusted Infrastructure
  </h2>

  <div className="flex flex-wrap justify-center items-center gap-12">
    <img
      src="https://zerodha.com/static/images/logo.svg"
      alt="Zerodha"
      className="h-10 object-contain"
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Groww_app_logo.png"
      alt="Groww"
      className="h-8 object-contain"
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Angel_One_Logo.svg"
      alt="Angel One"
      className="h-8 object-contain"
    />
  </div>
</div>

{/* WHY MORE TRADERS ARE SWITCHING */}
<div className="bg-[#0a0a0a] py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-[#D09D42] mb-8">
      Why More Traders Are Switching
    </h2>
    
    <div className="flex flex-col items-center text-lg space-y-4 text-gray-300 mb-8 leading-relaxed">
      <p><span className="text-[#D09D42]">✨</span> Less stress — no more watching charts all day</p>
      <p><span className="text-[#D09D42]">✨</span> More consistency — logic replaces emotion</p>
      <p><span className="text-[#D09D42]">✨</span> Better results — strategies run exactly as designed</p>
      <p><span className="text-[#D09D42]">✨</span> More freedom — trade while you work, sleep, or live your life</p>
    </div>

    <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
      At the end of the day, algo trading isn’t just about automation. <br />
      It’s about <span className="text-[#D09D42] font-medium">regaining control</span> — and trading on your terms.
    </p>
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