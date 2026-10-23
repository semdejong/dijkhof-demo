import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Aanvraag from "@/components/Aanvraag";
import PullQuote from "@/components/PullQuote";
import { stappen } from "@/lib/copy";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Kennismaken",
  description:
    "Vrijblijvend kennismaken aan huis met Hoveniersbedrijf G. Dijkhof. Daarna een offerte, eventueel met schetsontwerp.",
};

export default function KennismakenPage() {
  return (
    <>
      <PageHero section="intro" eyebrow="Kennismaken" title="Vrijblijvend kennismaken aan huis">
        <p>
          Na het maken van een afspraak komen wij graag bij u langs om de mogelijkheden te bezien en uw wensen te
          bespreken. U kunt ons bellen op{" "}
          <a className="font-bold text-navy underline" href={content.contact.mobileHref}>
            {content.contact.mobile}
          </a>{" "}
          of op{" "}
          <a className="font-bold text-navy underline" href={content.contact.phoneHref}>
            {content.contact.phone}
          </a>
          .
        </p>
      </PageHero>
      <PullQuote
        quote="U loopt al een tijd rond met plannen voor een nieuwe tuin maar weet niet goed hoe en waar te beginnen?"
        source="Daarom komen wij vrijblijvend bij u langs."
      />
      <section data-section="stappen" className="py-14">
        <div className="wrap">
          <h2 className="font-display text-3xl font-extrabold text-navy">Wat u kunt verwachten</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {stappen.map((stap, index) => (
              <li key={stap.titel} className="rounded-2xl bg-sand-soft p-4">
                <p className="font-display font-extrabold text-navy">
                  {index + 1}. {stap.titel}
                </p>
                <p className="mt-1">{stap.tekst}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Aanvraag intro="Vul het formulier in. Uw e-mailprogramma opent daarna een bericht aan ons, met uw gegevens erin." />
    </>
  );
}
