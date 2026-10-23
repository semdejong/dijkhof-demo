import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import OfferteLink from "@/components/OfferteLink";
import Aanvraag from "@/components/Aanvraag";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Paardenfaciliteiten",
  description:
    "Aanleg van paardenbakken, omheiningen en stapmolens door Hoveniersbedrijf G. Dijkhof in Klarenbeek en de Stedendriehoek.",
};

const onderdelen = [
  { titel: "Paardenbakken", tekst: "Een bak die past bij het gebruik, meegedacht vanuit de paardensport." },
  { titel: "Omheiningen", tekst: "Omheiningen als onderdeel van de faciliteit rond de bak en het terrein." },
  { titel: "Stapmolens", tekst: "Een stapmolen, meegenomen in hetzelfde plan." },
];

export default function PaardenPage() {
  return (
    <>
      <PageHero
        section="intro"
        eyebrow="Paardensport"
        title="Aanleg van paardenfaciliteiten"
        actions={
          <>
            <OfferteLink>Vrijblijvend kennismaken</OfferteLink>
            <a className="btn btn-line" href={content.contact.mobileHref}>
              Bel {content.contact.mobile}
            </a>
          </>
        }
      >
        <p>
          Doordat we zelf al jarenlang actief zijn in en om de paardensport, hebben we gemerkt wat de wensen zijn. Wij
          denken met u mee over de aanleg van paardenbakken, omheiningen en stapmolens.
        </p>
      </PageHero>

      <section data-section="onderdelen" className="py-16">
        <div className="wrap grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-navy">Waar wij in meedenken</h2>
            <ul className="mt-6 grid gap-4">
              {onderdelen.map((item) => (
                <li key={item.titel} className="rounded-2xl bg-sand-soft p-5">
                  <h3 className="font-display text-xl font-extrabold text-navy">{item.titel}</h3>
                  <p className="mt-2">{item.tekst}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[18px]">
              Voor verharding van een bedrijventerrein kijkt u bij{" "}
              <Link href="/bestrating" className="font-bold text-green-deep underline">
                bestratingen
              </Link>
              . Zakelijk tuinonderhoud staat bij{" "}
              <Link href="/tuinonderhoud" className="font-bold text-green-deep underline">
                onderhoud
              </Link>
              .
            </p>
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

      <Aanvraag
        title="Kennismaken over een paardenfaciliteit"
        intro="Wij komen bij u langs om de mogelijkheden te bezien en uw wensen te bespreken."
      />
    </>
  );
}
