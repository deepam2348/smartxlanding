import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaChartBar,
  FaCogs,
  FaBell,
  FaChartLine,
  FaStore,
  FaChevronDown,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      title: "AI-Powered Strategies",
      description:
        "Leverage artificial intelligence to optimize trading decisions in real time.",
      icon: <FaRobot className="text-4xl text-[#1E808D]" />,
    },
    {
      title: "Backtesting Engine",
      description:
        "Test your strategies against historical data before risking real capital.",
      icon: <FaChartBar className="text-4xl text-[#1E808D]" />,
    },
    {
      title: "Auto Trade Execution",
      description:
        "Let our system place trades automatically based on your custom rules.",
      icon: <FaCogs className="text-4xl text-[#1E808D]" />,
    },
    {
      title: "Real-Time Alerts",
      description:
        "Get notified instantly about key market movements or signal triggers.",
      icon: <FaBell className="text-4xl text-[#1E808D]" />,
    },
    {
      title: "Portfolio Analytics",
      description:
        "Track your performance with detailed breakdowns and ROI charts.",
      icon: <FaChartLine className="text-4xl text-[#1E808D]" />,
    },
    {
      title: "Strategy Marketplace",
      description:
        "Browse and use strategies created by other top traders.",
      icon: <FaStore className="text-4xl text-[#1E808D]" />,
    },
  ];

  const faqs = [
    {
      question: "Do I need coding skills to use AlgoTrade?",
      answer:
        "No! AlgoTrade is a completely no-code platform. Just drag, drop, and deploy strategies with ease.",
    },
    {
      question: "Can I connect my broker account?",
      answer:
        "Yes, we support broker integrations including Zerodha and Alpaca for live trading execution.",
    },
    {
      question: "Is backtesting really accurate?",
      answer:
        "We use historical market data and simulate order execution to give you reliable performance previews.",
    },
    {
      question: "Can I use strategies made by other users?",
      answer:
        "Yes, the Strategy Marketplace lets you browse and clone public strategies shared by top traders.",
    },
  ];

  return (
    <>
      {/* FEATURES SECTION */}
      <section className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#D09D42] mb-4">Key Features</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Everything you need to trade smarter, faster, and safer.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1e1e1e] p-6 rounded-xl border border-[#1E808D] hover:shadow-xl transition transform hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#D09D42] mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#111111] py-20 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[#D09D42] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">
            Everything you need to know before getting started with AlgoTrade.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </section>
    </>
  );
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl bg-[#1a1a1a] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left px-6 py-4 text-[#D09D42] font-semibold focus:outline-none"
      >
        <span>{faq.question}</span>
        <FaChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-4 text-gray-300"
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
