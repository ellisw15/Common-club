import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { MomencePurchaseWidget } from "@/components/MomenceWidget";

export const metadata: Metadata = {
  title: "Membership & Passes",
  description:
    "Flexible class passes and monthly membership at The Common reformer Pilates studio, Stoneygate, Leicester.",
};

const passes = [
  {
    name: "Intro",
    qualifier: "New members only",
    price: "£25",
    sub: "three classes",
    note: "valid 14 days from first class",
    features: [
      "Any class type",
      "Booking via Momence",
      "One per new member",
    ],
    cta: "Claim your intro",
    primary: true,
  },
  {
    name: "Single",
    qualifier: null,
    price: "£20",
    sub: "per class",
    note: null,
    features: [
      "Any class type",
      "Cancel up to 24h before",
      "Grip socks available at studio",
    ],
    cta: "Book a class",
    primary: false,
  },
  {
    name: "Five",
    qualifier: "Save £10",
    price: "£90",
    sub: "£18 per class",
    note: "valid 8 weeks",
    features: [
      "Any class type",
      "Online booking included",
      "Share across class types",
    ],
    cta: "Buy a five-pass",
    primary: false,
  },
  {
    name: "Ten",
    qualifier: "Save £30",
    price: "£170",
    sub: "£17 per class",
    note: "valid 8 weeks",
    features: [
      "Any class type",
      "Priority booking window",
      "Online booking included",
    ],
    cta: "Buy a ten-pass",
    primary: false,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 px-6 lg:px-12 bg-[#1E0E07]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#AE3717] font-light mb-6">
            Membership &amp; Passes
          </p>
          <h1
            className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] text-[#FAF7F2]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            An investment
            <br />
            <em className="italic text-[#AE3717]">in yourself.</em>
          </h1>
          <p className="mt-5 text-[14px] text-[#FAF7F2]/45 max-w-lg font-light leading-relaxed">
            Whether you're trying us for the first time or making The Common part
            of your weekly rhythm — there's a plan that fits.
          </p>
        </div>
      </section>

      {/* Class passes */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="rule mb-10" />
          <h2
            className="text-[1.5rem] font-light text-[#1A0C06] mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Class Passes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8D5CC]">
            {passes.map((pass) => (
              <div
                key={pass.name}
                className={`flex flex-col p-9 ${
                  pass.primary ? "bg-[#1E0E07]" : "bg-[#FAF7F2]"
                }`}
              >
                {pass.qualifier && (
                  <span
                    className={`self-start mb-5 px-3 py-1 text-[9px] tracking-[0.25em] uppercase font-medium ${
                      pass.primary ? "bg-[#AE3717] text-[#1A0C06]" : "bg-[#E8D5CC] text-[#8B2C12]"
                    }`}
                  >
                    {pass.qualifier}
                  </span>
                )}
                {!pass.qualifier && <div className="mb-5 h-6" />}

                <h3
                  className={`text-[1.5rem] font-light mb-5 ${
                    pass.primary ? "text-[#FAF7F2]" : "text-[#1A0C06]"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {pass.name}
                </h3>

                <div className="mb-1">
                  <span
                    className={`text-[2.8rem] leading-none font-light ${
                      pass.primary ? "text-[#FAF7F2]" : "text-[#1A0C06]"
                    }`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {pass.price}
                  </span>
                </div>
                <span
                  className={`text-[11px] mb-1 ${pass.primary ? "text-[#AE3717]" : "text-[#8B2C12]"}`}
                >
                  {pass.sub}
                </span>
                {pass.note && (
                  <span
                    className={`text-[10px] mb-6 font-light ${
                      pass.primary ? "text-[#FAF7F2]/35" : "text-[#1A0C06]/30"
                    }`}
                  >
                    {pass.note}
                  </span>
                )}
                {!pass.note && <div className="mb-6" />}

                <ul className="flex flex-col gap-2.5 mb-10 flex-1">
                  {pass.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-[12px] font-light ${
                        pass.primary ? "text-[#FAF7F2]/55" : "text-[#1A0C06]/50"
                      }`}
                    >
                      <Check size={11} className="text-[#AE3717] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/schedule"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-[10px] tracking-[0.22em] uppercase font-medium transition-colors group ${
                    pass.primary
                      ? "bg-[#AE3717] text-[#1A0C06] hover:bg-[#FAF7F2]"
                      : "border border-[#1E0E07] text-[#1E0E07] hover:bg-[#1E0E07] hover:text-[#FAF7F2]"
                  }`}
                >
                  {pass.cta}
                  <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Momence purchase widget (shows when slug is set) */}
      <section className="px-6 lg:px-12 pb-4">
        <div className="max-w-7xl mx-auto">
          <MomencePurchaseWidget type="passes" />
        </div>
      </section>

      {/* Membership */}
      <section className="py-20 px-6 lg:px-12 bg-[#1A0C06]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#AE3717] font-light mb-12">
            Monthly Membership
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#FAF7F2]/8">
            <div className="bg-[#FAF7F2]/5 p-12 lg:p-14">
              <h2
                className="text-[clamp(2rem,4vw,3.2rem)] font-light text-[#FAF7F2] leading-[1.05] mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Make it
                <br />
                <em className="italic text-[#AE3717]">your practice.</em>
              </h2>
              <p className="text-[14px] text-[#FAF7F2]/45 leading-relaxed font-light mb-10">
                For those who make The Common part of their lifestyle. Twelve classes
                a month, priority booking, a guest pass and member perks — on a
                rolling monthly plan after an initial three-month term.
              </p>
              <div className="mb-10">
                <span
                  className="text-[3rem] font-light text-[#FAF7F2] leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  POA
                </span>
                <span className="ml-3 text-[12px] text-[#AE3717]">per month</span>
                <p className="text-[10px] text-[#FAF7F2]/25 mt-1 font-light">
                  3-month minimum · billed monthly
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#AE3717] text-[#1A0C06] text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-[#FAF7F2] transition-colors group"
              >
                Enquire about membership
                <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            <div className="bg-[#FAF7F2]/5 p-12 lg:p-14 flex flex-col justify-center">
              <h3 className="text-[9px] tracking-[0.38em] uppercase text-[#AE3717] font-medium mb-8">
                What's included
              </h3>
              <ul className="flex flex-col gap-5">
                {[
                  "12 classes per month",
                  "1 guest pass per month",
                  "Priority booking — access before public release",
                  "Member discounts on food and drinks",
                  "Exclusive member events throughout the year",
                  "3-month minimum term, billed monthly",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[13px] text-[#FAF7F2]/45 font-light">
                    <Check size={13} className="text-[#AE3717] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Policy note */}
      <section className="py-12 px-6 lg:px-12 bg-[#F3EAE3]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px] text-[#1A0C06]/40 leading-relaxed font-light">
            All bookings are processed securely via Momence. Class passes are valid for
            8 weeks from purchase. Memberships require a minimum 3-month term. 24 hours
            notice required to cancel without forfeiting your credit.{" "}
            <Link href="/contact" className="underline underline-offset-2 hover:text-[#8B2C12] transition-colors">
              Contact us
            </Link>{" "}
            with any questions.
          </p>
        </div>
      </section>
    </>
  );
}
