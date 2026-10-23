import { stappen } from "@/lib/copy";
import SectionHeading from "@/components/SectionHeading";

export default function Werkwijze({ heading = "Zo werken wij" }: { heading?: string }) {
  return (
    <section data-section="werkwijze" className="bg-sand-soft py-16">
      <div className="wrap">
        <SectionHeading eyebrow="Werkwijze" title={heading}>
          <p>
            Na het maken van een afspraak komen wij graag bij u langs. De vrijblijvende offerte, eventueel met een
            schetsontwerp, sturen wij u binnen een aantal weken toe.
          </p>
        </SectionHeading>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stappen.map((stap, index) => (
            <li key={stap.titel} className="relative rounded-2xl bg-white p-5 ring-1 ring-stone/30">
              <div className="mb-3 flex items-center gap-2" aria-hidden>
                {Array.from({ length: index + 1 }, (_, i) => (
                  <span key={i} className="inline-block h-2.5 w-4 rounded-[2px] bg-stone" style={{ transform: `rotate(${i % 2 ? 16 : -16}deg)` }} />
                ))}
              </div>
              <p className="font-display text-lg font-extrabold text-navy">
                <span className="mr-2 text-green-deep">{index + 1}.</span>
                {stap.titel}
              </p>
              <p className="mt-2 text-[17px] leading-relaxed">{stap.tekst}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
