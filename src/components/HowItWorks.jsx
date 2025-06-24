import React from "react";
import { motion } from "framer-motion";
import { FaClipboardCheck, FaBrain, FaRobot, FaUserShield } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaClipboardCheck className="text-4xl text-teal mb-4 mx-auto" />,
      title: "Pick Your Strategy",
      desc: "We’ve done the hard work for you. Just choose from our set of pre-built, backtested strategies—no guesswork needed.",
      direction: "left",
    },
    {
      icon: <FaBrain className="text-4xl text-teal mb-4 mx-auto" />,
      title: "Let the AI Do Its Job",
      desc: "Our system studies past data, watches live market trends, and even reads market sentiment. It spots high-probability trade setups in real time.",
      direction: "right",
    },
    {
      icon: <FaRobot className="text-4xl text-teal mb-4 mx-auto" />,
      title: "Trades Are Placed Automatically",
      desc: "When the time is right, SmartXAlgo executes the trade for you—fast, emotion-free, and exactly how the strategy was designed.",
      direction: "left",
    },
    {
      icon: <FaUserShield className="text-4xl text-teal mb-4 mx-auto" />,
      title: "You Stay in Control",
      desc: "Check performance anytime, switch strategies when you want, or just sit back and let it run. You’re always in the driver’s seat.",
      direction: "right",
    },
  ];

  return (
    <section className="bg-dark text-light py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-gold mb-4">
          From Data to Decisions — in Four Simple Steps
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Get started with SmartXAlgo in just minutes. No code. No stress. Just results.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{
              x: step.direction === "left" ? -80 : 80,
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="bg-[#1e1e1e] p-8 rounded-xl text-center border border-teal hover:shadow-xl hover:scale-105 transition-transform"
          >
            {step.icon}
            <h3 className="text-xl font-bold text-gold mb-2">{step.title}</h3>
            <p className="text-gray-300 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
