import KennismakenForm from "@/components/KennismakenForm";

export default function Aanvraag({
  title = "Vrijblijvend kennismaken aan huis",
  intro = "Na een afspraak komen wij bij u langs om de mogelijkheden te bezien en uw wensen te bespreken.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section data-section="aanvraag" className="bg-sand-soft py-16">
      <div className="wrap grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">{title}</h2>
          <p className="mt-4 text-[18px] leading-relaxed">{intro}</p>
          <p className="mt-3 text-[18px] leading-relaxed">
            De vrijblijvende offerte, eventueel met een schetsontwerp, ontvangt u binnen een aantal weken.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-5 ring-1 ring-sand sm:p-7">
          <KennismakenForm />
        </div>
      </div>
    </section>
  );
}
