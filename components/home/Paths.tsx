import Link from "next/link";

const paden = [
  {
    nr: "01",
    titel: "Nieuwe tuin of renovatie",
    tekst: "Ontwerp op de tekentafel, aanleg en bestrating, tot en met de laatste tegel. Ook als u net verhuisd bent.",
    href: "/tuinaanleg",
    label: "Naar tuinaanleg",
    klas: "bg-white text-navy",
    link: "text-green-deep",
  },
  {
    nr: "02",
    titel: "Onderhoud",
    tekst: "Hagen knippen, het gazon maaien, snoeien. Van een eenmalige beurt tot jaaronderhoud om de 4 à 5 weken.",
    href: "/tuinonderhoud",
    label: "Naar tuinonderhoud",
    klas: "bg-sand-soft text-navy",
    link: "text-green-deep",
  },
  {
    nr: "03",
    titel: "Zakelijk en paardenfaciliteiten",
    tekst: "Uw hele bedrijventerrein, zakelijk onderhoud, of een paardenbak, omheining en stapmolen.",
    href: "/paardenfaciliteiten",
    label: "Naar paardenfaciliteiten",
    klas: "bg-navy text-sand",
    link: "text-sand",
  },
];

export default function Paths() {
  return (
    <section data-section="paden" className="py-14">
      <div className="wrap">
        <h2 className="max-w-2xl font-display text-3xl font-extrabold text-navy sm:text-4xl">
          Drie manieren om te beginnen
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {paden.map((pad) => (
            <Link
              key={pad.href}
              href={pad.href}
              className={`card-lift flex min-h-64 flex-col justify-between rounded-3xl p-6 ring-1 ring-stone/30 ${pad.klas}`}
            >
              <span>
                <span className="font-display text-sm font-extrabold tracking-[0.18em] opacity-70">{pad.nr}</span>
                <span className="mt-3 block font-display text-2xl font-extrabold leading-tight">{pad.titel}</span>
                <span className="mt-3 block text-[17px] leading-relaxed opacity-90">{pad.tekst}</span>
              </span>
              <span className={`mt-6 font-bold underline ${pad.link}`}>{pad.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
