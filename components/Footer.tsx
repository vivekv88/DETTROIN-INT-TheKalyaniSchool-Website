import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-cream/80">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-cream">
            {siteConfig.name}
          </h3>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gold">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed">{siteConfig.address}</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream">
            Quicklinks
          </h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream">
            Connect With Us
          </h4>
          <ul className="space-y-2 text-sm">
            {siteConfig.phone.map((p) => (
              <li key={p}>{p}</li>
            ))}
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream">
            Visit Us
          </h4>
          <p className="text-sm leading-relaxed">
            Manjari (Budruk), Near Hadapsar, Pune 412307.
          </p>
        </div>
      </Container>

      <div className="border-t border-cream/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-cream/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
