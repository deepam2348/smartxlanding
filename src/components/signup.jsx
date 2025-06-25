import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import bigbull from "../assets/images/smartlogo2.svg";

const API_BASE = process.env.REACT_APP_API_BASE_URL;

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [step, setStep] = useState("register");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [otpExpired, setOtpExpired] = useState(false);

  const timerRef = useRef(null);
  const navigate = useNavigate();

  const startCountdown = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeLeft(60);
    setCanResend(false);
    setOtpExpired(false);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setCanResend(true);
          setOtpExpired(true);
          alert("OTP expired. Please click 'Resend OTP'.");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (step === "otp") startCountdown();
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [step]);

  const checkDuplicate = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/auth/check-user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, phone: form.phone }),
      });
      const data = await res.json();
      if (data.exists) {
        alert(data.message);
        return true;
      }
      return false;
    } catch {
      alert("Error checking user.");
      return true;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const isDuplicate = await checkDuplicate();
    if (isDuplicate) return;

    try {
      const res = await fetch(`${API_BASE}/api/auth/temp-register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ ...form, phone: "+91" + form.phone }),
      });
      const data = await res.json();
      if (data.success) {
        alert("OTP sent to your email.");
        setStep("otp");
        setOtp(Array(6).fill(""));
        startCountdown();
      } else {
        alert(data.message);
      }
    } catch {
      alert("Registration failed");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (otpExpired) {
      alert("OTP expired. Please click 'Resend OTP' to get a new one.");
      return;
    }

    const otpCode = otp.join("");
    if (otpCode.length < 6) {
      alert("Please enter complete 6-digit OTP.");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/auth/final-register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: form.email, otp: otpCode }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Registered successfully!");
        navigate("/signin");
      } else {
        alert(data.message);
      }
    } catch {
      alert("OTP verification failed");
    }
  };

  const handleOtpChange = (value, index) => {
    const updated = [...otp];
    updated[index] = value.slice(-1);
    setOtp(updated);
    if (value && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  const handleResendOtp = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/auth/temp-register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ ...form, phone: "+91" + form.phone }),
      });
      const data = await res.json();
      if (data.success) {
        alert("New OTP sent");
        setOtp(Array(6).fill(""));
        startCountdown();
      } else {
        alert(data.message);
      }
    } catch {
      alert("Resend failed");
    }
  };

  const handleGoogleSignup = () => {
    window.location.href = `${API_BASE}/api/auth/google`;
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#1a1a1a] text-white">
      {/* Left Panel */}
      <div className="flex flex-col justify-center items-center bg-[#1a1a1a] p-8 animate-fade-in">
        <img src={bigbull} alt="Logo" className="w-72 h-72 mb-6 animate-spin-slow" />
        <h2 className="text-3xl font-bold text-[#D09D42] mb-2">Welcome to AlgoTrade</h2>
        <p className="text-center text-gray-300 max-w-sm">
          Your trusted AI-powered algorithmic trading partner. Sign up to access smarter, faster trading.
        </p>
      </div>

      {/* Right Panel */}
      <div className="flex items-center justify-center p-10 bg-[#262626]">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-[#D09D42]">
            {step === "register" ? "Sign Up" : "Verify OTP"}
          </h1>

          <form onSubmit={step === "register" ? handleRegister : handleVerifyOtp} className="space-y-4">
            {step === "register" ? (
              <>
                {["name", "email", "phone", "password"].map((field) => (
                  <input
                    key={field}
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    type={field === "email" ? "email" : field === "password" ? "password" : "text"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    required
                    className="w-full px-4 py-2 bg-[#1f1f1f] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D09D42]"
                  />
                ))}
              </>
            ) : (
              <>
                <div className="flex justify-center gap-2">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`otp-${idx}`}
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target.value, idx)}
                      className="w-10 h-10 text-center bg-[#1f1f1f] border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#D09D42]"
                    />
                  ))}
                </div>
                <div className="text-center text-sm mt-2">
                  {canResend ? (
                    <button type="button" onClick={handleResendOtp} className="text-[#D09D42] font-semibold">
                      Resend OTP
                    </button>
                  ) : (
                    <span className="text-gray-400">Resend in {timeLeft}s</span>
                  )}
                </div>
              </>
            )}

            <button
              type="submit"
              className={`w-full font-semibold py-2 rounded transition ${
                otpExpired && step === "otp"
                  ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                  : "bg-[#D09D42] hover:bg-[#c28c2c] text-black"
              }`}
              disabled={otpExpired && step === "otp"}
            >
              {step === "register" ? "Continue" : "Verify OTP"}
            </button>
          </form>

          {step === "register" && (
            <div className="mt-6 text-center">
              <p className="mb-2 text-sm text-gray-400">OR</p>
              <button
                onClick={handleGoogleSignup}
                className="flex items-center justify-center gap-3 w-full border border-gray-600 py-2 rounded hover:bg-[#333] transition text-white"
              >
                <FcGoogle size={24} />
                <span>Continue with Google</span>
              </button>
              <p className="mt-4 text-sm text-gray-400">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/signin")}
                  className="text-[#D09D42] hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
