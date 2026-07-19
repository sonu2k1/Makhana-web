"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 transition-all duration-500 animate-in fade-in slide-in-from-bottom-5">
      <div className="bg-[#0D2619]/95 backdrop-blur-md text-white border border-emerald-500/30 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 relative overflow-hidden select-none">
        {/* Decorative ambient blur highlight */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl pointer-events-none" />

        {/* Content Header */}
        <div className="flex items-start gap-3">
          <span className="text-3xl shrink-0">🍪</span>
          <div className="space-y-1">
            <h4 className="text-sm font-black text-white font-serif tracking-wide">
              We Value Your Privacy &amp; Crunch!
            </h4>
            <p className="text-xs text-emerald-100/80 leading-relaxed font-medium">
              We use cookies to personalize content, analyze site performance, and deliver a seamless shopping experience for your makhana cravings.
            </p>
          </div>
        </div>

        {/* Privacy Policy Link */}
        <div className="text-[11px] text-emerald-200/70 font-medium">
          Read our full details in our{" "}
          <Link href="/privacy-policy" className="text-amber-300 underline font-bold hover:text-amber-200">
            Privacy Policy
          </Link>.
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-1">
          <button
            onClick={handleAcceptAll}
            className="flex-1 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-extrabold py-2.5 px-4 rounded-full text-xs shadow-md transition-all cursor-pointer hover:scale-[1.02]"
          >
            Accept All Cookies
          </button>
          <button
            onClick={handleDecline}
            className="bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 px-4 rounded-full text-xs border border-white/20 transition-all cursor-pointer"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};
