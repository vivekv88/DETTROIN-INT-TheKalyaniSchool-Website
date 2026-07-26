import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { quickHighlights } from "@/data/site";

export default function QuickHighlights() {
  return (
    <section className="bg-navy py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quickHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-cream/10 bg-navy-light/40 p-6"
            >
              <h3 className="font-display text-lg text-cream">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
