import type { ReactNode } from "react";
import KlinkerRule from "@/components/KlinkerRule";

export default function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-green-deep">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">{title}</h2>
      <KlinkerRule count={9} align="start" className="mt-4" />
      {children ? <div className="mt-4 text-[18px] leading-relaxed">{children}</div> : null}
    </div>
  );
}
