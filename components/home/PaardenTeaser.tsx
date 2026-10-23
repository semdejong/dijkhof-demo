import OfferteLink from "@/components/OfferteLink";

export default function PaardenTeaser() {
  return (
    <section data-section="paardenfaciliteiten" className="py-16">
      <div className="wrap grid items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-deep">Paardensport</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-navy sm:text-4xl">Aanleg van paardenfaciliteiten</h2>
          <p className="mt-4 text-[18px] leading-relaxed">
            Doordat we zelf al jarenlang actief zijn in en om de paardensport, weten wij wat de wensen zijn. Wij denken
            mee over paardenbakken, omheiningen en stapmolens.
          </p>
          <OfferteLink className="btn btn-primary mt-6">Vrijblijvend kennismaken</OfferteLink>
        </div>
        <figure className="overflow-hidden rounded-2xl bg-sand-soft ring-1 ring-sand">
          <img
            src="/paardenbak-plan.jpg"
            alt="Lijntekening in bovenaanzicht van een paardenbak met omheining en een stapmolen."
            width={1200}
            height={675}
            className="h-auto w-full"
          />
          <figcaption className="px-4 py-3 text-[16px] text-navy/80">
            Schets van een paardenbak met omheining en een stapmolen.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
