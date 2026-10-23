import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import OfferteLink from "@/components/OfferteLink";
import PhotoStack from "@/components/PhotoStack";
import Aanvraag from "@/components/Aanvraag";
import Schaal from "@/components/Schaal";
import PullQuote from "@/components/PullQuote";
import { fotosVan } from "@/lib/photos";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Bestrating",
  description:
    "Bestratingen door Hoveniersbedrijf G. Dijkhof: paden, terrassen, opritten en bedrijventerreinen, met een machinepark in eigen beheer.",
};

export default function BestratingPage() {
  return (
    <>
      <PageHero
        section="intro"
        eyebrow="Bestratingen"
        title="Van een klein terrasje tot uw hele bedrijventerrein"
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
          Verharding neemt een steeds belangrijkere plaats in de tuin in. Er zijn tal van mooie materialen die een
          prachtig resultaat opleveren. Wij adviseren u graag hoe u het mooiste resultaat kunt verkrijgen.
        </p>
      </PageHero>

      <section data-section="machinepark" className="bg-forest py-16 text-sand">
        <div className="wrap">
          <h2 className="max-w-3xl font-display text-3xl font-extrabold text-white">Machinepark in eigen beheer</h2>
          <p className="mt-4 max-w-3xl text-[18px] leading-relaxed">
            Wilt u een mooi pad, een klein of groot terras, of zelfs uw hele bedrijventerrein bestraten? Ziet u tegen
            het werk op? Dan kunnen wij u helpen. Wij nemen u graag het werk uit handen en beschikken over een volledig
            machinepark in eigen beheer om alle soorten bestrating aan te leggen.
          </p>
          <Schaal />
        </div>
      </section>

      <PullQuote quote="U herkent ons aan het zeer strakke werk." source="Van een klein terrasje tot een groot bedrijventerrein" />

      <section data-section="fotos" className="bg-sand-soft py-16">
        <div className="wrap">
          <h2 className="font-display text-3xl font-extrabold text-navy">Bestrating</h2>
          <p className="mt-3 mb-8 max-w-3xl">
            Klinkers, tegels en grind. Wij adviseren u graag hoe u het mooiste resultaat verkrijgt.
          </p>
          <PhotoStack fotos={fotosVan("bestrating")} label="Foto's van bestratingen" />
        </div>
      </section>

      <Aanvraag
        title="Kennismaken over bestrating"
        intro="Wij komen bij u langs, meten op en sturen een vrijblijvende offerte, eventueel met een schetsontwerp."
      />
    </>
  );
}
