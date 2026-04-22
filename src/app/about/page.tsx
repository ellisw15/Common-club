import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Our Story",
  description:
    "The story behind The Common — a reformer Pilates studio and community in Stoneygate, Leicester.",
};

const values = [
  {
    title: "Movement",
    body: "We believe movement is medicine. Every class at The Common is purposeful — not just exercise, but a practice that reconnects mind and body.",
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
    body: "Every detail of The Common has been considered. Beautiful spaces inspire beautiful movement — and we take that seriously.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
          <div className="lg:col-span-6">
            <div className="rule mb-8" />
            <h1
              className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] text-[#181512]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Built for community,
              <br />
              <em className="italic text-[#7A6248]">rooted in movement.</em>
            </h1>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-[15px] text-[#181512]/55 leading-relaxed font-light">
              The Common was born from a simple belief: that the best studio
              experiences are built on connection — between instructor and student,
              between movement and mindfulness, and between the people who share
              the space.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 lg:px-12 bg-[#F2EDE5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-6">
            <p className="text-[15px] text-[#181512]/60 leading-relaxed font-light">
              We opened our doors in Stoneygate, Leicester, with one clear intention:
              to create a studio that felt unlike anything else in the city. A place
              that was rigorous but warm, expert but approachable, and above all —
              genuinely community-led.
            </p>
            <p className="text-[15px] text-[#181512]/60 leading-relaxed font-light">
              Our instructors are handpicked for their expertise, warmth and ability
              to meet you where you are. Whether you're stepping onto a reformer for
              the first time or you've been moving for years — you'll be seen here.
            </p>
            <p className="text-[15px] text-[#181512]/60 leading-relaxed font-light">
              We believe that how you move is as important as how often you move.
              The Common is for people who care about both.
            </p>
          </div>

          {/* Typographic facts panel */}
          <div className="grid grid-cols-2 gap-px bg-[#E2D9CE]">
            {[
              { value: "21", label: "Allandale Road" },
              { value: "LE2", label: "Stoneygate" },
              { value: "5", label: "Class types" },
              { value: "50′", label: "Per session" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-[#F9F6F1] py-12 px-8 flex flex-col items-start justify-end gap-2"
              >
                <span
                  className="text-[3rem] leading-none font-light text-[#283629]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.value}
                </span>
                <span className="text-[10px] tracking-[0.28em] uppercase text-[#181512]/35 font-medium">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-12 bg-[#283629]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#B89A78] font-light mb-14">
            What We Stand For
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#F9F6F1]/10">
            {values.map((v) => (
              <div key={v.title} className="bg-[#283629] p-10 lg:p-12">
                <div className="w-6 h-px bg-[#B89A78] mb-7" />
                <h3
                  className="text-[1.8rem] font-light text-[#F9F6F1] mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {v.title}
                </h3>
                <p className="text-[13px] text-[#F9F6F1]/45 leading-relaxed font-light">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="rule mb-8" />
          <h2
            className="text-[clamp(2rem,4vw,3rem)] font-light text-[#181512] mb-14"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The people behind<br /><em className="italic text-[#7A6248]">the practice.</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2D9CE]">
            {[
              {
                initials: "LI",
                role: "Reformer Pilates",
                classes: "Foundation · Elevate",
                bio: "Certified in STOTT Pilates with over eight years teaching reformer. Passionate about posture, breathwork and building lasting confidence on the machine.",
              },
              {
                initials: "MS",
                role: "Movement Specialist",
                classes: "Sculpt · Barre",
                bio: "A background in contemporary dance brought her to Pilates. Her classes are precise, demanding and deeply satisfying.",
              },
              {
                initials: "PS",
                role: "Pre &amp; Postnatal",
                classes: "Prenatal · Foundation",
                bio: "Certified in pre and postnatal exercise, she creates a safe, empowering environment for expectant and new mothers at every stage.",
              },
            ].map((p) => (
              <div key={p.initials} className="bg-[#F9F6F1] p-10">
                <div className="w-14 h-14 rounded-full bg-[#E2D9CE] flex items-center justify-center mb-7">
                  <span
                    className="text-[1.2rem] font-light text-[#B89A78]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {p.initials}
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-[#B89A78] font-medium mb-1">
                  {p.role}
                </p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#181512]/30 font-light mb-5">
                  {p.classes}
                </p>
                <p className="text-[13px] text-[#181512]/50 leading-relaxed font-light">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 lg:px-12 bg-[#F2EDE5] text-center">
        <div className="max-w-xl mx-auto">
          <div className="rule mx-auto mb-10" />
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-light text-[#181512] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Come and find us.
          </h2>
          <p className="text-[14px] text-[#181512]/45 mb-12 font-light leading-relaxed">
            The best way to understand The Common is to experience it. Book your intro class and see for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#283629] text-[#F9F6F1] text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-[#181512] transition-colors group"
            >
              Reserve a class
              <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#181512]/18 text-[#181512]/60 text-[10px] tracking-[0.25em] uppercase font-medium hover:border-[#283629] hover:text-[#283629] transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
