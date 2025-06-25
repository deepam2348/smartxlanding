import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaTelegramPlane, FaGithub } from "react-icons/fa";
import smartLogo2 from "../assets/images/smartlogo2.svg";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 px-6 py-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 items-center gap-6 sm:gap-4 text-sm">
        
        {/* Logo + Brand Name */}
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <img
            src={smartLogo2}
            alt="AlgoTrade Logo"
            className="h-14 w-auto transform scale-125"
          />
          <span className="text-[#D09D42] font-bold text-lg"></span>
        </div>

        {/* Nav Links */}
        <div className="flex justify-center gap-4 whitespace-nowrap">
          <Link to="/" className="hover:text-[#D09D42] transition">Home</Link>
          <Link to="/features" className="hover:text-[#D09D42] transition">Features</Link>
          <Link to="/pricing" className="hover:text-[#D09D42] transition">Pricing</Link>
          <Link to="/about" className="hover:text-[#D09D42] transition">About</Link>
        </div>

        {/* Social Icons Only */}
        <div className="flex justify-center sm:justify-end gap-4 text-xl">
          <a href="#" aria-label="Twitter" className="hover:text-[#D09D42] transition">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Telegram" className="hover:text-[#1E808D] transition">
            <FaTelegramPlane />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-white transition">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MotionsX India. All rights reserved.
      </div>
    </footer>
  );
}
