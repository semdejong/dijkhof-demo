import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import OfferteLink from "@/components/OfferteLink";
import PhotoStack from "@/components/PhotoStack";
import Aanvraag from "@/components/Aanvraag";
import PullQuote from "@/components/PullQuote";
import { seizoenen } from "@/lib/copy";
import { fotosVan } from "@/lib/photos";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Tuinonderhoud",
  description:
    "Tuinonderhoud door Hoveniersbedrijf G. Dijkhof: van een eenmalige beurt tot jaaronderhoud om de 4 à 5 weken.",
};

export default function TuinonderhoudPage() {
  return (
    <>
      <PageHero
        section="intro"
        eyebrow="Tuinonderhoud"
        title="Uw tuin bijhouden, het hele jaar"
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
          Dankzij jarenlange ervaring onderhouden wij uw tuin op een vakkundige manier. Altijd komen we tot een
          oplossing die bij uw wensen aansluit. Of het nu gaat over het knippen van hagen, het maaien van het gazon of
          het snoeien van uw tuin.
        </p>
      </PageHero>

      <section data-section="voorbeelden" className="py-16">
        <div className="wrap">
          <h2 className="font-display text-3xl font-extrabold text-navy">Enkele voorbeelden</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {seizoenen.map((item) => (
              <li key={item.titel} className="rounded-2xl bg-sand-soft p-5">
                <h3 className="font-display text-xl font-extrabold text-navy">{item.titel}</h3>
                <p className="mt-2">{item.tekst}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl bg-navy p-6 text-sand">
              <h3 className="font-display text-2xl font-extrabold text-white">Particuliere tuinen</h3>
              <p className="mt-3">
                Van een eenmalige onderhoudsbeurt tot het wekelijks bijhouden. Wij nemen u graag het werk uit handen.
              </p>
            </article>
            <article className="rounded-3xl bg-sand-soft p-6">
              <h3 className="font-display text-2xl font-extrabold text-navy">Zakelijke tuinen</h3>
              <p className="mt-3">
                Voor zakelijke tuinen verzorgen wij al jaren het onderhoud, op dezelfde vakkundige manier.
              </p>
            </article>
          </div>
          <p className="mt-8 max-w-3xl text-[18px]">
            Voor al uw wensen op het gebied van tuinonderhoud geven wij u graag een advies op maat.
          </p>
        </div>
      </section>

      <PullQuote quote="Van wintersnoei tot aan de laatste herfstbladeren." source="Jaaronderhoud, om de 4 à 5 weken" />

      <section data-section="fotos" className="bg-white py-16">
        <div className="wrap">
          <h2 className="font-display text-3xl font-extrabold text-navy">Onderhouden tuinen</h2>
          <p className="mt-3 mb-8 max-w-3xl">Gazon, hagen, borders en ons eigen wagenpark op locatie.</p>
          <PhotoStack fotos={fotosVan("onderhoud")} label="Foto's van tuinonderhoud" />
        </div>
      </section>

      <Aanvraag
        title="Advies op maat voor het onderhoud"
        intro="Bel of mail ons voor een afspraak. Wij komen graag bij u langs om te zien wat uw tuin nodig heeft."
      />
    </>
  );
}
