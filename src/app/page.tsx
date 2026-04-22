import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ClassCard } from "@/components/ClassCard";
import { TestimonialCard } from "@/components/TestimonialCard";

const classes = [
  {
    name: "Foundation",
    tag: "All Levels",
    description:
      "The perfect entry point into reformer Pilates. Full-body awareness — core, glutes, thighs, chest and back — with expert guidance on technique and posture.",
    duration: "50 min",
    bgClass: "bg-[#E8E0D4]",
    light: false,
  },
  {
    name: "Elevate",
    tag: "Intermediate",
    description:
      "Our signature class. Dynamic, controlled movements that deepen your coordination, flexibility and stamina. The natural evolution from Foundation.",
    duration: "50 min",
    bgClass: "bg-[#2D3B2E]",
    light: true,
  },
  {
    name: "Sculpt",
    tag: "Advanced",
    description:
      "High-intensity reformer for experienced practitioners. Complex sequences demanding strength, endurance and precision.",
    duration: "50 min",
    bgClass: "bg-[#C4A882]",
    light: false,
  },
  {
    name: "Barre",
    tag: "All Levels",
    description:
      "Ballet-inspired movement meets Pilates precision. Low-impact, high-reward. Elongate, tone and restore using the barre for support.",
    duration: "45 min",
    bgClass: "bg-[#F0EDE8]",
    light: false,
  },
  {
    name: "Prenatal",
    tag: "Specialist",
    description:
      "Purpose-built for expectant mothers. Safe, effective movement focusing on the pelvic floor, posture and the changing needs of your body.",
    duration: "45 min",
    bgClass: "bg-[#E8E0D4]",
    light: false,
  },
];

