import Hero from "@/components/home/Hero";
import Awards from "@/components/home/Awards";
import QuickHighlights from "@/components/home/QuickHighlights";
import Activities from "@/components/home/Activities";
import Newsletter from "@/components/home/Newsletter";
import ArcDivider from "@/components/ui/ArcDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <ArcDivider fill="#1B2A4A" />
      <QuickHighlights />
      <ArcDivider fill="#FAF6EF" flip />
      <Activities />
      <Newsletter />
    </>
  );
}
