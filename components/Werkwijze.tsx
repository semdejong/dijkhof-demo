import { stappen } from "@/lib/copy";

export default function Werkwijze({ heading = "Zo werken wij" }: { heading?: string }) {
  return (
    <section data-section="werkwijze" className="bg-sand-soft py-16">
      <div className="wrap">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-deep">Werkwijze</p>
        <h2 className="mt-2 max-w-3xl font-display text-3xl font-extrabold text-navy sm:text-4xl">{heading}</h2>
        <p className="mt-4 max-w-3xl text-[18px] leading-relaxed">
          Na het maken van een afspraak komen wij graag bij u langs. De vrijblijvende offerte, eventueel met een
          schetsontwerp, sturen wij u binnen een aantal weken toe.
        </p>
        <ol className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {stappen.map((stap, index) => (
            <li key={stap.titel} className="grid grid-cols-[3rem_1fr] gap-4">
              <div className="flex flex-col items-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-display text-lg font-extrabold text-sand">
                  {index + 1}
                </span>
                <span className="mt-2 h-8 w-px bg-stone" aria-hidden />
              </div>
              <div>
                <p className="font-display text-xl font-extrabold text-navy">{stap.titel}</p>
                <p className="mt-1 text-[17px] leading-relaxed">{stap.tekst}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
