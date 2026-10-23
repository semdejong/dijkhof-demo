import { faq } from "@/lib/copy";

export default function FaqList() {
  return (
    <section data-section="faq" className="py-16">
      <div className="wrap max-w-3xl">
        <h2 className="font-display text-3xl font-extrabold text-navy">Vragen die wij vaak horen</h2>
        <div className="mt-6 divide-y divide-stone/40 border-y border-stone/40">
          {faq.map((item) => (
            <details key={item.vraag} className="group py-4">
              <summary className="cursor-pointer list-none font-display text-xl font-extrabold text-navy [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.vraag}
                  <span aria-hidden className="text-green-deep group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-[18px] leading-relaxed">{item.antwoord}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
