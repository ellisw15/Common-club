import Link from "next/link";
import { Clock } from "lucide-react";

interface ClassCardProps {
  name: string;
  tag: string;
  description: string;
  duration: string;
  bgClass: string;
  light?: boolean;
}

export function ClassCard({ name, tag, description, duration, bgClass, light }: ClassCardProps) {
  const textColor = light ? "text-[#FAF7F2]" : "text-[#1A1814]";
  const subColor = light ? "text-[#FAF7F2]/60" : "text-[#1A1814]/55";
  const tagColor = light ? "text-[#C4A882]" : "text-[#7C6548]";
  const borderColor = light ? "border-[#FAF7F2]/20" : "border-[#1A1814]/15";
  const linkColor = light
    ? "text-[#FAF7F2]/50 hover:text-[#C4A882]"
    : "text-[#1A1814]/40 hover:text-[#2D3B2E]";

  return (
    <div className={`${bgClass} p-8 lg:p-10 flex flex-col gap-5`}>
      <div>
        <span className={`text-[10px] tracking-[0.35em] uppercase font-medium ${tagColor}`}>
          {tag}
        </span>
        <h3
          className={`mt-2 text-3xl font-light leading-none ${textColor}`}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {name}
        </h3>
      </div>
      <p className={`text-sm leading-relaxed font-light ${subColor} flex-1`}>{description}</p>
      <div className={`flex items-center justify-between pt-4 border-t ${borderColor}`}>
        <span className={`flex items-center gap-1.5 text-xs ${subColor}`}>
          <Clock size={12} />
          {duration}
        </span>
        <Link
          href="/schedule"
          className={`text-xs tracking-[0.15em] uppercase font-medium ${linkColor} transition-colors`}
        >
          Book →
        </Link>
      </div>
    </div>
  );
}
