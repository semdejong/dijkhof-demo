export default function PullQuote({
  quote,
  section = "citaat",
  source,
}: {
  quote: string;
  section?: string;
  source?: string;
}) {
  return (
    <section data-section={section} className="relative overflow-hidden bg-navy py-16 text-sand">
      <div className="pointer-events-none absolute -left-6 top-6 font-display text-[8rem] leading-none text-white/10" aria-hidden>
        “
      </div>
      <blockquote className="wrap relative max-w-4xl">
        <p className="font-display text-3xl font-extrabold leading-snug text-white sm:text-4xl">{quote}</p>
        {source ? <footer className="mt-5 text-[16px] text-sand">{source}</footer> : null}
      </blockquote>
    </section>
  );
}
