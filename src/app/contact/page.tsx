"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "How do you source your organic Makhanas?",
    answer: "We source our lotus seeds directly from women-led farmer self-help groups and agricultural cooperatives in Madhubani (Bihar) and Uttarakhand. By eliminating intermediaries, we pay farmers above-market fair-trade wages and ensure 100% organic traceability."
  },
  {
    question: "Are your ingredients and seasonings organic?",
    answer: "Yes. All our products are crafted using 100% natural, clean-label ingredients. We slow-roast in cold-pressed olive oil, rice bran oil, or pure cow ghee. We use premium spices like Himalayan pink salt, dried mint leaves, and organic jaggery. Absolutely zero artificial preservatives, chemical flavors, or MSG are used."
  },
  {
    question: "Do you support bulk wholesale ordering and global exports?",
    answer: "Absolutely. Super Food Bharat is FSSAI and ISO 22000 certified, and we regularly handle bulk commercial distribution, custom flavor-profiling, and private labeling. We support both domestic freight and international container-load exports (APEDA registered)."
  },
  {
    question: "What is the typical shelf life of your roasted Makhana?",
    answer: "Our slow-roasted Makhana has a shelf life of 9 months from the date of manufacture. We use food-grade, nitrogen-flushed, multi-layer zip packaging to prevent oxygen exposure and moisture absorption, keeping the crunch fresh."
  },
  {
    question: "What are your shipping rates and delivery schedules?",
    answer: "We offer free shipping on all domestic orders across Bharat. Standard delivery takes 3-5 business days depending on your location. Dispatch happens within 24 hours of order confirmation."
  }
];



