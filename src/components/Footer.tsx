"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="contact" className="bg-[#0D2619] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Decorative leaf blur background highlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Newsletter Subscription Banner Card */}
        <div className="bg-gradient-to-r from-[#173F2B] via-[#1B4B34] to-[#143B28] rounded-3xl p-8 sm:p-10 border border-emerald-500/20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2 text-left">
              <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                🌱 Superfoods Bharat Club
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-serif tracking-tight">
                Get Healthy Snacking Tips &amp; 15% Off
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 max-w-xl">
                Subscribe to our newsletter to receive exclusive offers, new flavor releases, and organic wellness guides directly to your inbox.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 rounded-2xl text-xs font-bold text-center">
                  🎉 Thank you for subscribing! Check your inbox for your 15% discount code.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-xs sm:text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 backdrop-blur-xs"
                  />
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-full bg-amber-400 text-emerald-950 text-xs sm:text-sm font-extrabold hover:bg-amber-300 transition-colors shadow-md shrink-0 cursor-pointer"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Column 1: Brand Info & Story (4 cols) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <Link href="/" className="inline-block group">
              <div className="bg-white/95 p-3.5 rounded-2xl shadow-lg border border-white/20 inline-block">
                <Image
                  src="/images/logo.png"
                  alt="Superfoods Bharat Logo"
                  width={220}
                  height={60}
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-emerald-100/75 font-medium max-w-sm">
              Superfoods Bharat is dedicated to sourcing 100% natural, slow-roasted lotus seed superfoods directly from the wetland ponds of Mithila, Bihar. Healthy, diabetic-friendly, and gluten-free.
            </p>

            {/* Quality Badges Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["100% Organic", "0g Trans Fat", "Gluten Free", "Non-GMO"].map((badge, i) => (
                <span key={i} className="px-2.5 py-1 bg-white/10 border border-white/15 text-emerald-200 text-[10px] font-bold rounded-lg">
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider font-serif border-b border-emerald-500/20 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs text-emerald-100/80 font-medium">
              {[
                { label: "Home Page", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Product Catalog", href: "/products" },
                { label: "Farm Philosophy", href: "/#farm" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span className="text-amber-400 text-[10px]">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Varieties (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider font-serif border-b border-emerald-500/20 pb-2">
              Our Products
            </h4>
            <ul className="space-y-3 text-xs text-emerald-100/80 font-medium">
              {[
                { label: "Himalayan Pink Salt Makhana", href: "/products" },
                { label: "Spicy Peri Peri Makhana", href: "/products" },
                { label: "Mint & Herb Magic Makhana", href: "/products" },
                { label: "Gourmet Cheddar Cheese Makhana", href: "/products" },
                { label: "Organic Vedic Turmeric Powder", href: "/products" },
                { label: "Raw Export Makhana (Jumbo 7 Suta)", href: "/products" },
              ].map((prod) => (
                <li key={prod.label}>
                  <Link href={prod.href} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span className="text-amber-400 text-[10px]">›</span>
                    <span>{prod.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social Handles (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider font-serif border-b border-emerald-500/20 pb-2">
              Corporate Office
            </h4>

            <div className="space-y-3 text-xs text-emerald-100/80 font-medium">
              <div className="flex items-start gap-2.5">
                <span className="text-amber-400 text-sm shrink-0">📍</span>
                <span>Super Food Bharat Farm, Plot No -1, Biharigarh, Dehradun, Uttarakhand</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-amber-400 text-sm shrink-0">💬</span>
                <a href="https://wa.me/918527167311" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                  WhatsApp: +91-8527167311
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-amber-400 text-sm shrink-0">✉️</span>
                <a href="mailto:bd@leiwenpharmaura.com" className="hover:text-amber-300 transition-colors">
                  bd@leiwenpharmaura.com
                </a>
              </div>
            </div>

            {/* Social Media Handles (Full Brand Colors) */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-sm hover:scale-115 hover:shadow-md transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shadow-sm hover:scale-115 hover:shadow-md transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center shadow-sm hover:scale-115 hover:shadow-md transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer strip */}
        <div className="pt-8 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60 font-medium select-none">
          <div>
            <span>Copyright © 2026 Super Food Bharat Herbs Private Limited. Made in Bharat 🇮🇳</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-emerald-100/70">
            <Link href="/privacy-policy" className="hover:text-amber-300 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-amber-300 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-amber-300 transition-colors">Shipping &amp; Delivery</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
