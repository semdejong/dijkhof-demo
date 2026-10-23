import { content } from "@/content";

export default function Werkgebied() {
  return (
    <section data-section="werkgebied" className="visgraat py-16">
      <div className="wrap">
        <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">Werkgebied</h2>
        <p className="mt-4 max-w-3xl text-[18px] leading-relaxed">
          Niet alleen in Klarenbeek, maar in de hele Stedendriehoek: Apeldoorn, Deventer en Zutphen.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {content.werkgebied.map((plaats) => (
            <li key={plaats} className="rounded-full bg-white px-5 py-2 font-display text-lg font-extrabold text-navy ring-1 ring-sand">
              {plaats}
            </li>
          ))}
          <li className="rounded-full bg-navy px-5 py-2 font-display text-lg font-extrabold text-sand">De Stedendriehoek</li>
        </ul>
      </div>
    </section>
  );
}
