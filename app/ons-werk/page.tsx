import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PhotoStack from "@/components/PhotoStack";
import OfferteLink from "@/components/OfferteLink";
import PullQuote from "@/components/PullQuote";
import { fotosVan } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Ons werk",
  description: "Foto's van aanleg, bestrating, onderhoud en tuinen van Hoveniersbedrijf G. Dijkhof in Klarenbeek.",
};

const groepen = [
  {
    id: "aanleg" as const,
    titel: "Aanleg",
    tekst: "Bestrating, een vijver, nieuwe borders, nieuwe beplanting of een compleet aangelegde tuin. In de afgelopen jaren hebben wij heel veel verschillende tuinen aangelegd.",
  },
  {
    id: "bestrating" as const,
    titel: "Bestrating",
    tekst: "Van een klein terrasje tot een groot bedrijventerrein. U herkent het werk aan de strakke lijnen: paden, terrassen en opritten in klinker, tegel of grind.",
  },
  {
    id: "onderhoud" as const,
    titel: "Onderhoud",
    tekst: "Hagen, gazons, borders en snoei. Van een eenmalige beurt tot het wekelijks bijhouden, voor particuliere en zakelijke tuinen.",
  },
  {
    id: "tuinen" as const,
    titel: "Tuinen",
    tekst: "Tuinen die samen met u op de tekentafel tot stand komen, en daarna in onderhoud op z'n mooist groeien en bloeien.",
  },
];

export default function OnsWerkPage() {
  return (
    <>
      <PageHero section="intro" eyebrow="Ons werk" title="Alleen ons eigen werk, per soort">
        <p>
          Aanleg, bestrating, onderhoud en tuinen. De foto&apos;s tonen ons eigen werk, per soort. Van eerste offerte
          tot laatste hand staan wij in voor de kwaliteit.
        </p>
      </PageHero>
      {groepen.map((groep, index) => (
        <section
          key={groep.id}
          data-section={groep.id}
          className={index % 2 === 0 ? "border-t border-stone/30 py-16" : "border-t border-stone/30 bg-sand-soft py-16"}
        >
          <div className="wrap">
            <p className="font-display text-sm font-extrabold tracking-[0.16em] text-green-deep">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-navy">{groep.titel}</h2>
            <p className="mt-3 mb-8 max-w-3xl text-[18px]">{groep.tekst}</p>
            <PhotoStack fotos={fotosVan(groep.id)} label={`Foto's: ${groep.titel}`} />
          </div>
        </section>
      ))}
      <PullQuote
        quote="Zo aangelegd dat wij zelfs de kleinste details niet uit het oog verliezen."
        source="En in onderhoud dat uw tuin op z'n mooist groeit en bloeit."
      />
      <section data-section="afsluiting" className="bg-navy py-14">
        <div className="wrap">
          <h2 className="max-w-2xl font-display text-3xl font-extrabold text-white">
            U loopt al een tijd rond met plannen voor een nieuwe tuin?
          </h2>
          <p className="mt-3 max-w-2xl text-sand">Wij komen graag bij u langs om de mogelijkheden te bezien.</p>
          <OfferteLink className="btn btn-sand mt-6">Vrijblijvend kennismaken</OfferteLink>
        </div>
      </section>
    </>
  );
}
