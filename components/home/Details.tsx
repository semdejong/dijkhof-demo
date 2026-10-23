import Link from "next/link";

export default function Details() {
  return (
    <section data-section="details" className="bg-white py-16">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <figure className="mx-auto w-full max-w-[980px] overflow-hidden rounded-md ring-1 ring-stone/30">
          <img
            src="/fotos/aanleg-02.jpg"
            alt="Terras van grijze tegels met traptreden en een verhoogde border met lavendel."
            width={980}
            height={350}
            className="h-auto w-full"
          />
          </figure>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-deep">Op de tekentafel</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Zelfs de kleinste details blijven in beeld
          </h2>
          <p className="mt-4 text-[18px] leading-relaxed">
            Tuinen komen samen met u professioneel en met veel creativiteit op de tekentafel tot stand. Zo aangelegd
            dat wij zelfs de kleinste details niet uit het oog verliezen, en in onderhoud dat uw tuin op z&apos;n
            mooist groeit en bloeit.
          </p>
          <p className="mt-3 text-[18px] leading-relaxed">
            Van eerste offerte tot laatste hand staan wij in voor de kwaliteit. Kortom, voor alles kunt u terecht bij
            G. Dijkhof hoveniersbedrijf.
          </p>
          <Link href="/tuinaanleg" className="btn btn-line mt-6">
            Hoe een tuin tot stand komt
          </Link>
        </div>
      </div>
    </section>
  );
}
