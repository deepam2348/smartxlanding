import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bigBull from "../assets/images/smartlogo2.svg";

const API_BASE = process.env.REACT_APP_API_BASE_URL;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Optional: frontend password format check (not required if already hashed server-side)
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    } catch {
      alert("Login failed. Please try again.");
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
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-[#1f1f1f] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D09D42]"
            />

            {/* Password with toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 bg-[#1f1f1f] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D09D42]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#D09D42]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Forgot password */}
            <div className="text-right text-sm">
              <a href="/forgot" className="text-[#D09D42] hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#D09D42] hover:bg-[#c28c2c] text-black font-semibold py-2 rounded transition duration-200"
            >
              Login
            </button>
          </form>

          {/* Signup redirect */}
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
