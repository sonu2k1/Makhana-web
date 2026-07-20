"use client";

import React, { useState, useEffect } from "react";

export const EntryPopupModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    country: "India",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Open modal automatically every time user lands on / opens the site
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-backdrop-fade">
      {/* Backdrop overlay click handler */}
      <div onClick={handleClose} className="absolute inset-0 cursor-pointer" />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-modal-pop z-10 border border-zinc-100 flex flex-col max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 bg-white/80 hover:bg-zinc-100 p-1.5 rounded-full transition-colors z-20 cursor-pointer shadow-xs border border-zinc-200/50 hover:scale-110 active:scale-95"
          aria-label="Close popup"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Top Header Banner */}
        <div className="bg-gradient-to-r from-[#0D2619] via-[#143B28] to-[#173F2B] text-white p-6 sm:p-7 relative overflow-hidden select-none">
          {/* Animated glow circle */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/15 rounded-full blur-2xl pointer-events-none animate-pulse-glow" />
          
          {/* Animated floating leaf icon */}
          <div className="absolute -bottom-2 right-8 opacity-15 pointer-events-none animate-float-slow text-4xl">
            🪷
          </div>

          <div className="space-y-1 relative z-10 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-[10px] font-black uppercase tracking-wider border border-amber-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              🌱 Superfoods Bharat Welcome Offer
            </span>
            <h2 className="text-xl sm:text-2xl font-black font-serif tracking-tight text-white pt-1">
              Connect With Us Today!
            </h2>
            <p className="text-xs text-emerald-100/80 font-medium leading-relaxed">
              Fill out the form below to receive product catalogues, bulk discount quotes, or instant assistance.
            </p>
          </div>
        </div>

        {/* Form Body / Success State */}
        <div className="p-6 sm:p-7 overflow-y-auto bg-white text-left">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-[10px] font-black uppercase text-zinc-600 tracking-wider mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full py-2.5 px-4 border border-zinc-200 rounded-xl text-xs bg-zinc-50/50 focus:bg-white focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] font-medium transition-all duration-200 focus:scale-[1.01]"
                />
              </div>

              {/* Phone Number & Country Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] font-black uppercase text-zinc-600 tracking-wider mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full py-2.5 px-4 border border-zinc-200 rounded-xl text-xs bg-zinc-50/50 focus:bg-white focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] font-medium transition-all duration-200 focus:scale-[1.01]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase text-zinc-600 tracking-wider mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full py-2.5 px-4 border border-zinc-200 rounded-xl text-xs bg-zinc-50/50 focus:bg-white focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] font-bold text-zinc-800 transition-all duration-200"
                  >
                    <option value="India">🇮🇳 India</option>
                    <option value="United States">🇺🇸 United States</option>
                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                    <option value="United Arab Emirates">🇦🇪 United Arab Emirates</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="Singapore">🇸🇬 Singapore</option>
                    <option value="Germany">🇩🇪 Germany</option>
                    <option value="Other">🌍 Other Country</option>
                  </select>
                </div>
              </div>

              {/* Email ID Field */}
              <div>
                <label className="block text-[10px] font-black uppercase text-zinc-600 tracking-wider mb-1">
                  Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="yourname@example.com"
                  className="w-full py-2.5 px-4 border border-zinc-200 rounded-xl text-xs bg-zinc-50/50 focus:bg-white focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] font-medium transition-all duration-200 focus:scale-[1.01]"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-[10px] font-black uppercase text-zinc-600 tracking-wider mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you? (e.g., product inquiry, bulk pricing, sample request...)"
                  className="w-full py-2.5 px-4 border border-zinc-200 rounded-xl text-xs bg-zinc-50/50 focus:bg-white focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] font-medium resize-none transition-all duration-200 focus:scale-[1.01]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#3b592d] via-[#324c26] to-[#2d4322] hover:from-[#2d4322] hover:to-[#1e2e17] text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mt-2 group"
              >
                <span>Submit Inquiry</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-6 space-y-4 animate-modal-pop">
              <div className="w-16 h-16 bg-[#7ca832]/15 rounded-full flex items-center justify-center text-[#7ca832] text-3xl font-bold border border-[#7ca832]/30 animate-check-success shadow-md">
                ✓
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-zinc-950 uppercase tracking-tight">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-medium max-w-sm">
                  Your message has been received successfully. Our sales team will get in touch with you at <span className="font-bold text-zinc-900">{formData.phone}</span> ({formData.email}) shortly.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95 mt-2"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
