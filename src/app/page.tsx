import Link from "next/link";
import { ArrowRight } from "lucide-react";

const classes = [
  {
    name: "Foundation",
    level: "All levels",
    line: "Where every practice begins. Full-body technique with patient, expert guidance.",
    duration: "50 min",
    href: "/classes#foundation",
  },
  {
    name: "Elevate",
    level: "Intermediate",
    line: "Our signature class. Dynamic sequences that build strength, coordination and stamina.",
    duration: "50 min",
    href: "/classes#elevate",
  },
  {
    name: "Sculpt",
    level: "Advanced",
    line: "Demanding, precise, transformative. For practitioners who want to be tested.",
    duration: "50 min",
    href: "/classes#sculpt",
  },
  {
    name: "Barre",
    level: "All levels",
    line: "Ballet-inspired movement that elongates, tones and restores. Low impact, high reward.",
    duration: "45 min",
    href: "/classes#barre",
  },
  {
    name: "Prenatal",
    level: "Specialist",
    line: "Thoughtfully crafted for expectant mothers — safe, nourishing and deeply supportive.",
    duration: "45 min",
    href: "/classes#prenatal",
  },
];

const testimonials = [
  {
    quote: "I've tried studios across Leicester and nothing comes close. The instructors know your name and your body. It genuinely feels like a community.",
    name: "Sophie M.",
    detail: "Member since 2023",
  },
  {
    quote: "The Elevate class changed my body in ways I never expected. I came in sceptical and left completely converted.",
    name: "James K.",
    detail: "Foundation → Elevate",
  },
  {
    quote: "As a prenatal client I felt completely safe and supported. The instructors are knowledgeable and the space is beautiful.",
    name: "Priya N.",
    detail: "Prenatal programme",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end bg-[#1E0E07] overflow-hidden">
        {/* Subtle gradient wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 25% 75%, rgba(174,55,23,0.22) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(139,44,18,0.10) 0%, transparent 50%)",
          }}
        />
        {/* Fine grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#FAF7F2 1px, transparent 1px), linear-gradient(90deg, #FAF7F2 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 pt-40 w-full">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#AE3717] font-light mb-10">
            Stoneygate · Leicester
          </p>

          <h1
            className="text-[clamp(3.5rem,9.5vw,8.5rem)] font-light leading-[0.95] text-[#FAF7F2] mb-12 max-w-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Move with
            <br />
            <em className="italic text-[#AE3717]">intention.</em>
          </h1>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Link
              href="/schedule"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#AE3717] text-[#1A0C06] text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-[#FAF7F2] transition-colors duration-300 group"
            >
              Reserve Your Place
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/classes"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-medium text-[#FAF7F2]/40 hover:text-[#FAF7F2]/80 transition-colors pt-3.5"
            >
              The Practice
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Bottom fade to cream */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1E0E07]/0" />
      </section>

      {/* ── INTRO OFFER ──────────────────────────────────────────── */}
      <div className="bg-[#AE3717]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#1A0C06]/80 font-light tracking-wide">
            New to The Common?{" "}
            <span className="font-medium text-[#1A0C06]">Three classes for £25</span>
            <span className="text-[#1A0C06]/55"> — valid for 14 days</span>
          </p>
          <Link
            href="/schedule"
            className="shrink-0 text-[10px] tracking-[0.25em] uppercase font-medium text-[#1A0C06]/70 hover:text-[#1A0C06] transition-colors underline underline-offset-4"
          >
            Book your intro
          </Link>
        </div>
      </div>

      {/* ── STATEMENT ────────────────────────────────────────────── */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="rule mb-8" />
            <h2
              className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.08] text-[#1A0C06]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              More than a studio —
              <br />
              <em className="italic text-[#8B2C12]">a place to belong.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-5 pt-2">
            <p className="text-[15px] text-[#1A0C06]/60 leading-relaxed font-light">
              The Common is where movement meets connection. Our reformer Pilates
              classes are led by instructors who know your name, your goals and your
              body — and who show up for you the same way every session.
            </p>
            <p className="text-[15px] text-[#1A0C06]/60 leading-relaxed font-light">
              We built The Common for people who believe that how you move matters —
              and that the space and community around that movement matter just as much.
            </p>
            <div className="mt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-medium text-[#1E0E07] hover:text-[#8B2C12] transition-colors group"
              >
                Our story
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PRACTICE ─────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 bg-[#F3EAE3]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <div className="rule mb-6" />
              <h2
                className="text-[clamp(2rem,4vw,3rem)] font-light leading-[1.08] text-[#1A0C06]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                The Practice
              </h2>
            </div>
            <Link
              href="/classes"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-medium text-[#1A0C06]/45 hover:text-[#1E0E07] transition-colors group whitespace-nowrap"
            >
              All sessions
              <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Class list — editorial table style */}
          <div className="flex flex-col divide-y divide-[#E8D5CC]">
            {classes.map((c, i) => (
              <Link
                key={c.name}
                href={c.href}
                className="group grid grid-cols-12 gap-4 py-7 hover:bg-[#E8D5CC]/40 transition-colors -mx-4 px-4"
              >
                <span className="col-span-1 text-[11px] text-[#AE3717] font-light self-center hidden sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-12 sm:col-span-3 self-center">
                  <p
                    className="text-[1.6rem] font-light text-[#1A0C06] leading-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {c.name}
                  </p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#AE3717] mt-1">{c.level}</p>
                </div>
                <p className="col-span-12 sm:col-span-5 text-[13px] text-[#1A0C06]/55 font-light leading-relaxed self-center">
                  {c.line}
                </p>
                <div className="col-span-12 sm:col-span-2 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2">
                  <span className="text-[11px] text-[#1A0C06]/35 font-light">{c.duration}</span>
                  <ArrowRight
                    size={14}
                    className="text-[#AE3717]/0 group-hover:text-[#AE3717] transition-colors"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESERVE CTA ──────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-12 bg-[#1A0C06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#AE3717] font-light mb-6">
              Online booking via Momence
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.08] text-[#FAF7F2]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Your schedule,
              <br />
              <em className="italic text-[#AE3717]">reserved in seconds.</em>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#AE3717] text-[#1A0C06] text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-[#FAF7F2] transition-colors duration-300 group"
            >
              View Schedule
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#FAF7F2]/15 text-[#FAF7F2]/60 text-[10px] tracking-[0.25em] uppercase font-medium hover:border-[#AE3717]/60 hover:text-[#AE3717] transition-colors duration-300"
            >
              Membership &amp; Passes
            </Link>
          </div>
        </div>
      </section>

      {/* ── IN THEIR WORDS ───────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="rule mb-6" />
            <h2
              className="text-[clamp(2rem,4vw,3rem)] font-light leading-[1.08] text-[#1A0C06]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              In their words
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8D5CC]">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#FAF7F2] p-10 flex flex-col gap-6">
                <p className="text-[15px] text-[#1A0C06]/60 leading-relaxed font-light flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-6 border-t border-[#E8D5CC]">
                  <p className="text-[13px] font-medium text-[#1A0C06]">{t.name}</p>
                  <p className="text-[11px] text-[#AE3717] tracking-wide mt-0.5">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-36 px-6 lg:px-12 bg-[#F3EAE3]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rule mx-auto mb-10" />
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] text-[#1A0C06] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your first class
            <br />
            <em className="italic text-[#1E0E07]">starts here.</em>
          </h2>
          <p className="text-[14px] text-[#1A0C06]/45 max-w-sm mx-auto mb-12 font-light leading-relaxed">
            Three classes for £25. No commitment — just show up, grip socks on, and move.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#1E0E07] text-[#FAF7F2] text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-[#1A0C06] transition-colors duration-300 group"
          >
            Reserve Your Intro Class
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
