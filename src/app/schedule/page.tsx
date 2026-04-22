import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Schedule & Booking | The Common",
  description:
    "Browse the full class schedule and book your reformer Pilates class at The Common, Stoneygate, Leicester.",
};

export default function SchedulePage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-16 px-6 lg:px-10 bg-[#2D3B2E]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4A882] font-medium mb-4">
            Live Schedule
          </p>
          <h1
            className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] text-[#FAF7F2]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Book your class
          </h1>
          <p className="mt-4 text-base text-[#FAF7F2]/55 max-w-lg font-light leading-relaxed">
            All booking is handled securely through Momence. Select a class, pick
            your time, and you&apos;re done — confirmation goes straight to your inbox.
          </p>
        </div>
      </section>

      {/* Intro offer reminder */}
      <div className="bg-[#C4A882]/20 border-b border-[#C4A882]/30 px-6 lg:px-10 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm">
          <span className="text-[#1A1814]/80">
            <strong>New member?</strong> Claim your intro offer — 2 classes for £25, valid 14 days.
          </span>
          <span className="text-xs tracking-[0.15em] uppercase text-[#7C6548] font-medium">
            Select any class below →
          </span>
        </div>
      </div>

      {/* Momence Schedule Embed */}
      <section className="py-12 px-6 lg:px-10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          {/*
            ── MOMENCE INTEGRATION ──────────────────────────────────────────
            Replace the placeholder below with the embed snippet from:
            Momence Dashboard → Studio Setup → Add to Website → Schedule Plugin

            The iframe approach (recommended for custom-styled sites):
            1. Go to Momence Dashboard → Studio Setup → Plugins
            2. Copy the schedule plugin code
            3. Paste code into browser URL bar to make it single-line
            4. Wrap as: <iframe srcdoc='PASTE_SINGLE_LINE_CODE_HERE' ...></iframe>

            Or for the standard script embed, paste the <script> tag directly.
            ─────────────────────────────────────────────────────────────────
          */}
          <div className="w-full min-h-[700px] bg-[#F0EDE8] flex flex-col items-center justify-center gap-6 text-center p-12 border border-[#E8E0D4]">
            <div className="w-16 h-px bg-[#C4A882] mx-auto" />
            <p
              className="text-2xl font-light text-[#1A1814]/40"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Schedule Loading…
            </p>
            <p className="text-sm text-[#1A1814]/30 max-w-sm leading-relaxed font-light">
              The live Momence schedule widget will appear here. Connect your
              Momence account to activate real-time booking.
            </p>
            <div className="mt-4 px-4 py-2 bg-[#E8E0D4] text-xs text-[#7C6548] font-mono tracking-wider">
              {"<!-- Paste Momence embed code here -->"}
            </div>
            <a
              href="https://momence.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium text-[#C4A882] hover:text-[#7C6548] transition-colors mt-2"
            >
              Connect via Momence
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 px-6 lg:px-10 bg-[#F0EDE8]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-xl font-light text-[#1A1814] mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Before your class
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8E0D4]">
            {[
              {
                step: "01",
                title: "Arrive early",
                body: "Please arrive 10 minutes before your class. Late arrivals cannot be admitted once the class has started.",
              },
              {
                step: "02",
                title: "Grip socks",
                body: "Grip socks are essential for safety on the reformer carriage. Available to purchase at the studio.",
              },
              {
                step: "03",
                title: "Cancellations",
                body: "We require at least 24 hours notice to cancel a booking. Late cancellations forfeit the class credit.",
              },
              {
                step: "04",
                title: "Pass validity",
                body: "Class passes are valid for 8 weeks from purchase. Memberships roll monthly on a 3-month minimum.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-[#FAF7F2] p-8">
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#C4A882] font-medium block mb-3">
                  {item.step}
                </span>
                <h3 className="text-base font-medium text-[#1A1814] mb-2">{item.title}</h3>
                <p className="text-sm text-[#1A1814]/55 leading-relaxed font-light">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/club-rules"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium text-[#7C6548] hover:text-[#2D3B2E] transition-colors group"
            >
              Read full club rules
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
