import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import OfferteLink from "@/components/OfferteLink";
import PullQuote from "@/components/PullQuote";
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

      <section data-section="pijlers" className="bg-sand-soft py-16">
        <div className="wrap grid gap-4 md:grid-cols-3">
          {[
            ["Ruim 35 jaar", "Meer dan 35 jaar ervaring in ontwerp, aanleg, advies, renovatie, bestrating en onderhoud."],
            ["Eigen mensen", "Goed opgeleide en ervaren medewerkers, die voor u klaarstaan."],
            ["Eigen wagenpark", "Groene bestelbussen en een vrachtwagen met ons logo."],
          ].map(([titel, tekst]) => (
            <article key={titel} className="rounded-3xl bg-white p-6 ring-1 ring-sand">
              <h2 className="font-display text-2xl font-extrabold text-navy">{titel}</h2>
              <p className="mt-3">{tekst}</p>
            </article>
          ))}
        </div>
      </section>

      <section data-section="op-locatie" className="py-16">
        <div className="wrap grid items-center gap-8 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-md ring-1 ring-stone/40">
            <img
              src="/fotos/onderhoud-01.jpg"
              alt="Groene bedrijfsbus bij een klinkeroprit, tussen hagen en hortensia's."
              width={980}
              height={350}
              className="h-auto w-full max-w-[980px]"
            />
          </figure>
          <div>
            <h2 className="font-display text-3xl font-extrabold text-navy">Particulier en zakelijk</h2>
            <p className="mt-4 text-[18px] leading-relaxed">
              Tuinen die samen met u op de tekentafel tot stand komen. Zo aangelegd dat wij de kleinste details niet
              uit het oog verliezen, en in onderhoud dat de tuin op z&apos;n mooist groeit en bloeit.
            </p>
            <ul className="mt-5 space-y-2 font-bold text-green-deep">
              <li><Link className="underline" href="/tuinaanleg">Tuinaanleg en renovatie</Link></li>
              <li><Link className="underline" href="/tuinonderhoud">Tuinonderhoud</Link></li>
              <li><Link className="underline" href="/bestrating">Bestratingen</Link></li>
              <li><Link className="underline" href="/paardenfaciliteiten">Paardenfaciliteiten</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <PullQuote quote="Wij staan u graag te woord en helpen u graag." source="Hoveniersbedrijf G. Dijkhof, Klarenbeek" />

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
