import { stappen } from "@/lib/copy";

export default function Werkwijze({ heading = "Zo werken wij" }: { heading?: string }) {
  return (
    <section data-section="werkwijze" className="bg-sand-soft py-16">
      <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-deep">Werkwijze</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-navy sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-[18px] leading-relaxed">
            Na het maken van een afspraak komen wij graag bij u langs. De vrijblijvende offerte, eventueel met een
            schetsontwerp, sturen wij u binnen een aantal weken toe.
          </p>
        </div>
        <ol className="relative space-y-0">
          {stappen.map((stap, index) => (
            <li key={stap.titel} className="grid grid-cols-[3rem_1fr] gap-4 pb-7">
              <div className="flex flex-col items-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-display text-lg font-extrabold text-sand">
                  {index + 1}
                </span>
                {index < stappen.length - 1 ? (
                  <span className="mt-2 flex flex-1 flex-col items-center gap-1" aria-hidden>
                    <span className="h-2 w-3 rounded-[2px] bg-stone" />
                    <span className="h-2 w-3 rounded-[2px] bg-stone/80" />
                    <span className="w-px flex-1 bg-stone/50" />
                  </span>
                ) : null}
              </div>
              <div className="pt-1">
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
