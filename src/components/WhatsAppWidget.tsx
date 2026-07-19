"use client";

import React from "react";

export const WhatsAppWidget: React.FC = () => {
  const whatsappNumber = "911800123455"; // Superfoods Bharat WhatsApp Contact Number
  const defaultMessage = encodeURIComponent(
    "Hello Superfoods Bharat! I am visiting your website and have an inquiry about your organic Makhana products."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group">
      {/* Hover Tooltip Badge */}
      <span className="hidden sm:inline-block bg-[#0D2619] text-white text-xs font-bold py-1.5 px-3 rounded-full shadow-lg border border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none">
        Chat with Us 💬
      </span>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Superfoods Bharat on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white cursor-pointer"
      >
        {/* Pulse Ring Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg className="w-8 h-8 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.758.459 3.474 1.33 4.982L2 22l5.176-1.338c1.45.791 3.097 1.207 4.832 1.207h.005c5.507 0 9.99-4.478 9.99-9.984 0-2.666-1.037-5.173-2.925-7.062A9.92 9.92 0 0 0 12.012 2zm5.86 14.156c-.247.69-1.229 1.264-1.705 1.346-.475.083-1.077.118-3.468-.871-2.909-1.203-4.782-4.167-4.928-4.363-.146-.195-1.185-1.58-1.185-3.013 0-1.433.748-2.14 1.013-2.43.266-.29.581-.363.775-.363.195 0 .39.002.558.01.179.008.421-.067.66.505.247.59.843 2.06.916 2.21.073.149.122.324.024.518-.097.195-.146.315-.292.487-.146.172-.307.385-.438.517-.146.146-.298.305-.128.596.17.291.756 1.233 1.624 2.008 1.116.996 2.057 1.305 2.348 1.451.291.146.462.122.632-.073.171-.195.731-.852.925-1.144.195-.292.39-.243.657-.146.267.097 1.681.792 1.973.938.292.146.486.219.559.341.073.122.073.71-.174 1.4z" />
        </svg>
      </a>
    </div>
  );
};
