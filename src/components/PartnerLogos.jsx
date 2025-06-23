import React from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "NSE", color: "#D09D42" },
  { name: "Zerodha", color: "#1E808D" },
  { name: "Binance", color: "#F3BA2F" },
  { name: "TradingView", color: "#2962FF" },
  { name: "Upstox", color: "#8E44AD" },
  { name: "AngelOne", color: "#FF5733" },
];

export default function PartnerLogos() {
  return (
    <section className="bg-[#111] py-16 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-light relative inline-block">
          Trusted By Traders & Platforms
          <span className="block h-1 w-16 bg-gold mx-auto mt-2 rounded-full" />
        </h2>
      </div>
      <motion.div
        className="flex gap-12 items-center whitespace-nowrap animate-scroll px-6"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 text-xl font-semibold tracking-wide"
            style={{
              color: logo.color,
              border: `1px solid ${logo.color}`,
              borderRadius: "12px",
              padding: "12px 24px",
              minWidth: "140px",
              textAlign: "center",
              backgroundColor: "#1c1c1c",
              boxShadow: `0 0 10px ${logo.color}55`,
            }}
          >
            {logo.name}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
