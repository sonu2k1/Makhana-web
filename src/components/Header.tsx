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
              Ghasphus
            </span>
            <span className="text-[9px] text-[#7ca832] font-semibold tracking-widest uppercase mt-0.5 leading-none">
              Calories on Count
            </span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-xs tracking-wider text-[#1e251f] uppercase">
          <a href="#" className="hover:text-[#7ca832] transition-colors py-2">
            Shop All
          </a>

          {/* Shop By Category Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("category")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="hover:text-[#7ca832] transition-colors py-2 flex items-center gap-1 cursor-pointer">
              Shop By Category
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "category" && (
              <div className="absolute top-full left-0 bg-white border border-zinc-100 shadow-xl rounded-lg py-2 w-48 text-zinc-700 animate-fadeIn">
                <a href="#" className="block px-4 py-2 hover:bg-zinc-50 hover:text-[#7ca832] text-xs transition-colors">
                  Roasted Makhana
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-zinc-50 hover:text-[#7ca832] text-xs transition-colors">
                  Flavored Makhana
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-zinc-50 hover:text-[#7ca832] text-xs transition-colors">
                  Aarogya Diet Mix
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-zinc-50 hover:text-[#7ca832] text-xs transition-colors">
                  Makhana Sweets
                </a>
              </div>
            )}
          </div>

          {/* Philosophy Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("philosophy")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="hover:text-[#7ca832] transition-colors py-2 flex items-center gap-1 cursor-pointer">
              Philosophy
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "philosophy" && (
              <div className="absolute top-full left-0 bg-white border border-zinc-100 shadow-xl rounded-lg py-2 w-48 text-zinc-700 animate-fadeIn">
                <a href="#" className="block px-4 py-2 hover:bg-zinc-50 hover:text-[#7ca832] text-xs transition-colors">
                  100% Organic Sourcing
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-zinc-50 hover:text-[#7ca832] text-xs transition-colors">
                  Zero Calories Counted
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-zinc-50 hover:text-[#7ca832] text-xs transition-colors">
                  Empowering Indian Farmers
                </a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-[#7ca832] transition-colors py-2">
            Aarogya Club
          </a>

          <a href="#" className="hover:text-[#7ca832] transition-colors py-2">
            Others
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

          {/* Action Icons */}
          <div className="flex items-center gap-3.5 sm:gap-4 shrink-0 text-zinc-800">

            {/* Wishlist */}
            <button className="relative hover:text-[#7ca832] transition-colors cursor-pointer" aria-label="Wishlist">
              <svg className="w-5 h-5 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-[#7ca832] text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                0
              </span>
            </button>


          </div>
        </div>
      </div>
    </header>
  );
};
