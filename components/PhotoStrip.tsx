import type { Foto } from "@/lib/photos";

export default function PhotoStrip({ fotos, label }: { fotos: Foto[]; label: string }) {
  return (
    <div className="photo-strip" tabIndex={0} aria-label={label}>
      {fotos.map((foto) => (
        <figure key={foto.src} className="overflow-hidden rounded-md bg-white ring-1 ring-stone/40">
          <img src={foto.src} alt={foto.alt} width={980} height={350} className="h-auto w-full" />
          <figcaption className="px-3 py-2 text-[15px] leading-snug text-navy">{foto.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}
