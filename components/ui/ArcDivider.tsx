export default function ArcDivider({
  fill = "#FAF6EF",
  flip = false,
}: {
  fill?: string;
  flip?: boolean;
}) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="h-16 w-full md:h-20"
        aria-hidden="true"
      >
        <path
          d="M0,0 C300,90 900,90 1200,0 L1200,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
