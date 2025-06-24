import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bigbull from "../assets/images/smartlogo2.svg"; // ✅ make sure path is correct

export default function CompleteProfile() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("phone");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const userIdFromUrl = queryParams.get("userId");
    const tokenFromUrl = queryParams.get("token");

    if (!userIdFromUrl || !tokenFromUrl) {
      navigate("/signin");
    } else {
      localStorage.setItem("smartx_token", tokenFromUrl);
      setToken(tokenFromUrl);
      setUserId(userIdFromUrl);
    }
  }, [location.search, navigate]);

  const handleSendOtp = async () => {
    if (!phone || !/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE}/api/auth/send-verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId, phone }),
      });

      const data = await res.json();
      if (data.success) {
        alert("OTP sent to your mobile");
        setStep("otp");
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error("Send OTP Error:", err);
      alert("Something went wrong while sending OTP");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      alert("Enter the complete 6-digit OTP");
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE}/api/auth/verify-account`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId, otp, phone }),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Phone verified successfully!");
        navigate("/dashboard");
      } else {
        alert(data.message || "OTP verification failed");
      }
    } catch (err) {
      console.error("OTP Verification Error:", err);
      alert("Something went wrong while verifying OTP");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#1a1a1a] text-white">
      {/* Left Panel */}
      <div className="flex flex-col justify-center items-center bg-[#1a1a1a] p-8 animate-fade-in">
        <img src={bigbull} alt="Logo" className="w-72 h-72 mb-6 animate-spin-slow" />
        <h2 className="text-3xl font-bold text-[#D09D42] mb-2">Complete Your Profile</h2>
        <p className="text-center text-gray-300 max-w-sm">
          Just one step away! Verify your mobile number to activate your AlgoTrade account.
        </p>
      </div>

      {/* Right Panel */}
      <div className="flex items-center justify-center p-10 bg-[#262626]">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-[#D09D42]">
            {step === "phone" ? "Enter Phone Number" : "Enter OTP"}
          </h1>

          {step === "phone" ? (
            <>
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 mb-4 bg-[#1f1f1f] border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#D09D42]"
              />
              <button
                onClick={handleSendOtp}
                className="w-full bg-[#D09D42] hover:bg-[#c28c2c] text-black font-semibold py-2 rounded transition"
              >
                Send OTP
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 mb-4 bg-[#1f1f1f] border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#D09D42]"
              />
              <button
                onClick={handleVerifyOtp}
                className="w-full bg-[#D09D42] hover:bg-[#c28c2c] text-black font-semibold py-2 rounded transition mb-2"
              >
                Verify OTP
              </button>
              <button
                onClick={handleSendOtp}
                className="w-full text-sm text-[#D09D42] hover:underline text-center"
              >
                Resend OTP
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}