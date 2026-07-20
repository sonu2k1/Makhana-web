"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "collection",
      icon: "📋",
      title: "1. Information We Collect",
      content: (
        <>
          <p className="leading-relaxed">
            At Superfoods Bharat, we respect your privacy and are committed to protecting the personal data you share with us. We collect information necessary to process your makhana &amp; superfood orders and provide a seamless shopping experience.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3 text-zinc-700">
            <li><strong>Personal Identifiers:</strong> Name, delivery address, pincode, contact phone number, and email address.</li>
            <li><strong>Order Details:</strong> Items purchased, shipping preferences, order history, and invoice records.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device identifiers, and pages visited via secure cookies.</li>
          </ul>
        </>
      ),
    },
    {
      id: "usage",
      icon: "🎯",
      title: "2. How We Use Your Information",
      content: (
        <>
          <p className="leading-relaxed">
            Your information is strictly used to fulfill your orders and enhance our products and service standards:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3 text-zinc-700">
            <li>Processing, packing, and dispatching fresh makhana orders to your doorstep.</li>
            <li>Sending SMS / WhatsApp / Email notifications regarding order tracking and delivery status.</li>
            <li>Responding to customer support queries and farm visit inquiries.</li>
            <li>Providing optional promotional updates and seasonal discount codes (only if subscribed).</li>
          </ul>
        </>
      ),
    },
    {
      id: "payments",
      icon: "💳",
      title: "3. Payment & Data Security",
      content: (
        <>
          <p className="leading-relaxed">
            We prioritize financial security. Superfoods Bharat does <strong>NOT</strong> store, record, or access your sensitive credit/debit card numbers, UPI PINs, or net banking passwords.
          </p>
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mt-3 text-emerald-950 font-medium">
            🔒 All online transactions are processed directly via RBI-approved, PCI-DSS compliant payment gateways utilizing 256-bit SSL encryption.
          </div>
        </>
      ),
    },
    {
      id: "sharing",
      icon: "🛡️",
      title: "4. Information Sharing & Third Parties",
      content: (
        <>
          <p className="leading-relaxed">
            We operate under a strict <strong>Zero Data-Selling Policy</strong>. We do not sell, rent, or trade your personal data to any third-party marketing companies.
          </p>
          <p className="mt-3 leading-relaxed">
            We share relevant delivery details solely with trusted logistics partners (e.g., Blue Dart, Delhivery, India Post) to ensure fast and accurate delivery of your packages.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      icon: "🍪",
      title: "5. Cookies & Tracking Technologies",
      content: (
        <>
          <p className="leading-relaxed">
            Our website uses essential cookies to remember items in your cart, maintain secure sessions, and analyze website traffic performance. You can choose to disable non-essential cookies through your web browser settings at any time.
          </p>
        </>
      ),
    },
    {
      id: "rights",
      icon: "⚖️",
      title: "6. Your Rights & Data Deletion",
      content: (
        <>
          <p className="leading-relaxed">
            Under Indian Data Protection Regulations, you have the full right to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3 text-zinc-700">
            <li>Request a copy of the personal data we hold about you.</li>
            <li>Correct or update inaccurate personal details.</li>
            <li>Unsubscribe from promotional emails or SMS notifications with a single click.</li>
            <li>Request complete deletion of your account and personal history from our active servers.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Header />

      <main className="flex-grow">
        {/* Page Hero Section matching Home Hero size */}
        <PageHero
          badgeText="🛡️ Official Policy Document • March 2026"
          badgeBgClass="bg-[#7ca832]/15 text-[#2D5A27] border-[#7ca832]/30"
          bgClass="bg-gradient-to-br from-[#F4F9F1] via-[#EBF3E6] to-[#E2EEDC]"
          textAccentClass="text-[#2D5A27]"
          titleLine1="Privacy & Data"
          titleHighlight="Security Policy"
          description="Your trust and data privacy are fundamental to everything we do at Superfoods Bharat. Learn how we collect, protect, and handle your information."
          stats={[
            { value: "256-Bit", label: "SSL Encryption" },
            { value: "Zero", label: "Data Selling" },
            { value: "RBI Approved", label: "Payments" },
          ]}
          buttonText="Read Terms Below"
          buttonHref="#collection"
          buttonClass="bg-[#2D5A27] hover:bg-[#1f401b] text-white"
          rightGraphic={
            <>
              <div className="absolute top-4 right-2 sm:right-6 bg-white/90 backdrop-blur-md border border-white/60 shadow-lg px-3.5 py-1.5 rounded-full text-xs font-black text-emerald-900 z-20 flex items-center gap-1.5 animate-bounce-slow">
                <span>🔒 Encrypted Browsing</span>
              </div>
              <div className="absolute bottom-10 left-2 sm:left-6 bg-white/90 backdrop-blur-md border border-white/60 shadow-lg px-3.5 py-1.5 rounded-full text-xs font-black text-amber-900 z-20 flex items-center gap-1.5 animate-bounce-slow">
                <span>🇮🇳 IT Act Compliant</span>
              </div>
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96">
                <img
                  src="/images/makhana_salt.png"
                  alt="Privacy & Data Security"
                  className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </>
          }
        />

        <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">

          {/* Quick Security Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🔒", title: "256-Bit SSL", desc: "Encrypted Browsing" },
              { icon: "🚫", title: "Zero Spam", desc: "No Third-Party Selling" },
              { icon: "💳", title: "RBI Approved", desc: "Secure Payment Gateway" },
              { icon: "🇮🇳", title: "IT Act Compliant", desc: "Indian Data Standards" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 text-center border border-emerald-900/10 shadow-sm space-y-1">
                <span className="text-2xl block">{item.icon}</span>
                <span className="block text-xs font-black text-[#1B3626]">{item.title}</span>
                <span className="block text-[10px] text-zinc-500 font-medium">{item.desc}</span>
              </div>
            ))}
          </div>

          {/* Main Content Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-900/10 shadow-sm hover:shadow-md transition-shadow space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{section.icon}</span>
                  <h2 className="text-xl font-black text-[#1B3626] font-serif">
                    {section.title}
                  </h2>
                </div>
                <div className="text-sm text-zinc-700 leading-relaxed border-t border-zinc-100 pt-4">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Data Protection Officer Card */}
          <div className="bg-gradient-to-br from-[#1B3626] via-[#142B1E] to-[#0D1F15] text-white rounded-3xl p-8 shadow-xl border border-emerald-500/20 space-y-4 text-left relative overflow-hidden">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                📩 Privacy Contact &amp; Support
              </span>
              <h3 className="text-2xl font-black font-serif">
                Questions About Your Data Privacy?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 max-w-xl">
                If you have questions, concerns, or wish to exercise your data deletion rights, please contact our Data Protection Team:
              </p>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium border-t border-emerald-500/20">
              <div>
                <span className="block text-amber-300 font-bold mb-1">✉️ Email Support</span>
                <span>bd@leiwenpharmaura.com</span>
              </div>
              <div>
                <span className="block text-amber-300 font-bold mb-1">📍 Corporate Office</span>
                <span>Sector 44, Noida, Uttar Pradesh 201303</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
