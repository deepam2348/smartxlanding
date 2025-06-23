import React, { useState } from "react";
import smartLogo2 from "../assets/images/smartlogo2.svg"; // Adjust path if needed

export default function AboutAlgoTrade() {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000); // Reset after 1s
  };

  return (
    <section className="bg-[#1a1a1a] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Logo Only with Click Spin */}
        <div className="flex justify-center">
          <img
            src={smartLogo2}
            alt="AlgoTrade Logo"
            className={`w-64 h-64 object-contain cursor-pointer transition-transform duration-1000 ${
              isSpinning ? "rotate-[360deg]" : "rotate-0"
            }`}
            onClick={handleSpin}
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#D09D42] mb-4">What is AlgoTrade?</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            AlgoTrade is an AI-powered platform designed to simplify and automate trading. 
            Whether you're a beginner or a professional, you can build, test, and deploy smart 
            trading strategies — no coding required.
          </p>

          <ul className="mt-6 space-y-3 text-gray-200">
            <li>✅ Backtest with real historical data</li>
            <li>✅ Use pre-built or custom strategies</li>
            <li>✅ Automate trades across multiple exchanges</li>
            <li>✅ Track results with performance analytics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
