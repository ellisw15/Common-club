import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MomenceScheduleWidget } from "@/components/MomenceWidget";

export const metadata: Metadata = {
  title: "Reserve — Class Schedule",
  description:
    "Browse the live schedule and book your reformer Pilates class at The Common, Stoneygate, Leicester.",
};

export default function SchedulePage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 lg:px-12 bg-[#1E0E07]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#AE3717] font-light mb-6">
            Reserve Your Place
          </p>
          <h1
            className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] text-[#FAF7F2]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Live Schedule
          </h1>
          <p className="mt-5 text-[14px] text-[#FAF7F2]/45 max-w-lg font-light leading-relaxed">
            Select a class, choose your time, confirm your place. All booking is
            handled securely via Momence — confirmation goes straight to your inbox.
          </p>
        </div>
      </section>

      {/* Intro offer note */}
      <div className="bg-[#AE3717]/15 border-b border-[#AE3717]/25 px-6 lg:px-12 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-[12px] text-[#1A0C06]/65 font-light">
            <span className="font-medium text-[#1A0C06]">New member?</span>{" "}
            Claim your intro offer — three classes for £25, valid for 14 days.
          </p>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B2C12] font-medium">
            Select any class below
          </span>
        </div>
      </div>

      {/* Momence widget */}
      <section className="bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-12 py-10">
          <MomenceScheduleWidget />
        </div>
      </section>

      {/* Before you arrive */}
      <section className="py-20 px-6 lg:px-12 bg-[#F3EAE3]">
        <div className="max-w-7xl mx-auto">
          <div className="rule mb-8" />
          <h2
            className="text-[1.6rem] font-light text-[#1A0C06] mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Before you arrive
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8D5CC]">
            {[
              {
                n: "01",
                title: "Arrive early",
                body: "Please allow 10 minutes before your class. Late arrivals cannot be admitted once the session has started.",
              },
              {
                n: "02",
                title: "Grip socks",
                body: "Grip socks are required for safety on the reformer carriage. Available to purchase at reception.",
              },
              {
                n: "03",
                title: "Cancellation",
                body: "24 hours notice required to cancel without forfeiting your credit. Cancel via the Momence app.",
              },
              {
                n: "04",
                title: "Pass validity",
                body: "Class passes are valid for 8 weeks from purchase. Memberships roll monthly on a 3-month minimum.",
              },
            ].map((item) => (
              <div key={item.n} className="bg-[#FAF7F2] p-8">
                <span
                  className="text-[11px] text-[#AE3717] font-light block mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.n}
                </span>
                <h3 className="text-[13px] font-medium text-[#1A0C06] mb-2">{item.title}</h3>
                <p className="text-[12px] text-[#1A0C06]/50 leading-relaxed font-light">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/club-rules"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-medium text-[#8B2C12] hover:text-[#1E0E07] transition-colors group"
            >
              Full studio rules
              <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
