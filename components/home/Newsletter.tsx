import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  return (
    <section className="bg-sage py-16">
      <Container className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h3 className="font-display text-2xl text-cream md:text-3xl">
            Newsletter, News &amp; Events
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/85">
            Stay connected to the remarkable journey of learning, growth, and
            discovery that unfolds within our vibrant walls.
          </p>
        </div>
        <Button href="/contact" variant="primary">
          Check Out Our Newsletter
        </Button>
      </Container>
    </section>
  );
}
