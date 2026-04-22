import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const sections = [
  {
    title: "What data we collect",
    body: "When you book a class or submit an enquiry we collect your name, email address and any information you choose to provide. Class bookings are processed through Momence — please review their privacy policy for details of data held within that platform.",
  },
  {
    title: "How we use your data",
    body: "We use your data to manage bookings, respond to enquiries, and — with your consent — send updates about classes and events at The Common. We do not sell your data to third parties.",
  },
  {
    title: "Data retention",
    body: "Booking records are retained for two years for business and legal purposes. Contact form submissions are deleted within six months unless an ongoing relationship is established.",
  },
  {
    title: "Your rights",
    body: "Under UK GDPR you have the right to access, correct or delete your personal data at any time. To exercise these rights please contact us at hello@thecommonclub.co.uk.",
  },
  {
    title: "Cookies",
    body: "This website uses essential cookies only. No third-party tracking or advertising cookies are used without your explicit consent.",
  },
  {
    title: "Contact",
    body: "For any privacy-related queries: hello@thecommonclub.co.uk — The Common Club Ltd, 21 Allandale Road, Stoneygate, Leicester LE2 2DA.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="rule mb-8" />
          <h1
            className="text-[clamp(2rem,5vw,4rem)] font-light text-[#1A0C06] leading-[1.02]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Privacy Policy
          </h1>
          <p className="mt-3 text-[12px] text-[#1A0C06]/35 font-light">Last updated: April 2026</p>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto flex flex-col gap-px bg-[#E8D5CC]">
          {sections.map((s) => (
            <div key={s.title} className="bg-[#FAF7F2] px-8 py-8">
              <h2
                className="text-[1.1rem] font-light text-[#1A0C06] mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {s.title}
              </h2>
              <p className="text-[13px] text-[#1A0C06]/50 leading-relaxed font-light">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-8">
          <Link
            href="/contact"
            className="text-[10px] tracking-[0.25em] uppercase font-medium text-[#8B2C12] hover:text-[#1E0E07] transition-colors"
          >
            ← Back to contact
          </Link>
        </div>
      </section>
    </>
  );
}
