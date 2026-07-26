import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ArcDivider from "@/components/ui/ArcDivider";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative bg-navy">
      <Container className="grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            {siteConfig.subTagline}
          </p>
          <h1 className="text-4xl font-medium leading-[1.1] text-cream md:text-5xl">
            Welcome to {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75">
            A school that every child, parent, and teacher loves. Happiness is
            at the heart of learning here &mdash; where every child feels
            valued, every parent feels heard, and every teacher feels
            inspired.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/about" variant="primary">
              Explore More
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-2xl border border-cream/10 shadow-2xl">
          <video
            className="h-full w-full object-cover"
            src="https://www.thekalyanischool.com/web-assets/images/home-video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </Container>
      <ArcDivider fill="#FAF6EF" />
    </section>
  );
}
