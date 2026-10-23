import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Aanvraag from "@/components/Aanvraag";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Bel of mail Hoveniersbedrijf G. Dijkhof in Klarenbeek voor een afspraak. Telefoon 055-3011795 en 06-51429636.",
};

export default function ContactPage() {
  const { contact, werkgebied } = content;
  return (
    <>
      <PageHero section="intro" eyebrow="Contact" title="Bel of mail ons">
        <p>
          Wij staan u graag te woord. {contact.appointment} Klarenbeek en de Stedendriehoek: {werkgebied.join(", ")}.
        </p>
      </PageHero>
      <section data-section="gegevens" className="py-14">
        <div className="wrap grid gap-4 sm:grid-cols-3">
          <a href={contact.phoneHref} className="rounded-2xl bg-sand-soft p-5">
            <span className="block text-sm font-bold uppercase tracking-wide text-green-deep">Telefoon</span>
            <span className="mt-2 block font-display text-2xl font-extrabold text-navy">{contact.phone}</span>
          </a>
          <a href={contact.mobileHref} className="rounded-2xl bg-navy p-5">
            <span className="block text-sm font-bold uppercase tracking-wide text-sand">Mobiel</span>
            <span className="mt-2 block font-display text-2xl font-extrabold text-white">{contact.mobile}</span>
          </a>
          <a href={contact.emailHref} className="break-all rounded-2xl bg-white p-5 ring-1 ring-stone/40">
            <span className="block text-sm font-bold uppercase tracking-wide text-green-deep">E-mail</span>
            <span className="mt-2 block font-bold text-navy">{contact.email}</span>
          </a>
        </div>
      </section>
      <Aanvraag />
    </>
  );
}
