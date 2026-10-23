import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import OfferteLink from "@/components/OfferteLink";
import Werkwijze from "@/components/Werkwijze";
import PhotoStrip from "@/components/PhotoStrip";
import FaqList from "@/components/FaqList";
import Aanvraag from "@/components/Aanvraag";
import { content } from "@/content";
import { fotosVan } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Tuinaanleg",
  description:
    "Tuinaanleg door Hoveniersbedrijf G. Dijkhof in Klarenbeek: bestrating, vijver, borders, beplanting of een compleet aangelegde tuin.",
};

const onderdelen = [
  { titel: "Bestrating", tekst: "Van een klein terrasje tot een groot bedrijventerrein, herkenbaar aan het zeer strakke werk." },
  { titel: "Vijver", tekst: "Een vijver als onderdeel van de tuin, met beplanting eromheen." },
  { titel: "Borders", tekst: "Nieuwe borders, afgestemd op de plek en op wat u wilt zien." },
  { titel: "Beplanting", tekst: "Nieuwe beplanting, zodat de tuin op z'n mooist groeit en bloeit." },
  { titel: "Complete tuin", tekst: "Een compleet aangelegde tuin, van eerste schets tot laatste tegel." },
];

export default function TuinaanlegPage() {
  return (
    <>
      <PageHero
        section="intro"
        eyebrow="Tuinaanleg"
        title="Een nieuwe tuin, van schets tot laatste tegel"
        actions={
          <>
            <OfferteLink>Vrijblijvend kennismaken aan huis</OfferteLink>
            <a href={content.contact.mobileHref} className="btn btn-line">
              Bel {content.contact.mobile}
            </a>
          </>
        }
      >
        <p>
          Misschien bent u wel verhuisd en kunt u wel wat expertise gebruiken bij de aanleg van uw nieuwe tuin. Neem
          dan contact op met G. Dijkhof hoveniersbedrijf.
        </p>
      </PageHero>

      <section data-section="onderdelen" className="py-16">
        <div className="wrap">
          <h2 className="font-display text-3xl font-extrabold text-navy">Wat wij aanleggen</h2>
          <p className="mt-4 max-w-3xl text-[18px]">
            In de afgelopen jaren hebben wij heel veel verschillende tuinen aangelegd. Of het nu alleen de bestrating
            is, een vijver, nieuwe borders, nieuwe beplanting of een compleet aangelegde tuin.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {onderdelen.map((item) => (
              <li key={item.titel} className="rounded-2xl bg-sand-soft p-5">
                <h3 className="font-display text-xl font-extrabold text-navy">{item.titel}</h3>
                <p className="mt-2 text-[17px]">{item.tekst}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-section="ontwerp" className="bg-white py-16">
        <div className="wrap max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold text-navy">Op de tekentafel</h2>
          <p className="mt-4 text-[18px] leading-relaxed">
            Tuinen die samen met u professioneel en met veel creativiteit op de tekentafel tot stand komen. Zo
            aangelegd dat wij zelfs de kleinste details niet uit het oog verliezen.
          </p>
          <p className="mt-3 text-[18px] leading-relaxed">
            U ontvangt een vrijblijvende offerte, eventueel met een schetsontwerp. Vanzelfsprekend gaan wij uit van uw
            wensen.
          </p>
        </div>
      </section>

      <Werkwijze heading="Van afspraak tot een plan dat naar uw zin is" />

      <section data-section="fotos" className="py-16">
        <div className="wrap">
          <h2 className="mb-6 font-display text-3xl font-extrabold text-navy">Aanleg</h2>
          <PhotoStrip fotos={fotosVan("aanleg")} label="Foto's van tuinaanleg" />
        </div>
      </section>

      <section data-section="bestrating" className="bg-forest py-16 text-sand">
        <div className="wrap max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold text-white">Bestrating in eigen beheer</h2>
          <p className="mt-4 text-[18px] leading-relaxed">
            Bestrating kunnen wij verzorgen van een klein terrasje tot een groot bedrijventerrein. Ook hier herkent u
            ons aan het zeer strakke werk. Wij beschikken over een volledig machinepark in eigen beheer.
          </p>
        </div>
      </section>

      <FaqList />
      <Aanvraag />
    </>
  );
}
