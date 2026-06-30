"use client";

import React, { useState } from "react";

export const Header: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="w-full z-40 bg-white sticky top-0 border-b border-zinc-100 shadow-xs">
      {/* Top Banner */}
      <div className="w-full bg-[#7ca832] text-white py-2 px-4 text-center text-xs font-semibold tracking-wider flex items-center justify-center gap-2">
        <span>🎉 SEASONS SPECIAL: USE CODE "MAKHANABITE" FOR 15% OFF</span>
        <span className="hidden md:inline">|</span>
        <span className="hidden md:inline">FREE SHIPPING ON ORDERS OVER ₹499</span>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer shrink-0">
          <div className="w-10 h-10 rounded-full bg-[#e8a324] flex items-center justify-center text-white font-extrabold text-lg shadow-sm border border-yellow-600">
            G
          </div>
          <div className="flex flex-col">
            <span className="text-[#3b592d] font-black text-xl tracking-tight leading-none uppercase">
              Super Food Bharat
            </span>
            <span className="text-[9px] text-[#7ca832] font-semibold tracking-widest uppercase mt-0.5 leading-none">
              Calories on Count
            </span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 font-bold text-[11px] tracking-widest text-[#3b592d] uppercase">
          <a href="#" className="relative py-2 hover:text-[#7ca832] transition-colors duration-300 group">
            Home
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#7ca832] rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about-us" className="relative py-2 hover:text-[#7ca832] transition-colors duration-300 group">
            About Us
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#7ca832] rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#products" className="relative py-2 hover:text-[#7ca832] transition-colors duration-300 group">
            Products
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#7ca832] rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="relative py-2 hover:text-[#7ca832] transition-colors duration-300 group">
            Contact Us
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#7ca832] rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-4 grow max-w-md justify-end">
          {/* Search Bar */}
          <div
            className={`relative hidden sm:block w-full transition-all duration-300 ${
              isSearchFocused ? "max-w-[280px]" : "max-w-[220px]"
            }`}
          >
            <input
              type="text"
              placeholder="Search for products..."
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full py-1.5 pl-4 pr-10 border border-zinc-300 rounded-full text-xs bg-[#fbfbfa] text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] transition-all"
            />
            <button className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-[#7ca832]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
