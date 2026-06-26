"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 text-zinc-600 pt-16 pb-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Column 1: Brand Info (4 cols) */}
        <div className="lg:col-span-4 space-y-5 text-left">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#e8a324] flex items-center justify-center text-white font-extrabold text-xl shadow-xs border border-yellow-600">
              G
            </div>
            <div className="flex flex-col">
              <span className="text-[#3b592d] font-black text-2xl tracking-tight leading-none uppercase">
                Ghasphus
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
              <span>Ghasphus Farm, Plot No -1, Biharigarh, Dehradun, Uttarakhand</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#7ca832] text-sm">📞</span>
              <span>Phone: 1800 1234 55555</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#7ca832] text-sm">✉️</span>
              <span>Email: sales@ghasphus.in</span>
            </div>
          </div>
        </div>

        {/* Column 2: Useful Links (2.5 cols) */}
        <div className="lg:col-span-2.5 space-y-4 text-left">
          <h4 className="text-zinc-950 font-black text-sm uppercase tracking-wider font-serif">
            Useful Links
          </h4>
          <ul className="space-y-3.5 text-xs text-zinc-500 font-medium">
            {["Shop", "Blog", "Careers"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#7ca832] transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Consumer (2.5 cols) */}
        <div className="lg:col-span-2.5 space-y-4 text-left">
          <h4 className="text-zinc-950 font-black text-sm uppercase tracking-wider font-serif">
            Consumer
          </h4>
          <ul className="space-y-3.5 text-xs text-zinc-500 font-medium">
            {["Privacy Policy", "Shipping & Returns", "Terms & Conditions", "Product Care", "Help & FAQ"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#7ca832] transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: General (3 cols) */}
        <div className="lg:col-span-3 space-y-4 text-left">
          <h4 className="text-zinc-950 font-black text-sm uppercase tracking-wider font-serif">
            General
          </h4>
          <ul className="space-y-3.5 text-xs text-zinc-500 font-medium">
            {["About Ghasphus", "Contact Us", "Legal", "Code Of Ethics", "Aarogya Club", "Order on Whatsapp"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#7ca832] transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Footer strip */}
      <div className="max-w-7xl mx-auto border-t border-zinc-100 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-zinc-400 font-medium select-none">
        <span>Copyright © 2026 Himalaya Herbs Private Limited. All rights reserved.</span>
        
        {/* Payment Methods */}
        <div className="flex items-center gap-2 opacity-80">
          <span className="bg-zinc-100 border border-zinc-200 text-zinc-500 px-2 py-0.5 rounded-sm font-bold text-[8px] tracking-wide">VISA</span>
          <span className="bg-zinc-100 border border-zinc-200 text-zinc-500 px-2 py-0.5 rounded-sm font-bold text-[8px] tracking-wide">MC</span>
          <span className="bg-zinc-100 border border-zinc-200 text-zinc-500 px-2 py-0.5 rounded-sm font-bold text-[8px] tracking-wide">PAYPAL</span>
          <span className="bg-zinc-100 border border-zinc-200 text-zinc-500 px-2 py-0.5 rounded-sm font-bold text-[8px] tracking-wide">AMEX</span>
          <span className="bg-zinc-100 border border-zinc-200 text-zinc-500 px-2 py-0.5 rounded-sm font-bold text-[8px] tracking-wide">MAESTRO</span>
        </div>
      </div>
    </footer>
  );
};
