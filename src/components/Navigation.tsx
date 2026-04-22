"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Practice", href: "/classes" },
  { label: "Book",     href: "/schedule" },
  { label: "Membership", href: "/pricing" },
  { label: "About",    href: "/about" },
  { label: "Visit",    href: "/contact" },
];

export function Navigation() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On interior pages the nav is always on a light bg
  const solidBg = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solidBg
          ? "bg-[#FAF7F2]/96 backdrop-blur-sm border-b border-[#E8D5CC]/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} className="flex flex-col leading-none group">
          <span
            className={`text-[1.35rem] font-light tracking-[0.22em] uppercase transition-colors duration-300 ${
              solidBg ? "text-[#1A0C06]" : "text-[#FAF7F2]"
            }`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Common
          </span>
          <span
            className={`text-[9px] tracking-[0.38em] uppercase font-light transition-colors duration-300 ${
              solidBg ? "text-[#AE3717]" : "text-[#AE3717]/80"
            }`}
          >
            Stoneygate · Leicester
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[10.5px] tracking-[0.22em] uppercase font-medium transition-colors duration-200 ${
                  solidBg
                    ? pathname === link.href
                      ? "text-[#1A0C06]"
                      : "text-[#1A0C06]/45 hover:text-[#1A0C06]"
                    : pathname === link.href
                      ? "text-[#FAF7F2]"
                      : "text-[#FAF7F2]/50 hover:text-[#FAF7F2]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/schedule"
            className={`inline-block px-6 py-2 text-[10px] tracking-[0.22em] uppercase font-medium border transition-all duration-200 ${
              solidBg
                ? "border-[#1E0E07] text-[#1E0E07] hover:bg-[#1E0E07] hover:text-[#FAF7F2]"
                : "border-[#FAF7F2]/60 text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#1A0C06]"
            }`}
          >
            Reserve
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${solidBg ? "text-[#1A0C06]" : "text-[#FAF7F2]"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#FAF7F2] border-t border-[#E8D5CC]/60`}
      >
        <div className="px-6 py-8 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[11px] tracking-[0.25em] uppercase font-medium text-[#1A0C06]/50 hover:text-[#1A0C06] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 pt-5 border-t border-[#E8D5CC]">
            <Link
              href="/schedule"
              onClick={() => setOpen(false)}
              className="inline-block w-full text-center px-6 py-3 border border-[#1E0E07] text-[#1E0E07] text-[10px] tracking-[0.22em] uppercase font-medium hover:bg-[#1E0E07] hover:text-[#FAF7F2] transition-colors"
            >
              Reserve Your Place
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
