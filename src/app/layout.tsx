import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

import { CookieConsent } from "@/components/CookieConsent";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { EntryPopupModal } from "@/components/EntryPopupModal";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Super Food Bharat - Calories on Count | 100% Organic Superfoods",
  description: "Experience premium roasted Makhana (fox nuts / lotus seeds) slow-cooked in olive oil with handpicked spices. Diabetic-friendly, gluten-free, and high protein snacks.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} h-full scroll-smooth antialiased`}>
      <body className={`${plusJakartaSans.className} min-h-full flex flex-col bg-[#faf8f5]`}>
        {children}
        <CookieConsent />
        <WhatsAppWidget />
        <EntryPopupModal />
      </body>
    </html>
  );
}
