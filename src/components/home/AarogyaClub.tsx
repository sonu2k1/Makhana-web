"use client";

import React, { useState } from "react";

export const AarogyaClub: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setJoined(true);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-900">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e8a324]/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left: Info */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-black tracking-widest text-[#e8a324] uppercase">
            VIP Tier Enrollment
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight uppercase">
            Join The <span className="text-[#e8a324]">Aarogya Club</span>
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
            Aarogya Club is our exclusive wellness community. Members get access to premium benefits designed to keep your snacking healthy, affordable, and exciting.
          </p>

          {/* Benefits Bullet Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 max-w-lg">
            {[
              {
                title: "Earn 2x Points",
                desc: "Get double reward points on every roasted snack purchase.",
              },
              {
                title: "Free Shipping Forever",
                desc: "Enjoy zero delivery fees on all subscription boxes.",
              },
              {
                title: "Early Flavor Access",
                desc: "Be the first to taste-test our experimental recipes.",
              },
              {
                title: "Aarogya Diet Consult",
                desc: "Get a free monthly consultation with our certified nutritionist.",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="shrink-0 w-5 h-5 rounded-full bg-[#e8a324]/20 border border-[#e8a324]/30 flex items-center justify-center text-[#e8a324]">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#e8a324] uppercase tracking-wider">
                    {benefit.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-normal mt-0.5">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Registration Form */}
        <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 relative">
          {joined ? (
            <div className="text-center py-12 space-y-4 animate-scaleUp">
              <div className="w-16 h-16 rounded-full bg-[#e8a324]/10 border border-[#e8a324] flex items-center justify-center text-[#e8a324] text-2xl font-black mx-auto">
                ✓
              </div>
              <h3 className="text-lg font-bold text-[#e8a324] uppercase tracking-wide">
                Welcome to the Club!
              </h3>
              <p className="text-xs text-zinc-400 max-w-[280px] mx-auto leading-relaxed">
                Dear {formData.name}, your membership application is approved. We will SMS your login details to {formData.phone} shortly!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-base font-black uppercase tracking-wider text-white">
                  Get Free Membership
                </h3>
                <p className="text-[10px] text-zinc-500 leading-normal mt-0.5">
                  Complete registration to claim your perks immediately.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-xs px-4 py-2.5 rounded-xl focus:outline-none focus:border-[#e8a324] focus:ring-1 focus:ring-[#e8a324] transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="Enter 10-digit number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-xs px-4 py-2.5 rounded-xl focus:outline-none focus:border-[#e8a324] focus:ring-1 focus:ring-[#e8a324] transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#e8a324] hover:bg-[#c98c19] text-zinc-950 font-black text-xs py-3 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer hover:-translate-y-0.5 text-center block"
              >
                Enroll In Aarogya Club
              </button>

              <span className="block text-[8px] text-zinc-500 text-center uppercase tracking-widest mt-2">
                🔒 Zero fee • Unsubscribe anytime
              </span>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
