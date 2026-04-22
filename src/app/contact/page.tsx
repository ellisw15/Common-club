import type { Metadata } from "next";
import { MapPin, ExternalLink, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | The Common",
  description:
    "Get in touch with The Common reformer Pilates studio in Stoneygate, Leicester.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 lg:px-10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#7C6548] font-medium mb-4">
            Get in Touch
          </p>
          <h1
            className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] text-[#1A1814]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            We&apos;d love to hear<br />
            <em className="italic">from you.</em>
          </h1>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact form */}
          <div>
            <h2
              className="text-xl font-light text-[#1A1814] mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Send us a message
            </h2>
            <form className="flex flex-col gap-5" action="#" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.2em] uppercase text-[#7C6548] font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="bg-[#F0EDE8] border-0 px-4 py-3 text-sm text-[#1A1814] placeholder-[#1A1814]/30 outline-none focus:ring-1 focus:ring-[#C4A882] transition-shadow"
                    placeholder="Jane"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.2em] uppercase text-[#7C6548] font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="bg-[#F0EDE8] border-0 px-4 py-3 text-sm text-[#1A1814] placeholder-[#1A1814]/30 outline-none focus:ring-1 focus:ring-[#C4A882] transition-shadow"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[0.2em] uppercase text-[#7C6548] font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="bg-[#F0EDE8] border-0 px-4 py-3 text-sm text-[#1A1814] placeholder-[#1A1814]/30 outline-none focus:ring-1 focus:ring-[#C4A882] transition-shadow"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[0.2em] uppercase text-[#7C6548] font-medium">
                  Subject
                </label>
                <select
                  name="subject"
                  className="bg-[#F0EDE8] border-0 px-4 py-3 text-sm text-[#1A1814] outline-none focus:ring-1 focus:ring-[#C4A882] transition-shadow appearance-none"
                >
                  <option value="">Select a topic…</option>
                  <option value="classes">Classes &amp; Booking</option>
                  <option value="membership">Membership Enquiry</option>
                  <option value="prenatal">Prenatal Programme</option>
                  <option value="private">Private Sessions</option>
                  <option value="cafe">Cafe &amp; Events</option>
                  <option value="other">Something else</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[0.2em] uppercase text-[#7C6548] font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="bg-[#F0EDE8] border-0 px-4 py-3 text-sm text-[#1A1814] placeholder-[#1A1814]/30 outline-none focus:ring-1 focus:ring-[#C4A882] transition-shadow resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="self-start inline-flex items-center gap-3 px-8 py-4 bg-[#2D3B2E] text-[#FAF7F2] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#1A1814] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info panel */}
          <div className="flex flex-col gap-10">
            <div>
              <h2
                className="text-xl font-light text-[#1A1814] mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Find us
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <MapPin size={16} className="text-[#C4A882] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#1A1814] mb-1">Address</p>
                    <p className="text-sm text-[#1A1814]/55 font-light leading-relaxed">
                      21 Allandale Road<br />
                      Stoneygate<br />
                      Leicester, LE2 2DA
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={16} className="text-[#C4A882] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#1A1814] mb-1">Email</p>
                    <a
                      href="mailto:hello@thecommonclub.co.uk"
                      className="text-sm text-[#1A1814]/55 font-light hover:text-[#7C6548] transition-colors"
                    >
                      hello@thecommonclub.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ExternalLink size={16} className="text-[#C4A882] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#1A1814] mb-1">Instagram</p>
                    <a
                      href="https://www.instagram.com/thecommon.club/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#1A1814]/55 font-light hover:text-[#7C6548] transition-colors"
                    >
                      @thecommon.club
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={16} className="text-[#C4A882] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#1A1814] mb-1">Studio Hours</p>
                    <div className="flex flex-col gap-1">
                      {[
                        { day: "Monday – Friday", time: "6:30am – 8:00pm" },
                        { day: "Saturday", time: "8:00am – 3:00pm" },
                        { day: "Sunday", time: "9:00am – 1:00pm" },
                      ].map((h) => (
                        <div key={h.day} className="flex justify-between gap-6 text-sm font-light text-[#1A1814]/55">
                          <span>{h.day}</span>
                          <span>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-[#F0EDE8] h-56 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={20} className="text-[#C4A882] mx-auto mb-2" />
                <p className="text-xs text-[#1A1814]/40 tracking-wider">
                  21 Allandale Road, Stoneygate, Leicester
                </p>
                <a
                  href="https://maps.google.com/?q=21+Allandale+Road+Stoneygate+Leicester+LE2+2DA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs tracking-[0.15em] uppercase text-[#7C6548] hover:text-[#2D3B2E] transition-colors"
                >
                  Open in Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
