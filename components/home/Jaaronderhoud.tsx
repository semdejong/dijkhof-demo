import { seizoenen } from "@/lib/copy";
import OfferteLink from "@/components/OfferteLink";
import Link from "next/link";

const jaar = seizoenen[2];
const overige = seizoenen.filter((item) => item !== jaar);

export default function Jaaronderhoud() {
  return (
    <section data-section="jaaronderhoud" className="py-16">
      <div className="wrap">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-deep">Onderhoud</p>
        <h2 className="mt-2 max-w-3xl font-display text-3xl font-extrabold text-navy sm:text-4xl">
          Het hele jaar een slag voor
        </h2>
        <p className="mt-4 max-w-3xl text-[18px] leading-relaxed">
          Hagen knippen, het gazon maaien, de tuin snoeien: alles is mogelijk, van een eenmalige beurt tot wekelijks
          bijhouden. Jaaronderhoud is een van onze specialiteiten.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-5">
          <article className="rounded-3xl bg-forest p-6 text-sand lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-sand">Specialiteit</p>
            <h3 className="mt-2 font-display text-3xl font-extrabold text-white">{jaar.titel}</h3>
            <p className="mt-4 text-[18px] leading-relaxed">{jaar.tekst}</p>
            <p className="mt-3 text-[18px] leading-relaxed">
              Omdat we de tuin steeds een slag voor zijn, zult u zich verbazen over de lage prijs. Voor zakelijke en
              particuliere tuinen.
            </p>
            <OfferteLink className="btn btn-sand mt-6">Jaaronderhoud bespreken</OfferteLink>
          </article>
          <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-3 lg:grid-cols-1">
            {overige.map((item) => (
              <li key={item.titel} className="rounded-2xl bg-sand-soft p-5">
                <h3 className="font-display text-xl font-extrabold text-navy">{item.titel}</h3>
                <p className="mt-2 text-[17px] leading-relaxed">{item.tekst}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-[18px]">
          Voor al uw wensen geven wij graag een advies op maat.{" "}
          <Link href="/tuinonderhoud" className="font-bold text-green-deep underline">
            Meer over tuinonderhoud
          </Link>
        </p>
      </div>
    </section>
  );
}
