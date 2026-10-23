import type { ReactNode } from "react";
import KlinkerRule from "@/components/KlinkerRule";

export default function PageHero({
  section,
  eyebrow,
  title,
  children,
  actions,
}: {
  section: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section data-section={section} className="visgraat border-b border-stone/30">
      <div className="wrap py-14 sm:py-20">
        {eyebrow ? (
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-green-deep">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-navy sm:text-5xl">{title}</h1>
        <KlinkerRule count={10} align="start" className="mt-5" />
        <div className="mt-5 max-w-3xl text-[18px] leading-relaxed">{children}</div>
        {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
