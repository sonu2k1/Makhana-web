"use client";

import React from "react";

interface StatItem {
  id: number;
  value: string;
  desc: string;
  icon: React.ReactNode;
}

export const FarmStats: React.FC = () => {
  const stats: StatItem[] = [
    {
      id: 1,
      value: "1,800",
      desc: "Ghasphus Products reaches 1800 retail stores across 7 countries.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Hands holding growing plant sprout */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
            d="M12 11c2 0 3-1.5 3-3.5S13.5 4 12 4s-3 1.5-3 3.5 1 3.5 3 3.5zM12 11v9m-4-5s2-1 4-1 4 1 4 1M5 13c1.5-1.5 3-2 5-2m9 2c-1.5-1.5-3-2-5-2"
          />
        </svg>
      ),
    },
    {
      id: 2,
      value: "560",
      desc: "Ghasphus conducts 560 Quality tests per day to ensure a quality you can trust.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Hand tapping test indicators */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
            d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4zM12 4v4m0 8v4m-8-8h4m8 0h4M5 5l2.5 2.5m9 9L19 19M5 19l2.5-2.5m9-9L19 5"
          />
        </svg>
      ),
    },
    {
      id: 3,
      value: "220,280",
      desc: "Ghasphus proudly celebrates the satisfaction of 220,280 clients due to experienced the exceptional quality and service.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* User profile surrounded by stars */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7zM5 3l.5 1.5L7 5l-1.5.5L5 7l-.5-1.5L3 5l1.5-.5L5 3zm14 0l.5 1.5L21 5l-1.5.5L19 7l-.5-1.5L17 5l1.5-.5L19 3z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      value: "7,500",
      desc: "Our team is enriched by the expertise of accomplished women farmers, contributing their invaluable skills and knowledge.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Farmer profile with hat and tools */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
            d="M12 14a5 5 0 00-5 5v2h10v-2a5 5 0 00-5-5zM12 5a3 3 0 100 6 3 3 0 000-6zM6 8V3m0 0L4 5m2-2l2 2m10 3V3m0 0l-2 2m2-2l2 2"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f6f6f2] pb-16">
      {/* Background Banner */}
      <div
        className="w-full h-[400px] bg-cover bg-center flex flex-col items-center justify-center relative px-4 text-center select-none"
        style={{ backgroundImage: "url('/images/farm_stats_bg.png')" }}
      >
        {/* Overlay to dim slightly for legibility */}
        <div className="absolute inset-0 bg-black/15 z-0"></div>

        <div className="relative z-10 space-y-6 max-w-xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none drop-shadow-lg font-serif">
            Your Healthy Future <br />
            Begins Now!
          </h2>
          <a
            href="#flavors"
            className="inline-block bg-[#e8a324] hover:bg-[#c98c19] text-white px-8 py-3.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Overlapping stats container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-[#fafbfa] border border-zinc-100 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-zinc-100 hover:border-[#7ca832]/35 p-6 text-center flex flex-col items-center justify-start space-y-4 hover:shadow-md transition-all duration-300 group"
            >
              {/* Green Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-[#3b592d] hover:bg-[#4d743a] flex items-center justify-center shadow-sm transition-colors duration-300 shrink-0">
                {item.icon}
              </div>

              {/* Number Value */}
              <h3 className="text-2xl sm:text-3xl font-black text-[#3b592d] tracking-tight">
                {item.value}
              </h3>

              {/* Text Description */}
              <p className="text-xs text-zinc-600 leading-relaxed font-sans font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
