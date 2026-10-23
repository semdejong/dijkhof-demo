import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PhotoStrip from "@/components/PhotoStrip";
import OfferteLink from "@/components/OfferteLink";
import { fotogroepen, fotosVan } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Ons werk",
  description: "Foto's van aanleg, bestrating, onderhoud en tuinen van Hoveniersbedrijf G. Dijkhof in Klarenbeek.",
};

export default function OnsWerkPage() {
  return (
    <>
      <PageHero section="intro" eyebrow="Ons werk" title="Werk per soort">
        <p>
          Aanleg, bestrating, onderhoud en tuinen. De foto&apos;s tonen ons eigen werk. Van eerste offerte tot laatste
          hand staan wij in voor de kwaliteit.
        </p>
      </PageHero>
      {fotogroepen.map((groep) => (
        <section key={groep.id} data-section={groep.id} className="border-t border-stone/30 py-14">
          <div className="wrap">
            <h2 className="mb-6 font-display text-3xl font-extrabold text-navy">{groep.label}</h2>
            <PhotoStrip fotos={fotosVan(groep.id)} label={`Foto's: ${groep.label}`} />
          </div>
        </section>
      ))}
      <section data-section="afsluiting" className="bg-navy py-14">
        <div className="wrap">
          <h2 className="font-display text-3xl font-extrabold text-white">Ook voor uw tuin?</h2>
          <OfferteLink className="btn btn-sand mt-6">Vrijblijvend kennismaken</OfferteLink>
        </div>
      </section>
    </>
  );
}
