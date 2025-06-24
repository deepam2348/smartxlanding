import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
//import smartLogo from "../assets/images/smartlogo1.svg"; // ✅ Logo import
import smartLogo2 from "../assets/images/smartlogo2.svg";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Features", path: "/features" },
  { name: "Pricing", path: "/pricing" },
  { name: "Signup", path: "/signup"},
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black/60 text-white px-6 py-1 fixed top-0 left-0 w-full z-50 backdrop-blur-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 overflow-hidden">
        {/* Logo - Clickable */}
        <Link to="/" className="flex items-center space-x-3">
  <img src={smartLogo2} alt="AlgoTrade Logo" className="h-20 max-h-24 w-auto" />
  <span className="text-3xl font-bold text-[#D09D42]"></span>
</Link>


        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end
                className={({ isActive }) =>
                  `px-3 py-2 transition-all rounded hover:text-[#D09D42] ${
                    isActive ? "text-[#D09D42] font-semibold" : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-4 px-4 pb-6 bg-[#0a0a0a]">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end
                className={({ isActive }) =>
                  `block px-4 py-2 rounded transition-all hover:text-[#D09D42] ${
                    isActive ? "text-[#D09D42] font-semibold" : "text-gray-300"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
