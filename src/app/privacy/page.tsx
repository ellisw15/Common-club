import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Common",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 lg:px-10 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-[clamp(2rem,5vw,4rem)] font-light text-[#1A1814]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[#1A1814]/45 font-light">
            Last updated: April 2026
          </p>
        </div>
      </section>
      <section className="py-12 px-6 lg:px-10 pb-24">
        <div className="max-w-3xl mx-auto prose prose-sm text-[#1A1814]/65">
          <p className="text-sm leading-relaxed font-light text-[#1A1814]/65">
            The Common Club Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your
            personal data. This policy explains how we collect, use and store
            information when you use our website and services.
          </p>
          {[
            {
              title: "What data we collect",
              body: "When you book a class or enquire via our contact form we collect your name, email address and any information you choose to provide. Class bookings are processed through Momence — please review their privacy policy for details of data held within that platform.",
            },
            {
              title: "How we use your data",
              body: "We use your data to manage your bookings, respond to enquiries, and (with your consent) send you updates about classes and events. We do not sell your data to third parties.",
            },
            {
              title: "Data retention",
              body: "We retain booking records for 2 years for business and legal purposes. Contact form data is deleted within 6 months unless an ongoing relationship is established.",
            },
            {
              title: "Your rights",
              body: "Under UK GDPR you have the right to access, correct or delete your personal data. To exercise these rights please email hello@thecommonclub.co.uk.",
            },
            {
              title: "Cookies",
              body: "Our website uses minimal, essential cookies only. No third-party tracking cookies are used without consent.",
            },
            {
              title: "Contact",
              body: "For any privacy-related queries please contact: hello@thecommonclub.co.uk — The Common Club Ltd, 21 Allandale Road, Stoneygate, Leicester, LE2 2DA.",
            },
          ].map((s) => (
            <div key={s.title} className="mt-10">
              <h2
                className="text-lg font-light text-[#1A1814] mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {s.title}
              </h2>
              <p className="text-sm leading-relaxed font-light text-[#1A1814]/60">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
