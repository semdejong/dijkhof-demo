import Link from "next/link";
import { fotos } from "@/lib/photos";

const keuze = ["/fotos/aanleg-08.jpg", "/fotos/bestrating-07.jpg", "/fotos/onderhoud-07.jpg", "/fotos/tuin-01.jpg", "/fotos/aanleg-02.jpg", "/fotos/bestrating-02.jpg"];

export default function OnsWerkTeaser() {
  const gekozen = keuze.map((src) => fotos.find((foto) => foto.src === src)).filter((foto) => foto !== undefined);

  return (
    <section data-section="ons-werk" className="bg-sand-soft py-16">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">Ons werk</h2>
            <p className="mt-3 text-[18px]">
              Aanleg, bestrating, onderhoud en tuinen. Alleen foto&apos;s van ons eigen werk, per soort werk.
            </p>
          </div>
          <Link href="/ons-werk" className="btn btn-line">
            Bekijk ons werk
          </Link>
        </div>
        <ul className="mx-auto mt-8 grid max-w-[980px] grid-cols-2 gap-3 md:grid-cols-3">
          {gekozen.map((foto) => (
            <li key={foto.src} className="overflow-hidden rounded-md ring-1 ring-stone/40">
              <img src={foto.src} alt={foto.alt} width={980} height={350} className="h-32 w-full object-cover sm:h-40" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
