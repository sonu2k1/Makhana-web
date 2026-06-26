"use client";

import React from "react";

export const RunningTicker: React.FC = () => {
  const items = [
    "HEALTHY",
    "TRUSTWORTHY",
    "NUTRITIOUS",
    "ORGANIC",
    "PURE",
    "100% NATURAL",
    "GLUTEN FREE",
    "HIGH PROTEIN",
  ];

  // Duplicate items to create seamless scrolling effect
  const scrollingItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-white border-y border-zinc-100 py-3.5 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        <div className="flex gap-16 text-[#3b592d]/70 text-xs font-black tracking-widest uppercase items-center whitespace-nowrap">
          {scrollingItems.map((item, idx) => (
            <span key={idx} className="flex items-center gap-4">
              <span>{item}</span>
              <span className="text-[#e8a324] text-sm">★</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};
