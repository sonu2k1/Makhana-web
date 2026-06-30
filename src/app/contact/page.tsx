"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <Header />

      <main className="flex-1 bg-[#faf8f5]">
        {/* Banner Section */}
        <div className="w-full bg-[#3b592d] text-white py-16 px-4 text-center relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,168,50,0.15),transparent_50%)]"></div>
          <div className="max-w-4xl mx-auto relative z-10 space-y-4">
            <span className="text-[10px] font-black tracking-widest text-[#7ca832] uppercase bg-[#7ca832]/10 px-3 py-1 rounded-full border border-[#7ca832]/25">
              Get in touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-serif tracking-tight">
              Contact Us
            </h1>
            <p className="text-xs sm:text-sm text-zinc-200/90 max-w-xl mx-auto leading-relaxed font-medium">
              Have questions about our organic Makhanas, bulk ordering, or farm sourcing? Send us a message and we'll get back to you shortly.
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb Path */}
          <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-10 pb-4 border-b border-zinc-200/60">
            <a href="/" className="hover:text-[#7ca832] transition-colors">Home</a>
            <span>/</span>
            <span className="text-zinc-800">Contact Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Side: Contact Info Details */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-4">
                <span className="block text-xs font-black tracking-widest text-[#7ca832] uppercase font-sans">
                  Reach Out Directly
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1e251f] tracking-tight leading-tight font-serif">
                  We'd Love to Hear <br />
                  From You!
                </h2>
                <div className="w-16 h-0.5 bg-[#7ca832] opacity-80"></div>
              </div>

              <div className="space-y-5 text-sm text-zinc-600 font-medium">
                {/* Office Info Card */}
                <div className="bg-white rounded-2xl border border-zinc-100 p-6 space-y-4 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">📍</span>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase text-zinc-900 tracking-wider">Our Farm Sourcing</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        Super Food Bharat Farm, Plot No -1, Biharigarh, Dehradun, Uttarakhand
                      </p>
                    </div>
                  </div>
                </div>

                {/* Communication channels Card */}
                <div className="bg-white rounded-2xl border border-zinc-100 p-6 space-y-5 hover:shadow-md transition-all duration-300">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">📞</span>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase text-zinc-900 tracking-wider">Call Toll-Free</h4>
                      <p className="text-xs text-zinc-500">1800 1234 55555</p>
                      <p className="text-[10px] text-zinc-400">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="border-t border-zinc-100/80"></div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">✉️</span>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase text-zinc-900 tracking-wider">Email Inquiry</h4>
                      <p className="text-xs text-[#7ca832] font-semibold hover:underline">
                        <a href="mailto:sales@suoperfoodbharat.in">sales@suoperfoodbharat.in</a>
                      </p>
                      <p className="text-[10px] text-zinc-400">Response time: Within 24 business hours</p>
                    </div>
                  </div>
                </div>

                {/* Instant Connect Card */}
                <div className="bg-[#7ca832]/5 rounded-2xl border border-[#7ca832]/10 p-6 space-y-3.5">
                  <h4 className="text-xs font-black uppercase text-zinc-900 tracking-wider">Order Instantly on WhatsApp</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Have a quick question or want to place an order? Click the link below to chat with our executive directly on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/9118001234555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebd56] text-white font-bold text-xs uppercase px-6 py-3 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer mt-1"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Message Submission Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-100 p-8 hover:shadow-xl transition-all duration-300">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-zinc-950 uppercase tracking-tight">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                      Please fill out the contact form below and we will contact you directly via phone or email.
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full py-2.5 px-4 border border-zinc-200 rounded-lg text-xs bg-zinc-50/50 focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] font-medium"
                        placeholder="E.g., Sonu Singh"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full py-2.5 px-4 border border-zinc-200 rounded-lg text-xs bg-zinc-50/50 focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] font-medium"
                          placeholder="sonu@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full py-2.5 px-4 border border-zinc-200 rounded-lg text-xs bg-zinc-50/50 focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] font-medium"
                          placeholder="10-digit mobile number"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-1">
                        Inquiry Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full py-2.5 px-4 border border-zinc-200 rounded-lg text-xs bg-zinc-50/50 focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] font-bold text-zinc-700"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="bulk">Bulk / Wholesale Orders</option>
                        <option value="farmers">Farmer Relations / Sourcing</option>
                        <option value="feedback">Product Feedback</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-1">
                        Your Message
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full py-2.5 px-4 border border-zinc-200 rounded-lg text-xs bg-zinc-50/50 focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] font-medium resize-none"
                        placeholder="Write details about your query here..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3b592d] hover:bg-[#2d4322] text-white font-bold text-xs py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 mt-4"
                  >
                    <span>Send Message</span>
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-12 px-6 space-y-4">
                  <div className="w-16 h-16 bg-[#7ca832]/10 rounded-full flex items-center justify-center text-[#7ca832] text-3xl font-bold">
                    ✓
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-zinc-950 uppercase tracking-tight">
                      Message Sent!
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                      Thank you, <span className="font-bold text-zinc-800">{formData.name}</span>. Your message has been successfully delivered. Our team will review your query and contact you at <span className="font-bold text-zinc-800">{formData.email}</span> shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormData({ name: "", email: "", phone: "", subject: "general", message: "" });
                      setFormSubmitted(false);
                    }}
                    className="bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs px-6 py-2.5 rounded-full transition-all cursor-pointer mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
