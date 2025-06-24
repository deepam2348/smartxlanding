import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bigBull from "../assets/images/smartlogo2.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Login successful!");
        navigate("/dashboard");
      } else alert(data.message);
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#1a1a1a] text-white">
      {/* Left Panel */}
      <div className="flex flex-col justify-center items-center bg-[#1a1a1a] p-8 animate-fade-in">
        <img src={bigBull} alt="SmartX Logo" className="w-72 h-72 mb-6 animate-spin-slow" />
        <h2 className="text-3xl font-bold text-[#D09D42] mb-2">Welcome Back to SmartX Algo</h2>
        <p className="text-center text-gray-300 max-w-sm">
          Experience AI-powered trading with precision. Login and start automating your success.
        </p>
      </div>

      {/* Right Panel */}
      <div className="flex items-center justify-center p-10 bg-[#262626]">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-[#D09D42]">Login</h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-[#1f1f1f] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D09D42]"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 bg-[#1f1f1f] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D09D42]"
            />
            <div className="text-right text-sm">
              <a href="/forgot" className="text-[#D09D42] hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#D09D42] hover:bg-[#c28c2c] text-black font-semibold py-2 rounded transition duration-200"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-400">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-[#D09D42] hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}