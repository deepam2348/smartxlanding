import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
//import Bigbull from "../assets/images/bigbull.avif"
export default function ForgotPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/auth/send-reset-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        alert("✅ OTP sent to your email");
        setStep(2);
      } else {
        alert("❌ " + data.message);
      }
    } catch {
      alert("❌ Failed to send OTP");
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("❌ Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword }),
      });
      const data = await res.json();
      if (data.success) {
        alert("✅ " + data.message);
        setStep(1);
        setEmail("");
        setOtp("");
        setNewPassword("");
        setConfirmPassword("");
        navigate("/signin");
      } else {
        alert("❌ " + data.message);
      }
    } catch {
      alert("❌ Password reset failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#1a1a1a] text-white">
      {/* Left Panel - BigBull Image */}
      <div className="hidden md:flex w-1/2 justify-center items-center p-8">
        <motion.img
          src="/Bigbull.avif" // ✅ if placed in /public folder
          alt="BigBull"
          className="w-96 h-auto rounded-lg shadow-lg"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Right Panel - Forgot Password Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-4 pt-24 pb-8">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-6 text-center text-[#D09D42]">
            Forgot Password
          </h1>
          <form
            onSubmit={step === 1 ? sendOtp : resetPassword}
            className="space-y-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white border border-[#D09D42] placeholder-gray-400"
            />

            {step === 2 && (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white border border-[#D09D42] placeholder-gray-400"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white border border-[#D09D42] placeholder-gray-400"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white border border-[#D09D42] placeholder-gray-400"
                />
              </>
            )}

            <button
              type="submit"
              className="w-full py-2 rounded bg-[#D09D42] text-[#1a1a1a] font-semibold hover:bg-yellow-600 transition duration-300"
            >
              {step === 1 ? "Send OTP" : "Reset Password"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}