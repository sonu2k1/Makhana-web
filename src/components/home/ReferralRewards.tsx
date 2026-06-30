"use client";

import React, { useState } from "react";

export const ReferralRewards: React.FC = () => {
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [copied, setCopied] = useState(false);

  const generateReferral = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const code = `Super Food Bharat-FRIEND-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
      setReferralCode(code);
      setCopied(false);
    }
  };

  const copyToClipboard = () => {
    if (referralCode) {
      navigator.clipboard.writeText(referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-3xl bg-[#fbe4e5] border border-[#f5d0d2] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
        {/* Left Text and Form Column */}
        <div className="lg:col-span-8 p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/70 border border-red-200/50 py-1.5 px-3.5 rounded-full text-xs font-bold text-red-700 shadow-2xs w-max">
            <span>🎁 SHARE & EARN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
            Refer Us <br />
            <span className="text-red-600">To your Friends & Family</span>
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed max-w-xl">
            Spread the crunch of organic health! Share your unique referral link/code with friends. Once they place their first order, they get a flat 10% discount, and you earn 100 Super Food Bharat points (worth ₹100) instantly!
          </p>

          {/* Code Generator form */}
          <div className="max-w-md w-full bg-white/60 backdrop-blur-xs border border-white/50 rounded-2xl p-5 shadow-2xs">
            {referralCode ? (
              <div className="space-y-4 animate-scaleUp">
                <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider block">
                  Your Custom Referral Code
                </span>
                <div className="flex gap-2 bg-white border border-red-200 rounded-full px-4 py-2 justify-between items-center">
                  <code className="text-xs font-extrabold text-red-600 tracking-wider">
                    {referralCode}
                  </code>
                  <button
                    onClick={copyToClipboard}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs px-4 py-1.5 rounded-full shadow-sm transition-all cursor-pointer"
                  >
                    {copied ? "Copied! ✓" : "Copy Code"}
                  </button>
                </div>
                <p className="text-[10px] text-zinc-500 leading-normal">
                  Share this code with friends to enjoy your rewards. Reset by reloading.
                </p>
              </div>
            ) : (
              <form onSubmit={generateReferral} className="space-y-3">
                <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider block">
                  Generate referral link
                </span>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email to generate"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white text-zinc-800 placeholder-zinc-400 text-xs px-4 py-2.5 rounded-full border border-red-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all grow"
                  />
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer shrink-0"
                  >
                    Earn 100 Points
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Right Illustration Column */}
        <div className="lg:col-span-4 bg-[#f8d7d9] flex items-center justify-center p-8 lg:p-12 relative overflow-hidden select-none">
          {/* Decorative floating shapes */}
          <div className="absolute top-10 left-10 w-16 h-16 bg-[#fbe4e5] rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-red-200/50 rounded-full filter blur-xl"></div>

          {/* Megaphone SVG Illustration representing the screenshot theme */}
          <div className="relative z-10 w-full max-w-[200px] aspect-square flex items-center justify-center">
            <svg
              className="w-full h-full text-red-500/85 filter drop-shadow-xl animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ animationDuration: "3s" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
