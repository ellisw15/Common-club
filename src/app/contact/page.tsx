import type { Metadata } from "next";
import { MapPin, Mail, ExternalLink, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Visit — Contact",
  description:
    "Find The Common reformer Pilates studio at 21 Allandale Road, Stoneygate, Leicester.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="rule mb-8" />
          <h1
            className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] text-[#1A0C06]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Come and find us.
          </h1>
          <p className="mt-5 text-[14px] text-[#1A0C06]/50 max-w-md font-light leading-relaxed">
            We're in the heart of Stoneygate, Leicester. Walk in, book online,
            or drop us a line — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <div>
            <h2
              className="text-[1.4rem] font-light text-[#1A0C06] mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Send a message
            </h2>
            <form className="flex flex-col gap-5" action="#" method="POST">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { name: "first_name", label: "First name", placeholder: "Jane" },
                  { name: "last_name",  label: "Last name",  placeholder: "Smith" },
                ].map((f) => (
                  <div key={f.name} className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[#8B2C12] font-medium">
                      {f.label}
                    </label>
                    <input
                      type="text"
                      name={f.name}
                      placeholder={f.placeholder}
                      className="bg-[#F3EAE3] px-4 py-3 text-[13px] text-[#1A0C06] placeholder-[#1A0C06]/25 outline-none focus:ring-1 focus:ring-[#AE3717] transition-shadow"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.25em] uppercase text-[#8B2C12] font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  className="bg-[#F3EAE3] px-4 py-3 text-[13px] text-[#1A0C06] placeholder-[#1A0C06]/25 outline-none focus:ring-1 focus:ring-[#AE3717] transition-shadow"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.25em] uppercase text-[#8B2C12] font-medium">
                  Subject
                </label>
                <select
                  name="subject"
                  className="bg-[#F3EAE3] px-4 py-3 text-[13px] text-[#1A0C06] outline-none focus:ring-1 focus:ring-[#AE3717] transition-shadow appearance-none"
                >
                  <option value="">Select a topic…</option>
                  <option value="classes">Classes &amp; Booking</option>
                  <option value="membership">Membership Enquiry</option>
                  <option value="prenatal">Prenatal Programme</option>
                  <option value="private">Private Sessions</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.25em] uppercase text-[#8B2C12] font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we help?"
                  className="bg-[#F3EAE3] px-4 py-3 text-[13px] text-[#1A0C06] placeholder-[#1A0C06]/25 outline-none focus:ring-1 focus:ring-[#AE3717] transition-shadow resize-none"
                />
              </div>

              <button
                type="submit"
                className="self-start px-8 py-3.5 bg-[#1E0E07] text-[#FAF7F2] text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-[#1A0C06] transition-colors"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-10 pt-2">
            <div className="flex flex-col gap-7">
              <div className="flex items-start gap-5">
                <MapPin size={14} className="text-[#AE3717] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[12px] font-medium text-[#1A0C06] mb-1 tracking-wide">Address</p>
                  <p className="text-[13px] text-[#1A0C06]/50 font-light leading-relaxed">
                    21 Allandale Road<br />
                    Stoneygate, Leicester<br />
                    LE2 2DA
                  </p>
                  <a
                    href="https://maps.google.com/?q=21+Allandale+Road+Stoneygate+Leicester+LE2+2DA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-[#8B2C12] hover:text-[#1E0E07] transition-colors"
                  >
                    Open in Maps <ExternalLink size={10} />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Mail size={14} className="text-[#AE3717] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[12px] font-medium text-[#1A0C06] mb-1 tracking-wide">Email</p>
                  <a
                    href="mailto:hello@thecommonclub.co.uk"
                    className="text-[13px] text-[#1A0C06]/50 font-light hover:text-[#8B2C12] transition-colors"
                  >
                    hello@thecommonclub.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <ExternalLink size={14} className="text-[#AE3717] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[12px] font-medium text-[#1A0C06] mb-1 tracking-wide">Instagram</p>
                  <a
                    href="https://www.instagram.com/thecommon.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[#1A0C06]/50 font-light hover:text-[#8B2C12] transition-colors"
                  >
                    @thecommon.club
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Clock size={14} className="text-[#AE3717] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[12px] font-medium text-[#1A0C06] mb-3 tracking-wide">Studio hours</p>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { day: "Monday – Friday", time: "6:30am – 8:00pm" },
                      { day: "Saturday",        time: "8:00am – 3:00pm" },
                      { day: "Sunday",          time: "9:00am – 1:00pm" },
                    ].map((h) => (
                      <div key={h.day} className="flex justify-between gap-8 text-[12px] font-light text-[#1A0C06]/45">
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-[#F3EAE3] h-52 flex flex-col items-center justify-center gap-3 mt-2">
              <MapPin size={18} className="text-[#AE3717]" />
              <p className="text-[11px] text-[#1A0C06]/30 tracking-wider">Stoneygate · Leicester</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
