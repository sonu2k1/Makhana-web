"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full z-50 bg-white/95 backdrop-blur-md sticky top-0 border-b border-emerald-900/10 shadow-sm relative transition-all duration-300">
      {/* Mobile Search Overlay */}
      {isMobileSearchOpen && (
        <div className="absolute inset-0 bg-white z-50 flex items-center px-4 sm:px-6 gap-3 animate-in fade-in duration-200">
          <button
            onClick={() => setIsMobileSearchOpen(false)}
            className="p-2 text-zinc-500 hover:text-emerald-800 focus:outline-none"
            aria-label="Close search"
          >
            <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="relative flex-1">
            <input
              type="text"
              autoFocus
              placeholder="Search makhana flavors, raw grades..."
              className="w-full py-2.5 pl-4 pr-10 border border-emerald-200 rounded-full text-xs sm:text-sm bg-emerald-50/50 text-zinc-800 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
            />
            <button className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-800">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer shrink-0 group">
          <div className="relative h-11 sm:h-13 md:h-14 lg:h-15 w-auto flex items-center">
            <img
              src="/images/logo.png"
              alt="Superfoods Bharat Logo"
              className="h-11 sm:h-13 md:h-14 lg:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs uppercase tracking-wider font-extrabold text-[#1B3626]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#1B3626] text-white shadow-sm"
                    : "hover:bg-emerald-100/60 hover:text-emerald-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Search Input */}
          <div
            className={`relative hidden sm:block transition-all duration-300 ${
              isSearchFocused ? "w-60 sm:w-72" : "w-48 sm:w-56"
            }`}
          >
            <input
              type="text"
              placeholder="Search makhana..."
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full py-2 pl-4 pr-9 border border-emerald-900/15 rounded-full text-xs bg-[#FAF8F5] text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-800 hover:text-emerald-950">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>



          {/* Social Icons (Full Brand Colors) */}
          <div className="hidden lg:flex items-center gap-2 border-l border-zinc-200 pl-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-xs hover:scale-115 hover:shadow-md transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shadow-xs hover:scale-115 hover:shadow-md transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center shadow-xs hover:scale-115 hover:shadow-md transition-all duration-300"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>

          {/* Mobile Actions Group (Search + Hamburger) */}
          <div className="flex lg:hidden items-center gap-1">
            <button
              onClick={() => setIsMobileSearchOpen(true)}
              className="p-2 text-[#1B3626] hover:text-emerald-700 focus:outline-none rounded-full hover:bg-emerald-50 transition-colors"
              aria-label="Open search"
            >
              <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#1B3626] hover:text-emerald-700 focus:outline-none rounded-full hover:bg-emerald-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden border-t border-emerald-900/10 bg-[#FAF8F5] ${
          isMenuOpen ? "max-h-[480px] opacity-100 py-6 border-b border-emerald-900/10" : "max-h-0 opacity-0 py-0 border-b-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 space-y-6">
          {/* Links */}
          <nav className="flex flex-col gap-2 font-extrabold text-xs uppercase tracking-wider text-[#1B3626]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-3 px-5 rounded-2xl transition-all duration-200 ${
                    isActive
                      ? "bg-[#1B3626] text-white shadow-sm"
                      : "hover:bg-emerald-100/60 hover:text-emerald-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Support Strip */}
          <div className="pt-4 border-t border-emerald-900/10 flex flex-col gap-3 text-[10px] tracking-wider text-emerald-900/70 font-extrabold uppercase px-2">
            <div className="flex items-center justify-center">
              <span>Made in Bharat 🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
