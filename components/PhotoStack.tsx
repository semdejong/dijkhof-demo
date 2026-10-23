import type { Foto } from "@/lib/photos";

/** Panorama's op hun eigen breedte, met het bijschrift eronder. */
export default function PhotoStack({ fotos, label }: { fotos: Foto[]; label: string }) {
  return (
    <div className="mx-auto flex max-w-[980px] flex-col gap-8" aria-label={label}>
      {fotos.map((foto, index) => (
        <figure key={foto.src} className="overflow-hidden rounded-md bg-white ring-1 ring-stone/40">
          <img src={foto.src} alt={foto.alt} width={980} height={350} className="h-auto w-full" />
          <figcaption className="flex items-start gap-3 px-4 py-3 text-[16px] leading-snug text-navy">
            <span className="mt-1 inline-flex shrink-0 gap-0.5" aria-hidden>
              <span className="h-2 w-3 rounded-[2px] bg-stone" />
              <span className="h-2 w-3 translate-y-1 rounded-[2px] bg-stone/70" />
            </span>
            <span>
              <span className="mr-2 font-display font-extrabold text-green-deep">{String(index + 1).padStart(2, "0")}</span>
              {foto.alt}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
