import type { Metadata } from "next";
import { Mochiy_Pop_One } from "next/font/google";
import "./globals.css";

import { CookieConsent } from "@/components/CookieConsent";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const mochiyPopOne = Mochiy_Pop_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mochiy",
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
    <html lang="en" className={`${mochiyPopOne.variable} h-full scroll-smooth antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap" rel="stylesheet" />
      </head>
      <body className={`${mochiyPopOne.className} min-h-full flex flex-col bg-[#faf8f5]`}>
        {children}
        <CookieConsent />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
