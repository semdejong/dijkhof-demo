import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import OfferteLink from "@/components/OfferteLink";
import PhotoStrip from "@/components/PhotoStrip";
import Aanvraag from "@/components/Aanvraag";
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

      <section data-section="machinepark" className="py-16">
        <div className="wrap max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold text-navy">Machinepark in eigen beheer</h2>
          <p className="mt-4 text-[18px] leading-relaxed">
            Wilt u een mooi pad, een klein of groot terras, of zelfs uw hele bedrijventerrein bestraten? Ziet u tegen
            het werk op? Dan kunnen wij u helpen. Wij nemen u graag het werk uit handen en beschikken over een volledig
            machinepark in eigen beheer om alle soorten bestrating aan te leggen.
          </p>
          <p className="mt-3 text-[18px] leading-relaxed">
            U herkent ons aan het zeer strakke werk, of het nu een terrasje is of een groot terrein.
          </p>
        </div>
      </section>

      <section data-section="fotos" className="bg-sand-soft py-16">
        <div className="wrap">
          <h2 className="mb-6 font-display text-3xl font-extrabold text-navy">Bestrating</h2>
          <PhotoStrip fotos={fotosVan("bestrating")} label="Foto's van bestratingen" />
        </div>
      </section>

      <Aanvraag
        title="Kennismaken over bestrating"
        intro="Wij komen bij u langs, meten op en sturen een vrijblijvende offerte, eventueel met een schetsontwerp."
      />
    </>
  );
}
