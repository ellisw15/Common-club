"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Classes", href: "/classes" },
  { label: "Schedule", href: "/schedule" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span
            className="text-2xl font-light tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Common
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#7C6548] font-light">
            Reformer Pilates · Leicester
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs tracking-[0.2em] uppercase font-medium text-[#1A1814]/70 hover:text-[#1A1814] transition-colors duration-200"
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
            className="inline-block px-6 py-2.5 bg-[#2D3B2E] text-[#FAF7F2] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#1A1814] transition-colors duration-200"
          >
            Book a Class
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-[#1A1814]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-[#FAF7F2] border-t border-[#E8E0D4] px-6 pb-8 pt-4">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.2em] uppercase font-medium text-[#1A1814]/70 hover:text-[#1A1814] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/schedule"
            onClick={() => setOpen(false)}
            className="mt-6 inline-block w-full text-center px-6 py-3 bg-[#2D3B2E] text-[#FAF7F2] text-xs tracking-[0.2em] uppercase font-medium"
          >
            Book a Class
          </Link>
        </div>
      )}
    </header>
  );
}
