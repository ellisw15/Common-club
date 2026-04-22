import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Practice",
  description:
    "Five reformer Pilates and movement classes at The Common — Foundation, Elevate, Sculpt, Barre and Prenatal. Stoneygate, Leicester.",
};

const classes = [
  {
    id: "foundation",
    name: "Foundation",
    level: "All levels",
    tagline: "Where every practice begins.",
    description:
      "New to reformer Pilates, or returning after time away? Foundation is your starting point. Led by instructors who prioritise technique above all else, each session builds full-body awareness with a focus on core, glutes, thighs, chest and back. Expect patient coaching, a welcoming atmosphere, and a workout that leaves you standing taller.",
    who: "Absolute beginners and those returning after a break.",
    duration: "50 min",
    intensity: "Low – Medium",
    dark: false,
    bg: "bg-[#FAF7F2]",
  },
  {
    id: "elevate",
    name: "Elevate",
    level: "Intermediate",
    tagline: "Our signature class.",
    description:
      "Elevate bridges the gap between foundational practice and advanced training. Dynamic, controlled sequences that build on the principles of Foundation — deepening your coordination, flexibility and stamina while refining your understanding of reformer movement. This is where the real transformation happens.",
    who: "Those who have completed Foundation or have prior Pilates experience.",
    duration: "50 min",
    intensity: "Medium – High",
    dark: true,
    bg: "bg-[#1E0E07]",
  },
  {
    id: "sculpt",
    name: "Sculpt",
    level: "Advanced",
    tagline: "For practitioners who want to be tested.",
    description:
      "Our most demanding class. Built for experienced reformer practitioners who crave complexity — intricate sequences that challenge strength, endurance and precision in equal measure. Not recommended for beginners. Come prepared to work.",
    who: "Experienced reformer Pilates practitioners.",
    duration: "50 min",
    intensity: "High",
    dark: true,
    bg: "bg-[#1A0C06]",
  },
  {
    id: "barre",
    name: "Barre",
    level: "All levels",
    tagline: "Elegance meets endurance.",
    description:
      "Ballet-inspired movement blended with Pilates precision. Using the barre for support, this class works through low-impact, isometric contractions that elongate, tone and restore. Accessible to all levels — no dance background required, only a willingness to move with intention.",
    who: "All levels. Works beautifully alongside reformer classes.",
    duration: "45 min",
    intensity: "Low – Medium",
    dark: false,
    bg: "bg-[#F3EAE3]",
  },
  {
    id: "prenatal",
    name: "Prenatal",
    level: "Specialist",
    tagline: "Movement made for motherhood.",
    description:
      "Designed in consultation with pre and postnatal specialists, our Prenatal class supports the changing needs of the expectant body throughout all trimesters. Safe, effective and deeply nourishing — with particular care given to pelvic floor health, posture and breathwork. All instructors are certified in pre and postnatal movement.",
    who: "Expectant mothers at any trimester. Always consult your midwife before attending.",
    duration: "45 min",
    intensity: "Gentle",
    dark: false,
    bg: "bg-[#E8D5CC]",
  },
];

export default function ClassesPage() {
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
            The Practice
          </h1>
          <p className="mt-5 text-[15px] text-[#1A0C06]/50 max-w-xl font-light leading-relaxed">
            Five classes, each with a distinct purpose. Find your level —
            then grow beyond it.
          </p>
        </div>
      </section>

      {/* Class panels */}
      <div className="flex flex-col">
        {classes.map((cls) => {
          const tc   = cls.dark ? "text-[#FAF7F2]"    : "text-[#1A0C06]";
          const sc   = cls.dark ? "text-[#FAF7F2]/50"  : "text-[#1A0C06]/50";
          const ac   = cls.dark ? "text-[#AE3717]"     : "text-[#8B2C12]";
          const borC = cls.dark ? "border-[#FAF7F2]/12" : "border-[#1A0C06]/10";
          const ruleC= cls.dark ? "bg-[#AE3717]"       : "bg-[#AE3717]";

          return (
            <div key={cls.id} id={cls.id} className={`${cls.bg} px-6 lg:px-12 py-16 lg:py-20`}>
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* Left — identity */}
                <div className="lg:col-span-4">
                  <div className={`w-8 h-px ${ruleC} mb-7`} />
                  <span className={`text-[10px] tracking-[0.38em] uppercase font-light ${ac} block mb-2`}>
                    {cls.level}
                  </span>
                  <h2
                    className={`text-[clamp(2.5rem,5vw,4rem)] font-light leading-[0.95] ${tc}`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {cls.name}
                  </h2>
                  <p className={`mt-2 text-[15px] italic font-light ${ac}`}>{cls.tagline}</p>
                </div>

                {/* Middle — description */}
                <div className="lg:col-span-5">
                  <p className={`text-[14px] leading-relaxed font-light ${sc} mb-6`}>
                    {cls.description}
                  </p>
                  <div className={`flex items-start gap-2 pt-6 border-t ${borC}`}>
                    <Users size={12} className={`${sc} mt-0.5 shrink-0`} />
                    <p className={`text-[12px] leading-relaxed font-light ${sc}`}>{cls.who}</p>
                  </div>
                </div>

                {/* Right — meta + CTA */}
                <div className="lg:col-span-3 flex flex-col justify-between gap-8">
                  <div className="flex flex-col gap-3">
                    <div className={`flex items-center gap-2 text-[12px] ${sc}`}>
                      <Clock size={12} />
                      {cls.duration}
                    </div>
                    <span className={`text-[10px] tracking-[0.2em] uppercase font-medium ${ac}`}>
                      {cls.intensity} intensity
                    </span>
                  </div>
                  <Link
                    href="/schedule"
                    className={`inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-medium transition-colors group ${
                      cls.dark
                        ? "text-[#AE3717] hover:text-[#FAF7F2]"
                        : "text-[#1E0E07] hover:text-[#8B2C12]"
                    }`}
                  >
                    Reserve this class
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <section className="py-24 px-6 lg:px-12 bg-[#F3EAE3]">
        <div className="max-w-3xl mx-auto">
          <div className="rule mb-8" />
          <h2
            className="text-[clamp(1.8rem,3vw,2.5rem)] font-light text-[#1A0C06] mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Common questions
          </h2>
          <div className="flex flex-col gap-px bg-[#E8D5CC]">
            {[
              {
                q: "What should I wear?",
                a: "Comfortable, form-fitting clothes that allow free movement. Grip socks are required and available to purchase at reception if needed.",
              },
              {
                q: "I'm completely new — where do I begin?",
                a: "Foundation. Our instructors will guide you through the reformer setup and every movement sequence. No prior experience needed.",
              },
              {
                q: "Can I use my pass across different class types?",
                a: "Yes. Any class pass or membership credit applies across all class types. We recommend completing Foundation before joining Elevate or Sculpt.",
              },
              {
                q: "How do I cancel a booking?",
                a: "Via the Momence app, up to 24 hours before your class at no charge. Cancellations inside 24 hours forfeit the class credit.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-[#FAF7F2] px-8 py-7">
                <h3 className="text-[13px] font-medium text-[#1A0C06] mb-2">{item.q}</h3>
                <p className="text-[13px] text-[#1A0C06]/50 leading-relaxed font-light">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
