import OfferteLink from "@/components/OfferteLink";

export default function Closing() {
  return (
    <section data-section="afsluiting" className="bg-navy py-16 text-sand">
      <div className="wrap max-w-3xl">
        <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          U loopt al een tijd rond met plannen voor een nieuwe tuin maar weet niet goed hoe en waar te beginnen?
        </h2>
        <p className="mt-4 text-[18px] leading-relaxed">
          Neem vrijblijvend contact met ons op. Wij komen graag bij u langs.
        </p>
        <OfferteLink className="btn btn-sand mt-6">Vrijblijvend kennismaken</OfferteLink>
      </div>
    </section>
  );
}