export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Header */}
      <Header />

      <main className="flex-1 bg-[#faf8f5]">
        {/* Page Hero Section matching Home Hero size */}
        <PageHero
          badgeText="💬 Direct Support • 24/7 Response Desk"
          badgeBgClass="bg-[#0d9488]/15 text-[#115e59] border-[#0d9488]/30"
          bgClass="bg-gradient-to-br from-[#F2FBF9] via-[#E4F5F1] to-[#D5EFE9]"
          textAccentClass="text-[#0d9488]"
          titleLine1="Contact Us &"
          titleHighlight="Partner With Us"
          description="Have questions about our organic Makhanas, bulk ordering, or farm sourcing? Send us a message and we'll get back to you shortly."
          stats={[
            { value: "24h SLA", label: "Fast Reply" },
            { value: "WhatsApp", label: "Instant Chat" },
            { value: "B2B / Export", label: "Bulk Partner" },
          ]}
          buttonText="Send Us A Message"
          buttonHref="#contact-form"
          buttonClass="bg-[#0d9488] hover:bg-[#0f766e] text-white"
          rightGraphic={
            <>
              <div className="absolute top-4 right-2 sm:right-6 bg-white/90 backdrop-blur-md border border-white/60 shadow-lg px-3.5 py-1.5 rounded-full text-xs font-black text-teal-900 z-20 flex items-center gap-1.5 animate-bounce-slow">
                <span>📍 Uttarakhand & Bihar</span>
              </div>
              <div className="absolute bottom-10 left-2 sm:left-6 bg-white/90 backdrop-blur-md border border-white/60 shadow-lg px-3.5 py-1.5 rounded-full text-xs font-black text-[#1ebd56] z-20 flex items-center gap-1.5 animate-bounce-slow">
                <span>💬 +91-8527167311</span>
              </div>
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96">
                <img
                  src="/images/makhana_mint.png"
                  alt="Contact Super Food Bharat"
                  className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </>
          }
        />

        {/* Content Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
          
          {/* Breadcrumb Path */}
          <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest pb-4 border-b border-zinc-200/60">
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
                      <h4 className="text-xs font-black uppercase text-zinc-900 tracking-wider">Corporate Office Address</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        H83V+F46, Village Chhalera &amp; Sadarpur, Sadarpur, Sector 44, Noida, Uttar Pradesh 201303
                      </p>
                    </div>
                  </div>
                </div>

                {/* Communication channels Card */}
                <div className="bg-white rounded-2xl border border-zinc-100 p-6 space-y-5 hover:shadow-md transition-all duration-300">
                  {/* WhatsApp Phone */}
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">💬</span>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase text-zinc-900 tracking-wider">Phone / WhatsApp</h4>
                      <p className="text-xs text-[#7ca832] font-semibold hover:underline">
                        <a href="https://wa.me/918527167311" target="_blank" rel="noopener noreferrer">+91-8527167311</a>
                      </p>
                      <p className="text-[10px] text-zinc-400">Available on WhatsApp & Direct Calls</p>
                    </div>
                  </div>

                  <div className="border-t border-zinc-100/80"></div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">✉️</span>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase text-zinc-900 tracking-wider">Email Inquiry</h4>
                      <p className="text-xs text-[#7ca832] font-semibold hover:underline">
                        <a href="mailto:Superfoodsbharat@gmail.com">Superfoodsbharat@gmail.com</a>
                      </p>
                      <p className="text-[10px] text-zinc-400">Response time: Within 24 business hours</p>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Connect Card */}
                <div className="bg-[#7ca832]/5 rounded-2xl border border-[#7ca832]/10 p-6 space-y-3.5">
                  <h4 className="text-xs font-black uppercase text-zinc-900 tracking-wider">Order Instantly on WhatsApp</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Have a quick question or want to place a distribution request? Click below to start chatting with our desk directly on WhatsApp (+91-8527167311).
                  </p>
                  <a
                    href="https://wa.me/918527167311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebd56] text-white font-bold text-xs uppercase px-6 py-3 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer mt-1"
                  >
                    <span>Chat on WhatsApp (+91-8527167311)</span>
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


          {/* Sourcing & Connection Map Section */}
          <div className="bg-white border border-zinc-100 rounded-3xl p-8 lg:p-12 space-y-8">
            <div className="text-center space-y-3 max-w-md mx-auto">
              <span className="block text-xs font-black tracking-widest text-[#7ca832] uppercase font-sans">
                Our Sourcing Networks
              </span>
              <h2 className="text-3xl font-black text-zinc-950 font-serif tracking-tight">
                Farm Sourcing & Global Delivery
              </h2>
              <p className="text-xs text-zinc-500 font-medium">
                We cultivate organic raw lotus seeds in the wetlands of Bihar and Uttarakhand, dispatch from Dehradun, and deliver globally.
              </p>
              <div className="w-16 h-0.5 bg-[#7ca832] mx-auto opacity-80"></div>
            </div>

            {/* Stylized Visual SVG Connection Map */}
            <div className="w-full bg-[#fcfbf9] rounded-2xl p-6 border border-zinc-100 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden select-none min-h-[300px]">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b592d_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              {/* SVG Map Layout */}
              <div className="w-full max-w-lg lg:w-1/2 flex items-center justify-center relative z-10">
                <svg className="w-full max-w-[360px] h-[240px]" viewBox="0 0 300 200" fill="none">
                  {/* Glowing Points */}
                  {/* Uttarakhand */}
                  <circle cx="80" cy="50" r="6" fill="#3b592d" className="animate-pulse" />
                  <circle cx="80" cy="50" r="12" stroke="#3b592d" strokeWidth="1" className="animate-ping opacity-45" />
                  
                  {/* Bihar */}
                  <circle cx="150" cy="75" r="6" fill="#e8a324" className="animate-pulse" />
                  <circle cx="150" cy="75" r="12" stroke="#e8a324" strokeWidth="1" className="animate-ping opacity-45" />

                  {/* Destination points */}
                  <circle cx="240" cy="120" r="4" fill="#7ca832" />
                  <circle cx="200" cy="40" r="4" fill="#7ca832" />
                  <circle cx="30" cy="110" r="4" fill="#7ca832" />
                  <circle cx="130" cy="160" r="4" fill="#7ca832" />

                  {/* Connection Path Lines */}
                  {/* Bihar to Uttarakhand Hub */}
                  <path d="M 150 75 Q 115 50 80 50" stroke="#e8a324" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Uttarakhand Dispatch Hub to domestic/global destinations */}
                  <path d="M 80 50 Q 140 30 200 40" stroke="#3b592d" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 80 50 Q 160 85 240 120" stroke="#3b592d" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 80 50 Q 50 80 30 110" stroke="#3b592d" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 80 50 Q 105 105 130 160" stroke="#3b592d" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* Tooltips */}
                  <text x="88" y="46" fill="#3b592d" fontSize="7" fontWeight="black" fontFamily="sans-serif">ROASTING UNIT (DEHRADUN)</text>
                  <text x="158" y="79" fill="#e8a324" fontSize="7" fontWeight="black" fontFamily="sans-serif">WETLAND SOURCING (BIHAR)</text>
                  <text x="245" y="117" fill="#7ca832" fontSize="6" fontWeight="bold" fontFamily="sans-serif">GLOBAL SHIPMENTS</text>
                  <text x="5" y="118" fill="#7ca832" fontSize="6" fontWeight="bold" fontFamily="sans-serif">WESTERN CO-OPS</text>
                </svg>
              </div>

              {/* Sourcing Hubs Descriptions */}
              <div className="w-full lg:w-1/2 text-left space-y-6 relative z-10">
                <div className="space-y-2 border-l-2 border-[#7ca832] pl-4">
                  <h4 className="text-xs font-black uppercase text-zinc-900 tracking-wider">
                    Uttarakhand Central Facility
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                    Located in Dehradun, our state-of-the-art facility conducts sorting, convection clay-pot slow roasting, natural flavoring, nitrogen-flushed packaging, and quality lab clearances under strict ISO protocols.
                  </p>
                </div>
                <div className="space-y-2 border-l-2 border-[#e8a324] pl-4">
                  <h4 className="text-xs font-black uppercase text-zinc-900 tracking-wider">
                    Bihar Wetland Cultivation Hubs
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                    Madhubani and surrounding districts provide the perfect seasonal temperature and wetland water systems for harvesting pristine organic lotus seeds. Cultivated entirely by local women farming cooperatives.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive FAQ Accordion */}
          <div className="bg-white border border-zinc-100 rounded-3xl p-8 lg:p-12 space-y-8">
            <div className="text-center space-y-3 max-w-md mx-auto">
              <span className="block text-xs font-black tracking-widest text-[#7ca832] uppercase font-sans">
                Immediate Help
              </span>
              <h2 className="text-3xl font-black text-zinc-950 font-serif tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-0.5 bg-[#7ca832] mx-auto opacity-80"></div>
            </div>

            <div className="max-w-3xl mx-auto space-y-3.5 text-left">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-zinc-100 rounded-2xl overflow-hidden hover:border-zinc-200 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4.5 px-6 font-extrabold text-xs sm:text-sm text-zinc-900 flex justify-between items-center bg-[#faf9f6]/40 hover:bg-[#faf9f6] transition-colors cursor-pointer text-left gap-4"
                  >
                    <span>{faq.question}</span>
                    <span className="text-sm font-black text-[#7ca832] shrink-0">
                      {openFaqIndex === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="py-4.5 px-6 text-xs text-zinc-500 leading-relaxed font-medium border-t border-zinc-100/50 bg-white animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Product Feedback callout box (New B2C Engagement Component) */}
          <div className="bg-[#fafbfa] border border-[#7ca832]/25 rounded-3xl p-8 text-center space-y-6 max-w-4xl mx-auto">
            <div className="space-y-2">
              <span className="text-3xl select-none block">💡</span>
              <h3 className="text-lg font-black text-zinc-950 uppercase tracking-tight font-serif">
                Have a New Flavor Suggestion?
              </h3>
              <p className="text-xs text-zinc-500 max-w-xl mx-auto leading-relaxed font-medium">
                We are always testing new spice blends, healthy sweeteners, and organic herbs in our Dehradun kitchens. If you have an exciting recipe or a feedback idea, select "Product Feedback" on the form above and send us your thoughts!
              </p>
            </div>
            <button
              onClick={() => {
                setFormData({
                  ...formData,
                  subject: "feedback",
                  message: "I would love to suggest a new flavor: "
                });
                window.scrollTo({ top: 400, behavior: "smooth" });
              }}
              className="bg-[#3b592d] hover:bg-[#2d4322] text-white font-bold text-xs uppercase px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-xs hover:shadow-md"
            >
              Suggest a Flavor
            </button>
          </div>

          {/* Support SLA / Promise Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            {[
              { title: "Direct Farm Traceability", text: "Every packet traces back to the cooperative group that harvested the seeds.", icon: "🌱" },
              { title: "24-Hour Reply SLA", text: "We review and reply to all email, chat, and phone queries within 24 business hours.", icon: "✉️" },
              { title: "100% Quality Guarantee", text: "Not satisfied with the crunch? Get in touch and we will organize an instant refund or replace.", icon: "🛡️" },
            ].map((promise) => (
              <div
                key={promise.title}
                className="bg-white border border-zinc-100 rounded-3xl p-6 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow"
              >
                <span className="text-3xl select-none block">{promise.icon}</span>
                <h3 className="text-xs font-black uppercase text-zinc-950 tracking-wider">
                  {promise.title}
                </h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-medium">
                  {promise.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
