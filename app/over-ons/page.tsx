import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import OfferteLink from "@/components/OfferteLink";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Hoveniersbedrijf G. Dijkhof in Klarenbeek: ruim 35 jaar ervaring, eigen medewerkers en een eigen wagenpark.",
};

export default function OverOnsPage() {
  return (
    <>
      <PageHero section="intro" eyebrow="Over ons" title="Ruim 35 jaar hovenier in Klarenbeek">
        <p>
          Als u een betrouwbare en vakkundige hovenier in Klarenbeek zoekt, dan heeft u deze gevonden. G. Dijkhof
          Hoveniersbedrijf heeft meer dan 35 jaar ervaring in tuinontwerp, tuinaanleg, tuinadvies, tuinrenovatie en
          tuinonderhoud.
        </p>
      </PageHero>

      <section data-section="mensen" className="py-16">
        <div className="wrap grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-navy">Onze mensen en ons wagenpark</h2>
            <p className="mt-4 text-[18px] leading-relaxed">
              Als hovenier staan we in voor de kwaliteit van ons werk. Van eerste offerte tot laatste hand. Onze goed
              opgeleide en ervaren medewerkers staan voor u klaar.
            </p>
            <p className="mt-3 text-[18px] leading-relaxed">
              Met die aanpak weten steeds meer particuliere en zakelijke opdrachtgevers ons te vinden. En niet alleen
              meer in Klarenbeek, maar in de hele Stedendriehoek, Apeldoorn, Deventer en Zutphen.
            </p>
            <p className="mt-3 text-[18px] leading-relaxed">
              Wij staan u graag te woord. {content.contact.appointment}
            </p>
          </div>
          <figure className="overflow-hidden rounded-md ring-1 ring-stone/40">
            <img
              src="/fotos/onderhoud-03.jpg"
              alt="Eigen wagenpark: twee groene bestelbussen en een vrachtwagen met het logo."
              width={980}
              height={350}
              className="h-auto w-full max-w-[980px]"
            />
          </figure>
        </div>
      </section>

      <section data-section="afsluiting" className="bg-forest py-14 text-sand">
        <div className="wrap">
          <h2 className="font-display text-3xl font-extrabold text-white">Neem vrijblijvend contact op</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <OfferteLink className="btn btn-sand">Vrijblijvend kennismaken</OfferteLink>
            <a className="btn btn-line-light" href={content.contact.mobileHref}>
              Bel {content.contact.mobile}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
