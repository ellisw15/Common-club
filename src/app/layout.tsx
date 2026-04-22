import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Common | Reformer Pilates · Stoneygate, Leicester",
    template: "%s | The Common",
  },
  description:
    "An intimate reformer Pilates studio in Stoneygate, Leicester. Expert-led classes, genuine community. Book your place.",
  openGraph: {
    title: "The Common | Reformer Pilates · Leicester",
    description:
      "An intimate reformer Pilates studio in Stoneygate, Leicester. Expert-led classes, genuine community.",
    url: "https://www.thecommonclub.co.uk",
    siteName: "The Common",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A0C06]">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
