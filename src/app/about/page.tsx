import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About | The Common",
  description:
    "The story behind The Common — a reformer Pilates studio and community cafe in Stoneygate, Leicester.",
};

const values = [
  {
    title: "Movement",
    body: "We believe movement is medicine. Every class at The Common is designed to be purposeful — not just exercise, but a practice that connects mind and body.",
  },
  {
    title: "Community",
    body: "A studio is only as good as the people in it. We've built a space where members become friends, and where showing up feels like coming home.",
  },
  {
    title: "Expertise",
    body: "Our instructors are fully qualified, continually trained and deeply passionate about reformer Pilates. Your safety and progress are always their priority.",
  },
  {
    title: "Environment",
    body: "From the studio floor to the cafe upstairs, every detail of The Common has been considered. Beautiful spaces inspire beautiful movement.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 lg:px-10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto max-w-3xl">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#7C6548] font-medium mb-4">
            Our Story
          </p>
          <h1
            className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] text-[#1A1814]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Built for community,<br />
            <em className="italic">rooted in movement.</em>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            <p className="text-lg text-[#1A1814]/70 leading-relaxed font-light">
              The Common was born from a simple belief: that the best studio experiences
              are built on connection — between instructor and student, between
              movement and mindfulness, and between the people who share the space.
            </p>
            <p className="text-base text-[#1A1814]/60 leading-relaxed font-light">
              We opened our doors in Stoneygate, Leicester, with a reformer studio
              downstairs and a community cafe upstairs — because we wanted The Common
              to be a destination, not just a drop-in. A place you leave feeling
              better in every way.
            </p>
            <p className="text-base text-[#1A1814]/60 leading-relaxed font-light">
              Our instructors are handpicked for their expertise, warmth and ability
              to read a room. Whether you&apos;re stepping onto a reformer for the first
              time or you&apos;ve been moving for years, you&apos;ll be met where you are.
            </p>
          </div>
          <div className="bg-[#F0EDE8] p-12 flex flex-col justify-between gap-10">
            <div>
              <span
                className="block text-6xl font-light text-[#C4A882] leading-none mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                21
              </span>
              <p className="text-sm text-[#1A1814]/50">Allandale Road, Stoneygate</p>
            </div>
            <div>
              <span
                className="block text-6xl font-light text-[#C4A882] leading-none mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                LE2
              </span>
              <p className="text-sm text-[#1A1814]/50">Leicester&apos;s most neighbourly postcode</p>
            </div>
            <div>
              <span
                className="block text-6xl font-light text-[#C4A882] leading-none mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                2↑
              </span>
              <p className="text-sm text-[#1A1814]/50">Studio below, cafe above</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-10 bg-[#2D3B2E]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4A882] font-medium mb-12">
            What We Stand For
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#FAF7F2]/10">
            {values.map((v) => (
              <div key={v.title} className="bg-[#2D3B2E] p-10">
                <h3
                  className="text-2xl font-light text-[#FAF7F2] mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-[#FAF7F2]/55 leading-relaxed font-light">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#7C6548] font-medium mb-4">
            The Team
          </p>
          <h2
            className="text-[clamp(2rem,4vw,3rem)] font-light text-[#1A1814] mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Expert instructors,<br />genuine people.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E0D4]">
            {[
              {
                name: "Lead Instructor",
                role: "Reformer Pilates · Foundation & Elevate",
                bio: "Fully certified in STOTT Pilates with over 8 years teaching reformer. Passionate about posture, breathwork and building confidence on the machine.",
              },
              {
                name: "Movement Specialist",
                role: "Sculpt · Barre",
                bio: "A background in contemporary dance brought her to Pilates. Her classes are precise, demanding and deeply satisfying.",
              },
              {
                name: "Pre & Postnatal Specialist",
                role: "Prenatal · Foundation",
                bio: "Certified in pre and postnatal exercise, she creates a safe, empowering environment for expectant and new mothers.",
              },
            ].map((instructor) => (
              <div key={instructor.name} className="bg-[#FAF7F2] p-10">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-[#E8E0D4] mb-6 flex items-center justify-center">
                  <span className="text-2xl text-[#C4A882]" style={{ fontFamily: "var(--font-heading)" }}>
                    {instructor.name[0]}
                  </span>
                </div>
                <h3
                  className="text-xl font-light text-[#1A1814] mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {instructor.name}
                </h3>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#C4A882] font-medium mb-4">
                  {instructor.role}
                </p>
                <p className="text-sm text-[#1A1814]/55 leading-relaxed font-light">{instructor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-10 bg-[#F0EDE8] text-center">
        <h2
          className="text-[clamp(2rem,4vw,3.5rem)] font-light text-[#1A1814] mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Come and meet us.
        </h2>
        <p className="text-base text-[#1A1814]/50 max-w-sm mx-auto mb-10 font-light">
          The best way to understand The Common is to experience it. Book an intro class and see for yourself.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2D3B2E] text-[#FAF7F2] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#1A1814] transition-colors group"
          >
            Book a Class
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-[#1A1814]/20 text-[#1A1814] text-xs tracking-[0.2em] uppercase font-medium hover:border-[#2D3B2E] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
