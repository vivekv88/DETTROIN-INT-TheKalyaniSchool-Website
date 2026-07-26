import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ArcDivider from "@/components/ui/ArcDivider";
import { aboutSections } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us | The Kalyani School",
  description:
    "Learn about The Kalyani School's legacy, leadership, faculty, and facilities in Pune.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <Container>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            About Us
          </p>
          <h1 className="max-w-2xl text-4xl font-medium leading-tight text-cream md:text-5xl">
            A harmonious, stimulating environment for every future-ready citizen
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75">
            To provide a harmonious, stimulating environment which inspires
            all to strive for excellence and emerge as responsible,
            future-ready citizens.
          </p>
        </Container>
      </section>
      <ArcDivider fill="#FAF6EF" />

      <section className="bg-cream py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Story"
            title="Everything you need to know about TKS"
            description="From our founding legacy to the people who lead and teach here every day."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aboutSections.map((section) => (
              <Card
                key={section.title}
                title={section.title}
                description={section.description}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
