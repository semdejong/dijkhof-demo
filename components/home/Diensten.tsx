import Link from "next/link";
import { diensten } from "@/lib/copy";
import SectionHeading from "@/components/SectionHeading";

export default function Diensten() {
  return (
    <section data-section="diensten" className="bg-white py-16">
      <div className="wrap">
        <SectionHeading eyebrow="Wat wij doen" title="Van tekentafel tot onderhoud">
          <p>
            Tuinen die samen met u professioneel en met veel creativiteit op de tekentafel tot stand komen. Zo
            aangelegd dat wij zelfs de kleinste details niet uit het oog verliezen.
          </p>
        </SectionHeading>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diensten.map((dienst) => (
            <li key={dienst.titel}>
              <Link href={dienst.href} className="card-lift block h-full rounded-2xl bg-sand-soft p-5 ring-1 ring-sand">
                <h3 className="font-display text-xl font-extrabold text-navy">{dienst.titel}</h3>
                <p className="mt-2 text-[17px] leading-relaxed">{dienst.tekst}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
