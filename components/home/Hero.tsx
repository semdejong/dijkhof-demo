import { content } from "@/content";
import OfferteLink from "@/components/OfferteLink";
import KlinkerRule from "@/components/KlinkerRule";

export default function Hero() {
  const { contact } = content;
  return (
    <section data-section="hero" className="visgraat">
      <div className="wrap grid items-center gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-deep">Klarenbeek en de Stedendriehoek</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            Uw hovenier in Klarenbeek
          </h1>
          <KlinkerRule count={8} align="start" className="mt-4" />
          <p className="mt-4 max-w-xl text-[18px] leading-relaxed">
            Hoveniersbedrijf G. Dijkhof heeft meer dan 35 jaar ervaring in tuinontwerp, tuinaanleg, tuinadvies,
            tuinrenovatie, bestratingen en tuinonderhoud, in Klarenbeek en omgeving.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <OfferteLink>Vrijblijvend kennismaken</OfferteLink>
            <a href={contact.mobileHref} className="btn btn-line">
              Bel {contact.mobile}
            </a>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-[980px] overflow-hidden rounded-md ring-4 ring-sand">
          <img
            src="/fotos/aanleg-05.jpg"
            alt="Bakstenen woning met een verhoogde lavendelborder, traptreden en een terras."
            width={980}
            height={350}
            className="h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
}
