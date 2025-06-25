import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bigBull from "../assets/images/smartlogo2.svg";

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
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#1a1a1a] text-white">
      {/* Left Panel */}
      <div className="flex flex-col justify-center items-center bg-[#1a1a1a] p-8 animate-fade-in">
        <img src={bigBull} alt="SmartX Logo" className="w-72 h-72 mb-6 animate-spin-slow" />
        <h2 className="text-3xl font-bold text-[#D09D42] mb-2">Reset Your Password</h2>
        <p className="text-center text-gray-300 max-w-sm">
          Don’t worry! We’ll help you recover access to your SmartX account.
        </p>
      </div>

      {/* Right Panel */}
      <div className="flex items-center justify-center p-10 bg-[#262626]">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-[#D09D42]">
            Forgot Password
          </h1>

          <form onSubmit={step === 1 ? sendOtp : resetPassword} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-[#1f1f1f] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D09D42]"
            />

            {step === 2 && (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-[#1f1f1f] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D09D42]"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-[#1f1f1f] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D09D42]"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-[#1f1f1f] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D09D42]"
                />
              </>
            )}

            <button
              type="submit"
              className="w-full bg-[#D09D42] hover:bg-[#c28c2c] text-black font-semibold py-2 rounded transition duration-200"
            >
              {step === 1 ? "Send OTP" : "Reset Password"}
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-400">
            Back to{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-[#D09D42] hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
