import Link from "next/link";
import { MapPin, Mail, ExternalLink } from "lucide-react";

const footerLinks = {
  Studio: [
    { label: "The Practice",  href: "/classes" },
    { label: "Book a Class",  href: "/schedule" },
    { label: "Membership",    href: "/pricing" },
    { label: "Studio Rules",  href: "/club-rules" },
  ],
  Company: [
    { label: "About",    href: "/about" },
    { label: "Visit",    href: "/contact" },
    { label: "Privacy",  href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#181512] text-[#F9F6F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="lg:col-span-2">
          <p
            className="text-[1.35rem] font-light tracking-[0.22em] uppercase mb-0.5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Common
          </p>
          <p className="text-[9px] tracking-[0.38em] uppercase text-[#B89A78] mb-7 font-light">
            Reformer Pilates · Leicester
          </p>
          <p className="text-[13px] text-[#F9F6F1]/45 leading-relaxed max-w-xs font-light">
            An intimate reformer Pilates studio and community in the heart of Stoneygate.
            Move well. Connect deeply.
          </p>
          <a
            href="https://www.instagram.com/thecommon.club/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-[#F9F6F1]/35 hover:text-[#B89A78] transition-colors"
          >
            <ExternalLink size={11} />
            @thecommon.club
          </a>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h4 className="text-[9px] tracking-[0.38em] uppercase text-[#B89A78] font-medium mb-5">
              {group}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#F9F6F1]/40 hover:text-[#F9F6F1]/75 transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact strip */}
      <div className="border-t border-[#F9F6F1]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row gap-4 sm:gap-10 items-start sm:items-center text-[11px] text-[#F9F6F1]/25 font-light">
          <span className="flex items-center gap-2">
            <MapPin size={11} className="shrink-0" />
            21 Allandale Road, Stoneygate, Leicester LE2 2DA
          </span>
          <a
            href="mailto:hello@thecommonclub.co.uk"
            className="flex items-center gap-2 hover:text-[#F9F6F1]/50 transition-colors"
          >
            <Mail size={11} className="shrink-0" />
            hello@thecommonclub.co.uk
          </a>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-[#F9F6F1]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row justify-between gap-2 text-[10px] text-[#F9F6F1]/18 font-light">
          <span>© {new Date().getFullYear()} The Common Club Ltd. All rights reserved.</span>
          <Link href="/privacy" className="hover:text-[#F9F6F1]/40 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
