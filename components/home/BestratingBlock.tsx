import { fotosVan } from "@/lib/photos";
import PhotoStrip from "@/components/PhotoStrip";
import OfferteLink from "@/components/OfferteLink";
import Schaal from "@/components/Schaal";

export default function BestratingBlock() {
  const fotos = fotosVan("bestrating").slice(0, 3);
  return (
    <section data-section="bestrating" className="bg-forest py-16 text-sand-soft">
      <div className="wrap">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-sand">Bestrating in eigen beheer</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Strak klinkerwerk, van terras tot bedrijventerrein
          </h2>
          <p className="mt-4 text-[18px] leading-relaxed text-sand">
            Bestrating verzorgen wij van een klein terrasje tot een groot bedrijventerrein. U herkent ons aan het zeer
            strakke werk. Wij beschikken over een volledig machinepark in eigen beheer om alle soorten bestrating aan te
            leggen.
          </p>
          <p className="mt-4 text-[18px] leading-relaxed text-sand">
            Wilt u een mooi pad, een klein of groot terras, of ziet u op tegen de bestrating van uw hele
            bedrijventerrein? Dan nemen wij u het werk uit handen.
          </p>
          <OfferteLink className="btn btn-sand mt-6">Vrijblijvend kennismaken</OfferteLink>
        </div>
        <Schaal />
        <div className="mt-8">
          <PhotoStrip fotos={fotos} label="Bestratingen van Hoveniersbedrijf G. Dijkhof" />
        </div>
      </div>
    </section>
  );
}
