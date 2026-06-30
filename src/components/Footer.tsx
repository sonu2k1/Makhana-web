"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-zinc-100 text-zinc-600 pt-16 pb-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

        {/* Column 1: Brand Info (8 cols) */}
        <div className="lg:col-span-8 space-y-5 text-left">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#e8a324] flex items-center justify-center text-white font-extrabold text-xl shadow-xs border border-yellow-600">
              G
            </div>
            <div className="flex flex-col">
              <span className="text-[#3b592d] font-black text-2xl tracking-tight leading-none uppercase">
                Super Food Bharat
              </span>
              <span className="text-[10px] text-[#7ca832] font-bold tracking-widest uppercase mt-0.5 leading-none">
                Calories on Count
              </span>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-zinc-500 font-medium max-w-sm">
            100% Natural food products for a healthier, happier you.
          </p>

          {/* Contact Info */}
          <div className="space-y-3.5 text-xs text-zinc-500 font-medium">
            <div className="flex items-start gap-2.5">
              <span className="text-[#7ca832] text-sm mt-0.5">📍</span>
              <span>Super Food Bharat Farm, Plot No -1, Biharigarh, Dehradun, Uttarakhand</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#7ca832] text-sm">📞</span>
              <span>Phone: 1800 1234 55555</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#7ca832] text-sm">✉️</span>
              <span>Email: sales@suoperfoodbharat.in</span>
            </div>
          </div>
        </div>

        {/* Column 2: Useful Links (4 cols) */}
        <div className="lg:col-span-4 space-y-4 text-left">
          <h4 className="text-zinc-950 font-black text-sm uppercase tracking-wider font-serif">
            Useful Links
          </h4>
          <ul className="space-y-3.5 text-xs text-zinc-500 font-medium">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about-us" },
              { label: "Products", href: "/products" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-[#7ca832] transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Footer strip */}
      <div className="max-w-7xl mx-auto border-t border-zinc-100 mt-16 pt-8 text-center text-[10px] text-zinc-400 font-medium select-none">
        <span>Copyright © 2026 Super Food Bharat Herbs Private Limited. All rights reserved.</span>
      </div>
    </footer>
  );
};
