import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { activities } from "@/data/site";

export default function Activities() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <SectionHeading
          eyebrow="Life at TKS"
          title="Recent Activities"
          description="A glimpse into the celebrations, competitions, and milestones that fill our school calendar."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="flex items-center justify-between rounded-xl border border-navy/10 bg-white px-6 py-5"
            >
              <span className="font-medium text-navy">{activity.title}</span>
              <span className="text-gold-deep text-sm font-semibold">&rarr;</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
