import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import MapEmbed from "@/components/ui/MapEmbed";
import ContactForm from "@/components/ContactForm";
import ArcDivider from "@/components/ui/ArcDivider";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us | The Kalyani School",
  description:
    "Get in touch with The Kalyani School, Pune for admissions enquiries and general information.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <Container>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Contact
          </p>
          <h1 className="max-w-2xl text-4xl font-medium leading-tight text-cream md:text-5xl">
            We&rsquo;d love to hear from you
          </h1>
        </Container>
      </section>
      <ArcDivider fill="#FAF6EF" />

      <section className="bg-cream py-20">
        <Container>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Reach out for admissions or any query"
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-navy/10 bg-white p-6">
                <h3 className="font-display text-lg text-navy">Phone</h3>
                <ul className="mt-2 space-y-1 text-sm text-ink/70">
                  {siteConfig.phone.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-white p-6">
                <h3 className="font-display text-lg text-navy">Email</h3>
                <p className="mt-2 text-sm text-ink/70">{siteConfig.email}</p>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-white p-6">
                <h3 className="font-display text-lg text-navy">Address</h3>
                <p className="mt-2 text-sm text-ink/70">{siteConfig.address}</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <MapEmbed />
          </div>
        </Container>
      </section>
    </>
  );
}
