import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Super Food Bharat - Calories on Count | 100% Organic Superfoods",
  description: "Experience premium roasted Makhana (fox nuts / lotus seeds) slow-cooked in olive oil with handpicked spices. Diabetic-friendly, gluten-free, and high protein snacks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-[#faf8f5]">
        {children}
      </body>
    </html>
  );
}
