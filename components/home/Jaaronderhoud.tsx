import { seizoenen } from "@/lib/copy";
import OfferteLink from "@/components/OfferteLink";
import KlinkerRule from "@/components/KlinkerRule";

export default function Jaaronderhoud() {
  return (
    <section data-section="jaaronderhoud" className="py-16">
      <div className="wrap">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-deep">Onderhoud</p>
        <h2 className="mt-2 max-w-3xl font-display text-3xl font-extrabold text-navy sm:text-4xl">
          Jaaronderhoud, om de 4 à 5 weken
        </h2>
        <KlinkerRule count={9} align="start" className="mt-4" />
        <p className="mt-4 max-w-3xl text-[18px] leading-relaxed">
          Jaaronderhoud is een van onze specialiteiten. Uw tuin wordt om de 4 à 5 weken onderhouden, van wintersnoei
          tot aan de laatste herfstbladeren. Omdat we de tuin steeds een slag voor zijn, zult u zich verbazen over de
          lage prijs. Voor zowel zakelijke als particuliere tuinen.
        </p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {seizoenen.map((item, index) => (
            <li key={item.titel} className="rounded-2xl bg-sand-soft p-5">
              <p className="font-display text-lg font-extrabold text-navy">
                {index + 1}. {item.titel}
              </p>
              <p className="mt-2 text-[17px] leading-relaxed">{item.tekst}</p>
            </li>
          ))}
        </ol>
        <OfferteLink className="btn btn-primary mt-8">Vrijblijvend kennismaken</OfferteLink>
      </div>
    </section>
  );
}
