import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Common | Reformer Pilates Studio · Leicester",
  description:
    "Reformer Pilates studio and wellness community in Stoneygate, Leicester. Book classes online, explore our schedule and become part of The Common.",
  openGraph: {
    title: "The Common | Reformer Pilates Studio · Leicester",
    description:
      "A reformer pilates studio and community hub in the heart of Stoneygate, Leicester.",
    url: "https://www.thecommonclub.co.uk",
    siteName: "The Common",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-[#FAF7F2] text-[#1A1814]">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