const testimonials = [
  {
    quote:
      "I've tried studios across Leicester and nothing comes close. The instructors know your name and your body. It genuinely feels like a community, not a gym.",
    name: "Sophie M.",
    detail: "Member since 2023",
  },
  {
    quote:
      "The Elevate class changed my body in ways I never expected. I came in skeptical of Pilates and left completely hooked. The cafe upstairs is a brilliant bonus.",
    name: "James K.",
    detail: "Foundation → Elevate convert",
  },
  {
    quote:
      "As a prenatal client I felt completely safe and supported throughout. The instructors are knowledgeable, the space is beautiful — I can't recommend it enough.",
    name: "Priya N.",
    detail: "Prenatal programme",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2D3B2E]">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 60%, #C4A882 0%, transparent 55%), radial-gradient(circle at 75% 15%, #7C6548 0%, transparent 45%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#FAF7F2 1px, transparent 1px), linear-gradient(90deg, #FAF7F2 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 text-center">
          <p className="text-[11px] tracking-[0.45em] uppercase text-[#C4A882] font-medium mb-8">
            Stoneygate · Leicester
          </p>
          <h1
            className="text-[clamp(3rem,9vw,7.5rem)] font-light leading-[1.02] text-[#FAF7F2] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Move with
            <br />
            <em className="italic text-[#C4A882]">intention.</em>
          </h1>
          <p className="text-base sm:text-lg text-[#FAF7F2]/55 max-w-md mx-auto leading-relaxed font-light mb-12">
            A reformer Pilates studio and community in the heart of Stoneygate.
            Expert-led classes for every level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/schedule"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FAF7F2] text-[#1A1814] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#C4A882] transition-colors duration-300 group"
            >
              Book a Class
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/classes"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#FAF7F2]/30 text-[#FAF7F2] text-xs tracking-[0.2em] uppercase font-medium hover:border-[#C4A882] hover:text-[#C4A882] transition-colors duration-300"
            >
              Explore Classes
            </Link>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#FAF7F2]/30 animate-bounce">
            <ChevronDown size={18} />
          </div>
        </div>
      </section>

      {/* INTRO OFFER BANNER */}
      <section className="bg-[#C4A882] py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-sm font-medium text-[#1A1814]">
            New to The Common?{" "}
            <span className="font-semibold">Try 2 classes for £25</span>
            <span className="text-[#1A1814]/60 font-normal"> — valid for 14 days from your first class</span>
          </p>
          <Link
            href="/schedule"
            className="shrink-0 inline-block px-5 py-2 bg-[#1A1814] text-[#FAF7F2] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#2D3B2E] transition-colors"
          >
            Claim Offer
          </Link>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#7C6548] font-medium mb-6">
              Our Philosophy
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-[#1A1814] mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              More than a studio —<br />
              <em className="italic">a community.</em>
            </h2>
            <p className="text-base text-[#1A1814]/60 leading-relaxed mb-5 font-light">
              The Common is where movement meets connection. Our reformer Pilates
              classes are led by expert instructors who know your name, your goals
              and your body. Every session is purposeful, every space considered.
            </p>
            <p className="text-base text-[#1A1814]/60 leading-relaxed mb-10 font-light">
              Beyond the studio, our upstairs cafe is a gathering point — high-grade
              matcha, specialty coffee, cold-pressed juices and fresh seasonal food,
              all under one roof.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase font-medium text-[#2D3B2E] hover:text-[#7C6548] transition-colors group"
            >
              Our Story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-px bg-[#E8E0D4]">
            {[
              { value: "5", label: "Class Types" },
              { value: "50", label: "Min Sessions" },
              { value: "LE2", label: "Stoneygate" },
              { value: "∞", label: "Community" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#FAF7F2] p-10 flex flex-col items-center justify-center text-center"
              >
                <span
                  className="text-[clamp(2rem,5vw,3.5rem)] font-light text-[#2D3B2E] leading-none mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.value}
                </span>
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#1A1814]/40 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES */}
      <section className="py-20 px-6 lg:px-10 bg-[#F0EDE8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#7C6548] font-medium mb-4">
                What We Offer
              </p>
              <h2
                className="text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-[#1A1814]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Five ways to move
              </h2>
            </div>
            <Link
              href="/classes"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium text-[#2D3B2E] hover:text-[#7C6548] transition-colors group whitespace-nowrap"
            >
              All Classes
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E0D4]">
            {classes.map((c) => (
              <ClassCard key={c.name} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE CTA */}
      <section className="py-24 px-6 lg:px-10 bg-[#1A1814]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4A882] font-medium mb-4">
              Powered by Momence
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3rem)] font-light leading-[1.15] text-[#FAF7F2]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              See this week&apos;s schedule &amp;
              <br />
              <em className="italic text-[#C4A882]">book in seconds.</em>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C4A882] text-[#1A1814] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#FAF7F2] transition-colors duration-300 group"
            >
              View Schedule
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#FAF7F2]/20 text-[#FAF7F2] text-xs tracking-[0.2em] uppercase font-medium hover:border-[#C4A882] hover:text-[#C4A882] transition-colors duration-300"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#7C6548] font-medium mb-4">
              Member Stories
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-[#1A1814]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What the community says
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CAFE */}
      <section className="py-24 px-6 lg:px-10 bg-[#C4A882]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#7C6548] font-medium mb-6">
              Upstairs
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-[#1A1814] mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Fuel your body,
              <br />
              <em className="italic">feed your soul.</em>
            </h2>
            <p className="text-base text-[#1A1814]/70 leading-relaxed mb-8 font-light">
              After class, head upstairs to our community cafe. High-grade matcha,
              specialty coffee, cold-pressed juices and fresh seasonal food —
              crafted to complement how you move.
            </p>
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase font-medium text-[#1A1814] hover:text-[#2D3B2E] transition-colors group"
            >
              View Menu
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Matcha", "Cold Press", "Seasonal Food", "Specialty Coffee"].map((item) => (
              <div
                key={item}
                className="bg-[#1A1814]/10 p-10 flex items-center justify-center text-center"
              >
                <span
                  className="text-xl font-light text-[#1A1814]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 lg:px-10 text-center">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[#7C6548] font-medium mb-6">
          Ready to start?
        </p>
        <h2
          className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] text-[#1A1814] mb-10"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Your first class
          <br />
          <em className="italic text-[#2D3B2E]">starts here.</em>
        </h2>
        <p className="text-base text-[#1A1814]/50 max-w-sm mx-auto mb-12 font-light leading-relaxed">
          2 classes for £25 — your intro offer. No commitment. Just show up,
          grip socks on, and move.
        </p>
        <Link
          href="/schedule"
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#2D3B2E] text-[#FAF7F2] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#1A1814] transition-colors duration-300 group"
        >
          Book Your Intro Class
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </>
  );
}
