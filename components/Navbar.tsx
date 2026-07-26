"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/data/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/90">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-semibold text-cream">
            {siteConfig.name}
          </span>
          <span className="text-xs tracking-[0.25em] uppercase text-gold">
            {siteConfig.tagline}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-gold" : "text-cream/85 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href="/contact" variant="primary">
            Admissions Enquiry
          </Button>
        </nav>

        <button
          className="md:hidden text-cream"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <nav className="md:hidden border-t border-cream/10 bg-navy-deep">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-medium ${
                  pathname === link.href
                    ? "bg-cream/5 text-gold"
                    : "text-cream/85 hover:bg-cream/5 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="mt-2 justify-center">
              Admissions Enquiry
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
