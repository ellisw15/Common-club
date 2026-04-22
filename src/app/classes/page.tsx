import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Classes | The Common",
  description:
    "Explore reformer Pilates classes at The Common — Foundation, Elevate, Sculpt, Barre, and Prenatal. Stoneygate, Leicester.",
};

const classes = [
  {
    name: "Foundation",
    tag: "All Levels",
    tagline: "The perfect place to begin.",
    description:
      "New to reformer Pilates? Foundation is your starting point. Led by expert instructors who prioritise technique above all else, each session builds full-body awareness with a focus on core, glutes, thighs, chest and back. Expect thoughtful coaching, a welcoming atmosphere and a workout that leaves you standing taller.",
    who: "Absolute beginners and those returning after a break",
    duration: "50 min",
    intensity: "Low–Medium",
    bgClass: "bg-[#E8E0D4]",
    light: false,
  },
  {
    name: "Elevate",
    tag: "Intermediate",
    tagline: "Our signature experience.",
    description:
      "Elevate bridges the gap between foundational practice and advanced training. Dynamic, controlled sequences that build on the principles of Foundation — enhancing your coordination, flexibility and stamina while deepening your understanding of reformer Pilates. This is where the transformation happens.",
    who: "Those who have completed Foundation or have prior Pilates experience",
    duration: "50 min",
    intensity: "Medium–High",
    bgClass: "bg-[#2D3B2E]",
    light: true,
  },
  {
    name: "Sculpt",
    tag: "Advanced",
    tagline: "Push your limits.",
    description:
      "Sculpt is our most demanding class. Built for experienced practitioners who crave complexity — intricate sequences that test your strength, endurance and precision simultaneously. Not recommended for beginners. Come prepared to be challenged.",
    who: "Experienced reformer Pilates practitioners",
    duration: "50 min",
    intensity: "High",
    bgClass: "bg-[#1A1814]",
    light: true,
  },
  {
    name: "Barre",
    tag: "All Levels",
    tagline: "Elegance meets endurance.",
    description:
      "Ballet-inspired movement blended with Pilates precision. Using the barre for support, Barre works through low-impact, isometric contractions that elongate, tone and restore. Accessible to all levels — you don't need a dance background, just a willingness to move with intention.",
    who: "All levels — great alongside reformer classes",
    duration: "45 min",
    intensity: "Low–Medium",
    bgClass: "bg-[#C4A882]",
    light: false,
  },
  {
    name: "Prenatal",
    tag: "Specialist",
    tagline: "Movement made for motherhood.",
    description:
      "Designed in consultation with pre and postnatal specialists, our Prenatal class supports the changing needs of the expectant body throughout all trimesters. Safe, effective and deeply nourishing — with particular attention to pelvic floor health, posture and breathwork. Instructors certified in pre and postnatal movement.",
    who: "Expectant mothers at any trimester. Always consult your midwife first.",
    duration: "45 min",
    intensity: "Gentle",
    bgClass: "bg-[#F0EDE8]",
    light: false,
  },
];

const intensityColor: Record<string, string> = {
  "Low–Medium": "bg-[#C4A882]/20 text-[#7C6548]",
  "Medium–High": "bg-[#2D3B2E]/20 text-[#2D3B2E]",
  High: "bg-[#1A1814]/15 text-[#1A1814]",
  "Low": "bg-[#C4A882]/15 text-[#7C6548]",
  Gentle: "bg-[#E8E0D4] text-[#7C6548]",
};

export default function ClassesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 lg:px-10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#7C6548] font-medium mb-4">
            What We Offer
          </p>
          <h1
            className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] text-[#1A1814]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our classes
          </h1>
          <p className="mt-4 text-base text-[#1A1814]/55 max-w-xl font-light leading-relaxed">
            Five carefully crafted reformer and movement classes, each with a
            distinct purpose. Find your level, then evolve.
          </p>
        </div>
      </section>

      {/* Class list */}
      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          {classes.map((cls) => {
            const tc = cls.light ? "text-[#FAF7F2]" : "text-[#1A1814]";
            const sc = cls.light ? "text-[#FAF7F2]/60" : "text-[#1A1814]/55";
            const tagC = cls.light ? "text-[#C4A882]" : "text-[#7C6548]";
            const borC = cls.light ? "border-[#FAF7F2]/15" : "border-[#1A1814]/10";
            const badgeBg = cls.light
              ? "bg-[#FAF7F2]/10 text-[#FAF7F2]/70"
              : intensityColor[cls.intensity] ?? "bg-[#E8E0D4] text-[#7C6548]";

            return (
              <div key={cls.name} className={`${cls.bgClass} p-10 lg:p-14`}>
                <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2">
                    <span className={`text-[10px] tracking-[0.35em] uppercase font-medium ${tagC}`}>
                      {cls.tag}
                    </span>
                    <h2
                      className={`mt-1 text-[clamp(2rem,4vw,3.5rem)] font-light leading-none ${tc}`}
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {cls.name}
                    </h2>
                    <p className={`mt-1 text-base italic font-light ${tagC}`}>{cls.tagline}</p>
                    <p className={`mt-6 text-sm leading-relaxed font-light ${sc}`}>
                      {cls.description}
                    </p>
                    <div className={`mt-6 pt-6 border-t ${borC} flex items-start gap-2`}>
                      <Users size={13} className={`mt-0.5 shrink-0 ${sc}`} />
                      <p className={`text-xs leading-relaxed font-light ${sc}`}>{cls.who}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-6">
                    <div className="flex flex-col gap-3">
                      <div className={`flex items-center gap-2 text-xs ${sc}`}>
                        <Clock size={13} />
                        <span>{cls.duration}</span>
                      </div>
                      <div>
                        <span
                          className={`inline-block px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-medium rounded-none ${badgeBg}`}
                        >
                          {cls.intensity} intensity
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/schedule"
                      className={`inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium transition-colors group ${
                        cls.light
                          ? "text-[#C4A882] hover:text-[#FAF7F2]"
                          : "text-[#2D3B2E] hover:text-[#7C6548]"
                      }`}
                    >
                      Book This Class
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-10 bg-[#F0EDE8]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-[clamp(1.8rem,3vw,2.5rem)] font-light text-[#1A1814] mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Common questions
          </h2>
          <div className="flex flex-col gap-px bg-[#E8E0D4]">
            {[
              {
                q: "What should I wear?",
                a: "Comfortable, form-fitting clothes that allow you to move freely. Grip socks are required and can be purchased at reception if needed.",
              },
              {
                q: "I'm completely new — where do I start?",
                a: "Foundation is the ideal first class. Our instructors will guide you through everything from the reformer setup to your first movement sequence.",
              },
              {
                q: "Can I switch between class types?",
                a: "Absolutely. Your class pass or membership can be used across any class type. We recommend progressing from Foundation before joining Elevate or Sculpt.",
              },
              {
                q: "How do I cancel a booking?",
                a: "You can cancel via Momence up to 24 hours before your class at no charge. Cancellations inside 24 hours will forfeit the class credit.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-[#FAF7F2] p-7">
                <h3 className="text-sm font-medium text-[#1A1814] mb-2">{item.q}</h3>
                <p className="text-sm text-[#1A1814]/55 leading-relaxed font-light">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
