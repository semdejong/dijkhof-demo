import Link from "next/link";

export default function OverBlock() {
  return (
    <section data-section="over-ons" className="bg-white py-16">
      <div className="wrap grid items-center gap-8 lg:grid-cols-2">
        <figure className="mx-auto w-full max-w-[980px] overflow-hidden rounded-md ring-1 ring-stone/40">
          <img
            src="/fotos/onderhoud-03.jpg"
            alt="Eigen wagenpark: twee groene bestelbussen en een vrachtwagen met het logo."
            width={980}
            height={350}
            className="h-auto w-full"
          />
        </figure>
        <div>
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">Ruim 35 jaar, eigen mensen en eigen wagenpark</h2>
          <p className="mt-4 text-[18px] leading-relaxed">
            Als hovenier staan we in voor de kwaliteit van ons werk, van eerste offerte tot laatste hand. Onze goed
            opgeleide en ervaren medewerkers staan voor u klaar. Particulier en zakelijk.
          </p>
          <p className="mt-3 text-[18px] leading-relaxed">
            Met die aanpak weten steeds meer opdrachtgevers ons te vinden, in Klarenbeek en in de hele Stedendriehoek.
          </p>
          <Link href="/over-ons" className="btn btn-line mt-6">
            Over ons
          </Link>
        </div>
      </div>
    </section>
  );
}
