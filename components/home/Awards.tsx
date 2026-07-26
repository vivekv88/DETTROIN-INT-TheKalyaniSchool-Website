import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { awards } from "@/data/site";

export default function Awards() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <SectionHeading
          eyebrow="Recognition"
          title="Our Awards"
          description="A track record of national and international recognition for academics, talent, sustainability, and school culture."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <Card key={award.title} title={award.title} description={award.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}
