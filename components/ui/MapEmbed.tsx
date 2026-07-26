import { siteConfig } from "@/data/site";

export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
      <iframe
        src={siteConfig.mapEmbed}
        width="100%"
        height="360"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${siteConfig.name} location map`}
      />
    </div>
  );
}
