import React, { useState } from "react";
import smartLogo2 from "../assets/images/smartlogo2.svg"; // Adjust path if needed

export default function AboutAlgoTrade() {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000); // Reset after 1s
  };

  return (
    <section className="bg-[#1a1a1a] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Logo with Click Spin */}
        <div className="flex justify-center">
          <img
            src={smartLogo2}
            alt="AlgoTrade Logo"
            aria-label="Click to spin logo"
            className={`w-64 h-64 object-contain cursor-pointer transition-transform duration-1000 ${
              isSpinning ? "rotate-[360deg]" : "rotate-0"
            }`}
            onClick={handleSpin}
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#D09D42] mb-4">What is Algo Trading?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Think of algo trading like having a smart assistant that trades for you based on logic, not emotion.
            <br /><br />
            You set the rules (or pick a ready-made strategy), and the system watches the market 24/7. The
            moment those conditions are met, it places the trade automatically. No hesitation, no second-guessing—just fast, disciplined execution.
          </p>

          <ul className="space-y-3 text-gray-200 pl-5 list-disc">
            <li>It saves time – You don’t need to stare at charts all day.</li>
            <li>It removes emotion – No panic selling, no FOMO buying.</li>
            <li>It brings consistency – The strategy doesn’t change its mind halfway through.</li>
          </ul>

          <p className="text-gray-300 text-lg leading-relaxed mt-6">
            At <span className="text-[#1E808D] font-semibold">SmartXAlgo</span>, we take this a step further.
            Our system doesn't just follow rules — it learns.
            Using AI and machine learning, it studies past trends, watches live market data, and even reads market mood (sentiment) to help you stay one step ahead.
            <br /><br />
            <span className="text-white font-semibold">In short:</span> You bring the vision. Our algo does the work.
          </p>
        </div>
      </div>
    </section>
  );
}