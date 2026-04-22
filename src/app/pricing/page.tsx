import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Membership | The Common",
  description:
    "Flexible class passes and monthly memberships at The Common reformer Pilates studio, Stoneygate, Leicester.",
};

const passes = [
  {
    name: "Intro Offer",
    price: "£25",
    period: "one-time",
    highlight: "New members only",
    description: "The best way to discover The Common. Two classes, no strings.",
    features: [
      "2 reformer Pilates classes",
      "Valid for 14 days from first class",
      "Any class type",
      "One per new member",
    ],
    cta: "Claim Offer",
    accent: true,
  },
  {
    name: "Single Class",
    price: "£20",
    period: "per class",
    highlight: null,
    description: "Drop-in when it suits you.",
    features: [
      "1 class of your choice",
      "Booking via Momence",
      "Cancel up to 24h before",
      "Grip socks available",
    ],
    cta: "Book a Class",
    accent: false,
  },
  {
    name: "5 Class Pass",
    price: "£90",
    period: "£18 / class",
    highlight: "Save £10",
    description: "A flexible way to build a consistent practice.",
    features: [
      "5 classes",
      "Valid for 8 weeks",
      "Any class type",
      "Online booking included",
    ],
    cta: "Buy Pass",
    accent: false,
  },
  {
    name: "10 Class Pass",
    price: "£170",
    period: "£17 / class",
    highlight: "Save £30",
    description: "Our most popular pass for committed movers.",
    features: [
      "10 classes",
      "Valid for 8 weeks",
      "Any class type",
      "Priority booking window",
    ],
    cta: "Buy Pass",
    accent: false,
  },
];

const membership = {
  name: "Monthly Membership",
  price: "£POA",
  period: "per month",
  minTerm: "3-month minimum",
  description:
    "Unlimited community, 12 classes a month, and exclusive perks. For those who make The Common part of their lifestyle.",
  features: [
    "12 classes per month",
    "1 guest pass per month",
    "Priority access — book before public release",
    "Member discounts on food & drinks",
    "Exclusive member events",
    "3-month minimum term, billed monthly",
  ],
};

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 lg:px-10 bg-[#2D3B2E]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4A882] font-medium mb-4">
            Pricing
          </p>
          <h1
            className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] text-[#FAF7F2]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Simple, honest pricing
          </h1>
          <p className="mt-4 text-base text-[#FAF7F2]/55 max-w-xl font-light leading-relaxed">
            Whether you&apos;re trying us for the first time or making us a cornerstone
            of your week — there&apos;s a plan that fits.
          </p>
        </div>
      </section>

      {/* Class passes */}
      <section className="py-20 px-6 lg:px-10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#7C6548] font-medium mb-10">
            Class Passes
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8E0D4]">
            {passes.map((pass) => (
              <div
                key={pass.name}
                className={`flex flex-col p-8 ${pass.accent ? "bg-[#2D3B2E]" : "bg-[#FAF7F2]"}`}
              >
                {pass.highlight && (
                  <span
                    className={`self-start mb-4 px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-medium ${
                      pass.accent ? "bg-[#C4A882] text-[#1A1814]" : "bg-[#E8E0D4] text-[#7C6548]"
                    }`}
                  >
                    {pass.highlight}
                  </span>
                )}
                <h3
                  className={`text-xl font-light mb-1 ${pass.accent ? "text-[#FAF7F2]" : "text-[#1A1814]"}`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {pass.name}
                </h3>
                <div className="mt-4 mb-2">
                  <span
                    className={`text-4xl font-light ${pass.accent ? "text-[#FAF7F2]" : "text-[#1A1814]"}`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {pass.price}
                  </span>
                </div>
                <span
                  className={`text-xs mb-4 ${pass.accent ? "text-[#C4A882]" : "text-[#7C6548]"}`}
                >
                  {pass.period}
                </span>
                <p
                  className={`text-sm font-light leading-relaxed mb-6 flex-1 ${
                    pass.accent ? "text-[#FAF7F2]/60" : "text-[#1A1814]/55"
                  }`}
                >
                  {pass.description}
                </p>
                <ul className="flex flex-col gap-2 mb-8">
                  {pass.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-xs font-light ${
                        pass.accent ? "text-[#FAF7F2]/70" : "text-[#1A1814]/60"
                      }`}
                    >
                      <Check
                        size={12}
                        className={`mt-0.5 shrink-0 ${pass.accent ? "text-[#C4A882]" : "text-[#C4A882]"}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/schedule"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-xs tracking-[0.2em] uppercase font-medium transition-colors group ${
                    pass.accent
                      ? "bg-[#C4A882] text-[#1A1814] hover:bg-[#FAF7F2]"
                      : "bg-[#2D3B2E] text-[#FAF7F2] hover:bg-[#1A1814]"
                  }`}
                >
                  {pass.cta}
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-20 px-6 lg:px-10 bg-[#1A1814]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4A882] font-medium mb-10">
            Membership
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#FAF7F2]/10">
            <div className="bg-[#FAF7F2]/5 p-12">
              <h2
                className="text-[clamp(2rem,4vw,3rem)] font-light text-[#FAF7F2] leading-[1.1] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {membership.name}
              </h2>
              <div className="flex items-baseline gap-3 mt-6 mb-2">
                <span
                  className="text-5xl font-light text-[#FAF7F2]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {membership.price}
                </span>
                <span className="text-sm text-[#C4A882]">{membership.period}</span>
              </div>
              <p className="text-xs text-[#C4A882]/70 mb-6">{membership.minTerm}</p>
              <p className="text-sm text-[#FAF7F2]/60 leading-relaxed font-light mb-10">
                {membership.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C4A882] text-[#1A1814] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#FAF7F2] transition-colors group"
              >
                Enquire About Membership
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-[#FAF7F2]/5 p-12 flex flex-col justify-center">
              <h3 className="text-xs tracking-[0.3em] uppercase text-[#C4A882] font-medium mb-6">
                What&apos;s included
              </h3>
              <ul className="flex flex-col gap-4">
                {membership.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#FAF7F2]/65 font-light">
                    <Check size={14} className="mt-0.5 shrink-0 text-[#C4A882]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Policy note */}
      <section className="py-12 px-6 lg:px-10 bg-[#F0EDE8]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-[#1A1814]/50 leading-relaxed font-light">
            All bookings are handled securely via Momence. Class passes are valid for 8 weeks
            from date of purchase. Memberships require a minimum 3-month term and are billed
            monthly. Cancellations require 24 hours notice. Please{" "}
            <Link href="/contact" className="underline underline-offset-2 hover:text-[#7C6548] transition-colors">
              contact us
            </Link>{" "}
            with any questions.
          </p>
        </div>
      </section>
    </>
  );
}
