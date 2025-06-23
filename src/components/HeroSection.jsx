import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] bg-dark text-light flex items-center justify-center text-center px-6 py-20">
      <div>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Automate Your Trades <br />
          <span className="text-gold">Maximize Your Profits</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
          AI-driven algorithmic trading made easy. No coding required. Backtest, deploy, and grow your capital — all in one place.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/pricing"
            className="bg-gold text-black font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition"
          >
            View Plans
          </Link>
          <a
            href="#demo"
            className="border border-teal text-teal px-6 py-3 rounded-full hover:bg-teal hover:text-white transition"
          >
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
}
