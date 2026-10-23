/** Rij kleine klinkers, als knipoog naar de spiraal in het logo. */
export default function KlinkerRule({
  count = 14,
  align = "center",
  className = "",
}: {
  count?: number;
  align?: "center" | "start";
  className?: string;
}) {
  const placement = align === "start" ? "justify-start" : "justify-center";
  return (
    <div className={`flex items-center gap-1.5 ${placement} ${className}`} aria-hidden>
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="inline-block h-2.5 rounded-[2px] bg-stone"
          style={{
            width: i % 3 === 0 ? 18 : 14,
            transform: `rotate(${i % 2 === 0 ? -18 : 18}deg)`,
          }}
        />
      ))}
    </div>
  );
}
