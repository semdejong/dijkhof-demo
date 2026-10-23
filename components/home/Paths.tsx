import Link from "next/link";

const paden = [
  {
    titel: "Nieuwe tuin of renovatie",
    tekst: "Ontwerp op de tekentafel, aanleg en bestrating, tot en met de laatste tegel.",
    href: "/tuinaanleg",
    label: "Naar tuinaanleg",
  },
  {
    titel: "Onderhoud",
    tekst: "Een eenmalige beurt, of jaaronderhoud om de 4 à 5 weken, het hele jaar door.",
    href: "/tuinonderhoud",
    label: "Naar tuinonderhoud",
  },
  {
    titel: "Zakelijk en paardenfaciliteiten",
    tekst: "Uw hele bedrijventerrein, zakelijk onderhoud, of een paardenbak, omheining en stapmolen.",
    href: "/paardenfaciliteiten",
    label: "Naar paardenfaciliteiten",
  },
];

export default function Paths() {
  return (
    <section data-section="paden" className="py-14">
      <div className="wrap grid gap-4 md:grid-cols-3">
        {paden.map((pad) => (
          <Link
            key={pad.href}
            href={pad.href}
            className="card-lift flex min-h-44 flex-col justify-between rounded-2xl bg-white p-6 ring-1 ring-stone/40"
          >
            <span>
              <span className="font-display text-2xl font-extrabold text-navy">{pad.titel}</span>
              <span className="mt-3 block text-[17px] leading-relaxed">{pad.tekst}</span>
            </span>
            <span className="mt-5 font-bold text-green-deep">{pad.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
