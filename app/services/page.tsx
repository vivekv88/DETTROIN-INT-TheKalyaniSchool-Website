import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ArcDivider from "@/components/ui/ArcDivider";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Academics & Services | The Kalyani School",
  description:
    "Explore The Kalyani School's academic programs from Pre-Primary through Sr. Secondary school.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <Container>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Academics
          </p>
          <h1 className="max-w-2xl text-4xl font-medium leading-tight text-cream md:text-5xl">
            A learning journey built for every stage of childhood
          </h1>
        </Container>
      </section>
      <ArcDivider fill="#FAF6EF" />

      <section className="bg-cream py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Programs"
            title="Curriculum designed around the child, not the syllabus"
            description="From Pre-Primary to Sr. Secondary, each stage builds deliberately on the last."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
