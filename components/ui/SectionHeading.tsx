export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sage">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-medium leading-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-ink/70 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
