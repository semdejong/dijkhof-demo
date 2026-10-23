import { content } from "@/content";

export default function Werkgebied() {
  return (
    <section data-section="werkgebied" className="visgraat py-16">
      <div className="wrap">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-deep">Waar wij komen</p>
        <h2 className="mt-2 max-w-3xl font-display text-3xl font-extrabold text-navy sm:text-4xl">
          Klarenbeek, en de hele Stedendriehoek
        </h2>
        <p className="mt-4 max-w-3xl text-[18px] leading-relaxed">
          Steeds meer particuliere en zakelijke opdrachtgevers weten ons te vinden. Niet alleen in Klarenbeek, maar in
          Apeldoorn, Deventer, Zutphen en de hele Stedendriehoek.
        </p>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.werkgebied.map((plaats, index) => (
            <li key={plaats} className="relative rounded-2xl bg-white p-5 ring-1 ring-sand">
              <div className="mb-3 flex gap-1" aria-hidden>
                {Array.from({ length: 4 + index }, (_, i) => (
                  <span
                    key={i}
                    className="inline-block h-2.5 w-3.5 rounded-[2px] bg-stone"
                    style={{ transform: `rotate(${i % 2 ? 20 : -20}deg)` }}
                  />
                ))}
              </div>
              <p className="font-display text-2xl font-extrabold text-navy">{plaats}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
