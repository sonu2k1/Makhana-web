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
          <a href="/" className="relative py-2 hover:text-[#7ca832] transition-colors duration-300 group">
            Home
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#7ca832] rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/#about-us" className="relative py-2 hover:text-[#7ca832] transition-colors duration-300 group">
            About Us
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#7ca832] rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/products" className="relative py-2 hover:text-[#7ca832] transition-colors duration-300 group">
            Products
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#7ca832] rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/contact" className="relative py-2 hover:text-[#7ca832] transition-colors duration-300 group">
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

          {/* Social Icons */}
          <div className="flex items-center gap-3.5 text-zinc-500 shrink-0 ml-1 border-l border-zinc-200 pl-3.5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7ca832] transition-colors duration-300" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7ca832] transition-colors duration-300" aria-label="Instagram">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7ca832] transition-colors duration-300" aria-label="Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
