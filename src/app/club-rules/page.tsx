import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio Rules",
  description: "Studio policies for The Common reformer Pilates studio, Stoneygate, Leicester.",
};

const rules = [
  {
    n: "01",
    title: "Arrive early",
    body: "Please allow 10 minutes before your class. This allows time for a proper warm-up briefing and reformer setup. Late arrivals will not be admitted once a session has begun — this is for the safety and experience of all members.",
  },
  {
    n: "02",
    title: "Grip socks",
    body: "Grip socks must be worn at all times in the studio to ensure safety on the moving reformer carriage. Available to purchase at reception if needed.",
  },
  {
    n: "03",
    title: "Cancellation",
    body: "24 hours notice is required to cancel a booking without forfeiting the class credit. Cancellations made inside 24 hours of the class start time will forfeit the credit. Membership holders should cancel via the Momence app.",
  },
  {
    n: "04",
    title: "Pass validity",
    body: "Class passes are valid for 8 weeks from purchase. Passes cannot be extended, paused or transferred except in exceptional circumstances at management discretion.",
  },
  {
    n: "05",
    title: "Membership terms",
    body: "Monthly memberships require a minimum 3-month term and are billed monthly in advance. After the initial term, membership continues on a rolling monthly basis. One month's written notice is required to cancel.",
  },
  {
    n: "06",
    title: "Health & safety",
    body: "Please inform your instructor of any injuries, medical conditions or pregnancy before class. It is your responsibility to disclose relevant health information so we can adapt your session safely.",
  },
  {
    n: "07",
    title: "Phones & devices",
    body: "Please silence your phone before entering the studio. Photography and video recording of other members is not permitted without explicit consent.",
  },
  {
    n: "08",
    title: "Respect the space",
    body: "Please treat the studio, equipment and fellow members with care. Equipment should be cleaned after use and any damage reported to a member of staff immediately.",
  },
  {
    n: "09",
    title: "Hygiene",
    body: "Please come to class freshly cleaned and avoid strong fragrances, which can be uncomfortable in an enclosed studio environment. Bring a water bottle.",
  },
  {
    n: "10",
    title: "Guest passes",
    body: "Monthly members receive one guest pass per month. Guests must be registered in advance via Momence and accompanied by the member at all times. Guest passes cannot be accumulated or transferred.",
  },
];

export default function ClubRulesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 px-6 lg:px-12 bg-[#181512]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#B89A78] font-light mb-6">
            Studio Policies
          </p>
          <h1
            className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] text-[#F9F6F1]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Studio Rules
          </h1>
          <p className="mt-5 text-[14px] text-[#F9F6F1]/40 max-w-lg font-light leading-relaxed">
            Our policies exist to keep every member safe, respected and able to
            get the very best from their time at The Common.
          </p>
        </div>
      </section>

      {/* Rules */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto flex flex-col gap-px bg-[#E2D9CE]">
          {rules.map((rule) => (
            <div
              key={rule.n}
              className="bg-[#F9F6F1] px-8 py-8 grid grid-cols-[2.5rem_1fr] gap-6"
            >
              <span
                className="text-[11px] text-[#B89A78] font-light pt-0.5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {rule.n}
              </span>
              <div>
                <h3 className="text-[13px] font-medium text-[#181512] mb-2">{rule.title}</h3>
                <p className="text-[13px] text-[#181512]/50 leading-relaxed font-light">{rule.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="py-14 px-6 lg:px-12 bg-[#F2EDE5] text-center">
        <p className="text-[12px] text-[#181512]/40 max-w-xl mx-auto leading-relaxed font-light mb-6">
          By booking a class at The Common you agree to these policies. We reserve
          the right to refuse entry or cancel membership for persistent breaches of
          studio rules.
        </p>
        <Link
          href="/contact"
          className="text-[10px] tracking-[0.25em] uppercase font-medium text-[#7A6248] hover:text-[#283629] transition-colors"
        >
          Questions? Get in touch →
        </Link>
      </section>
    </>
  );
}
