"use client";

import React, { useState } from "react";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "I recently tried Super Food Bharat Himalayan Vedic Turmeric and was amazed by the quality of the product. The turmeric has a rich, warm flavor that enhances the taste of my cooking.",
    name: "Priyanka Suriyal",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
  },
  {
    id: 2,
    text: "Super Food Bharat Roasted Makhana has become my go-to evening snack. It's light, super crunchy, and helps me keep my calorie count strictly under control. Simply love the Peri Peri flavor!",
    name: "Amit Sharma",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  },
  {
    id: 3,
    text: "Finding clean, organic, and non-adulterated products is so hard these days. Super Food Bharat's commitment to quality is evident in their Vedic Turmeric and Roasted Makhana. Highly recommend it to all my patients.",
    name: "Dr. Sunita Rao",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  },
];

export const TestimonialsAndMedia: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="w-full bg-[#fdfdfa] py-16 border-t border-zinc-100 flex flex-col items-center">
      {/* Testimonials Slider */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative w-full">
        <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 font-serif tracking-tight">
          Why Customers Love Us
        </h2>

        {/* Slider Box */}
        <div className="relative bg-zinc-50 border border-zinc-100/60 rounded-3xl p-8 sm:p-12 shadow-2xs min-h-[220px] flex flex-col justify-center items-center">
          {/* Active Review Quote */}
          <div className="space-y-6 animate-fadeIn">
            <p className="text-sm sm:text-base text-zinc-700 italic leading-relaxed max-w-2xl font-serif">
              "{TESTIMONIALS[activeIndex].text}"
            </p>
            {/* User Bio */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#7ca832]">
                <img
                  src={TESTIMONIALS[activeIndex].avatar}
                  alt={TESTIMONIALS[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-extrabold text-zinc-800 tracking-wide font-sans">
                {TESTIMONIALS[activeIndex].name}
              </span>
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[#7ca832] transition-colors p-2 rounded-full hover:bg-zinc-100/50 cursor-pointer"
            aria-label="Previous review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[#7ca832] transition-colors p-2 rounded-full hover:bg-zinc-100/50 cursor-pointer"
            aria-label="Next review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${idx === activeIndex ? "w-6 bg-[#3b592d]" : "w-2 bg-zinc-300 hover:bg-zinc-400"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Featured In media strip */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-16 pb-8 space-y-10 text-center">
        {/* Horizontal Meeting Lines Header */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-0.5 bg-zinc-200 grow max-w-xs"></div>
          <span className="text-xs font-black uppercase text-zinc-400 tracking-widest shrink-0">
            Featured In
          </span>
          <div className="h-0.5 bg-zinc-200 grow max-w-xs"></div>
        </div>

        {/* Logos container */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-75">
          {/* Logo 1: APEDA */}
          <div className="flex items-center gap-1.5 text-emerald-800 text-[10px] font-black tracking-widest uppercase">
            <span>🌿</span>
            <span>APEDA</span>
          </div>
          {/* Logo 2: BBC */}
          <div className="w-9 h-9 rounded-full bg-[#f97316] flex items-center justify-center text-white text-[9px] font-black uppercase tracking-wider shadow-sm">
            BBC
          </div>
          {/* Logo 3: India Organic */}
          <div className="flex items-center gap-1.5 text-emerald-700 text-[9px] font-black uppercase tracking-wider border border-emerald-600/30 px-3 py-1.5 rounded-full bg-emerald-50/20">
            <span>🟢</span>
            <span>India Organic</span>
          </div>
          {/* Logo 4: DD News */}
          <div className="bg-[#dc2626] text-white font-black text-center text-[10px] px-3.5 py-1.5 rounded-sm shadow-sm select-none tracking-widest leading-none">
            <span className="block text-xs font-extrabold font-serif">DD</span>
            <span className="text-[7px] font-bold mt-0.5 block">NEWS</span>
          </div>
          {/* Logo 5: FSSAI */}
          <div className="text-sky-700 font-serif italic text-base font-black tracking-tighter">
            fssai
          </div>
        </div>
      </div>

      {/* Panoramic Farm Scene bottom border banner (Inline SVG for retina crispness and zero asset dependency) */}
      <div className="w-full h-24 sm:h-32 md:h-44 bg-[#faf8f5] overflow-hidden select-none shrink-0 relative mt-8">
        <svg className="w-full h-full" viewBox="0 0 1440 180" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sky background */}
          <rect width="1440" height="180" fill="#fdfbf7" />

          {/* Hills */}
          <path d="M-100 180 C 100 140, 300 130, 450 180 Z" fill="#8cb369" opacity="0.3" />
          <path d="M300 180 C 500 120, 800 110, 1000 180 Z" fill="#4d7c58" opacity="0.15" />
          <path d="M800 180 C 1000 130, 1200 120, 1550 180 Z" fill="#8cb369" opacity="0.25" />

          {/* Sun */}
          <circle cx="150" cy="80" r="30" fill="#f59e0b" opacity="0.9" />

          {/* Birds */}
          <path d="M190 70 Q195 65 200 70 Q205 65 210 70" stroke="#71717a" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M220 75 Q223 71 226 75 Q229 71 232 75" stroke="#71717a" strokeWidth="1.2" strokeLinecap="round" />

          {/* Palm Trees */}
          <path d="M 280 180 Q 285 130 290 90" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
          <path d="M 290 90 Q 270 70 250 80 M 290 90 Q 275 105 260 115 M 290 90 Q 300 70 315 65 M 290 90 Q 310 95 325 105 M 290 90 Q 295 110 300 125" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />

          <path d="M 580 180 Q 575 125 570 80" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
          <path d="M 570 80 Q 550 65 530 75 M 570 80 Q 555 95 540 105 M 570 80 Q 580 60 595 55 M 570 80 Q 590 85 605 95" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />

          <path d="M 1120 180 Q 1125 135 1130 95" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
          <path d="M 1130 95 Q 1110 75 1090 85 M 1130 95 Q 1145 75 1160 80 M 1130 95 Q 1150 100 1165 110" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />

          {/* Cows (Stylized silhouettes) */}
          <rect x="180" y="140" width="35" height="20" rx="3" fill="#1e293b" />
          <rect x="182" y="160" width="4" height="15" fill="#1e293b" />
          <rect x="210" y="160" width="4" height="15" fill="#1e293b" />
          <circle cx="218" cy="138" r="7" fill="#1e293b" />
          <path d="M 180 145 Q 170 148 165 142" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />

          <rect x="1160" y="135" width="40" height="22" rx="3" fill="#334155" />
          <rect x="1165" y="157" width="5" height="18" fill="#334155" />
          <rect x="1192" y="157" width="5" height="18" fill="#334155" />
          <circle cx="1205" cy="133" r="8" fill="#334155" />
          <path d="M 1160 140 Q 1150 142 1146 138" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />

          {/* Farmers Silhouettes */}
          <circle cx="80" cy="148" r="6" fill="#0f766e" />
          <path d="M 80 154 L 80 170 M 80 158 L 72 165 M 80 158 L 88 165" stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="70" cy="170" r="5" fill="#ca8a04" />

          <circle cx="720" cy="145" r="5.5" fill="#b45309" />
          <path d="M 720 150 L 725 168 M 720 154 L 710 148 L 705 155 M 720 154 L 730 162" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />

          <circle cx="980" cy="140" r="5" fill="#4d7c0f" />
          <path d="M 980 145 L 980 163 M 980 149 L 972 143 M 980 149 L 988 143" stroke="#4d7c0f" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="980" cy="132" rx="10" ry="4" fill="#a16207" />

          {/* Ground Grass Line */}
          <rect y="170" width="1440" height="10" fill="#3b592d" />
        </svg>
      </div>
    </section>
  );
};
