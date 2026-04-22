import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  Studio: [
    { label: "Classes", href: "/classes" },
    { label: "Schedule", href: "/schedule" },
    { label: "Pricing", href: "/pricing" },
    { label: "Club Rules", href: "/club-rules" },
  ],
  Community: [
    { label: "About Us", href: "/about" },
    { label: "Cafe Menu", href: "/menu" },
    { label: "Contact", href: "/contact" },
    { label: "Book Intro Class", href: "/schedule" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#1A1814] text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <p
            className="text-2xl font-light tracking-[0.25em] uppercase mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Common
          </p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C4A882] mb-6 font-light">
            Reformer Pilates · Leicester
          </p>
          <p className="text-sm text-[#FAF7F2]/60 leading-relaxed max-w-sm">
            A reformer Pilates studio and community hub in the heart of
            Stoneygate. Move well, connect deeply, and find your community.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.instagram.com/thecommon.club/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#FAF7F2]/50 hover:text-[#C4A882] transition-colors flex items-center gap-1.5 text-xs tracking-wider"
            >
              <ExternalLink size={16} />
              @thecommon.club
            </a>
            <a
              href="mailto:hello@thecommonclub.co.uk"
              aria-label="Email"
              className="text-[#FAF7F2]/50 hover:text-[#C4A882] transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C4A882] font-medium mb-5">
              {group}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FAF7F2]/60 hover:text-[#FAF7F2] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact bar */}
      <div className="border-t border-[#FAF7F2]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center text-xs text-[#FAF7F2]/40">
          <span className="flex items-center gap-2">
            <MapPin size={12} />
            21 Allandale Road, Stoneygate, Leicester, LE2 2DA
          </span>
          <a
            href="tel:+441163000000"
            className="flex items-center gap-2 hover:text-[#FAF7F2]/70 transition-colors"
          >
            <Phone size={12} />
            Contact us
          </a>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-[#FAF7F2]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row justify-between gap-2 text-[11px] text-[#FAF7F2]/25">
          <span>© {new Date().getFullYear()} The Common Club Ltd. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#FAF7F2]/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/club-rules" className="hover:text-[#FAF7F2]/50 transition-colors">
              Club Rules
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
