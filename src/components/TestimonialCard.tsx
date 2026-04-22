interface TestimonialCardProps {
  quote: string;
  name: string;
  detail: string;
}

export function TestimonialCard({ quote, name, detail }: TestimonialCardProps) {
  return (
    <div className="bg-[#F0EDE8] p-8 flex flex-col gap-6">
      <span
        className="text-5xl leading-none text-[#C4A882] font-light select-none"
        style={{ fontFamily: "var(--font-heading)" }}
        aria-hidden
      >
        &ldquo;
      </span>
      <p className="text-base text-[#1A1814]/70 leading-relaxed font-light -mt-4">{quote}</p>
      <div className="mt-auto pt-4 border-t border-[#E8E0D4]">
        <p className="text-sm font-medium text-[#1A1814]">{name}</p>
        <p className="text-xs text-[#7C6548] mt-0.5">{detail}</p>
      </div>
    </div>
  );
}
