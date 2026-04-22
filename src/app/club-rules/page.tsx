import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Club Rules | The Common",
  description:
    "Club policies and rules for The Common reformer Pilates studio, Stoneygate, Leicester.",
};

const rules = [
  {
    number: "01",
    title: "Arrive on time",
    body: "Please arrive at least 10 minutes before your class commences. This allows time for a proper warm-up briefing and reformer setup. Late arrivals will not be admitted once the class has started — this is for the safety and experience of all members.",
  },
  {
    number: "02",
    title: "Grip socks are essential",
    body: "Grip socks must be worn at all times in the studio to ensure safety on the moving reformer carriage. If you don't have a pair, they are available to purchase at reception before your class.",
  },
  {
    number: "03",
    title: "Cancellation policy",
    body: "We require a minimum of 24 hours notice to cancel a booking. Cancellations made within 24 hours of the class start time will forfeit the class credit or session from your pass. Membership holders should cancel via the Momence app.",
  },
  {
    number: "04",
    title: "Class pass validity",
    body: "Class passes are valid for 8 weeks from the date of purchase. Passes cannot be extended, paused or transferred except in exceptional circumstances at management discretion.",
  },
  {
    number: "05",
    title: "Membership terms",
    body: "Monthly memberships run on a minimum 3-month term and are billed monthly in advance. After the minimum term, memberships continue on a rolling monthly basis. One month's written notice is required to cancel.",
  },
  {
    number: "06",
    title: "Health & safety",
    body: "Please inform your instructor of any injuries, medical conditions or pregnancy before class. It is your responsibility to disclose relevant health information so we can adapt your session safely.",
  },
  {
    number: "07",
    title: "Phones & devices",
    body: "Please silence your phone before entering the studio. Photography and video recording of other members is not permitted without explicit consent.",
  },
  {
    number: "08",
    title: "Respect the space",
    body: "Please treat the studio, equipment and your fellow members with care and respect. Equipment should be cleaned after use. Any damage should be reported to a member of staff immediately.",
  },
  {
    number: "09",
    title: "Hygiene",
    body: "Please come to class freshly cleaned and avoid strong fragrances, which can be uncomfortable in an enclosed studio environment. Bring a water bottle — hydration is always encouraged.",
  },
  {
    number: "10",
    title: "Guest passes",
    body: "Monthly members receive 1 guest pass per month. Guests must be registered in advance through Momence and accompanied by the member. Guest passes cannot be accumulated or transferred.",
  },
];

export default function ClubRulesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 lg:px-10 bg-[#1A1814]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4A882] font-medium mb-4">
            Studio Policies
          </p>
          <h1
            className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] text-[#FAF7F2]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Club Rules
          </h1>
          <p className="mt-4 text-base text-[#FAF7F2]/50 max-w-xl font-light leading-relaxed">
            Our policies exist to keep every member safe, respected and able to get
            the most from their time at The Common. Please read and follow them.
          </p>
        </div>
      </section>

      {/* Rules */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto flex flex-col gap-px bg-[#E8E0D4]">
          {rules.map((rule) => (
            <div key={rule.number} className="bg-[#FAF7F2] p-8 grid grid-cols-[3rem_1fr] gap-6">
              <span
                className="text-sm font-light text-[#C4A882] pt-0.5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {rule.number}
              </span>
              <div>
                <h3 className="text-base font-medium text-[#1A1814] mb-2">{rule.title}</h3>
                <p className="text-sm text-[#1A1814]/55 leading-relaxed font-light">{rule.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="py-12 px-6 lg:px-10 bg-[#F0EDE8] text-center">
        <p className="text-sm text-[#1A1814]/50 max-w-xl mx-auto leading-relaxed font-light mb-6">
          By booking a class at The Common you agree to abide by these rules. We
          reserve the right to refuse entry or cancel membership for persistent
          breaches of studio policy.
        </p>
        <Link
          href="/contact"
          className="inline-block text-xs tracking-[0.2em] uppercase font-medium text-[#7C6548] hover:text-[#2D3B2E] transition-colors"
        >
          Questions? Contact us →
        </Link>
      </section>
    </>
  );
}
