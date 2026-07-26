import { ReactNode } from "react";

export default function Card({
  title,
  description,
  icon,
  href,
  className = "",
}: {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
}) {
  const content = (
    <div
      className={`group h-full rounded-2xl border border-navy/10 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${className}`}
    >
      {icon && (
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-sage/10 text-sage">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">{description}</p>
      {href && (
        <span className="mt-4 inline-block text-sm font-semibold text-gold-deep group-hover:underline">
          Read more &rarr;
        </span>
      )}
    </div>
  );

  return content;
}
