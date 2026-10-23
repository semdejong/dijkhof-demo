import { content } from "@/content";
import OfferteLink from "@/components/OfferteLink";

export default function MobileBar() {
  const { contact } = content;
  return (
    <div
      data-section="bel-balk"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-stone/40 bg-[#fffcf7]/95 px-3 py-2 backdrop-blur md:hidden"
    >
      <div className="grid grid-cols-2 gap-2">
        <a href={contact.mobileHref} className="btn btn-navy w-full">
          Bel
        </a>
        <OfferteLink className="btn btn-primary w-full">Kennismaken</OfferteLink>
      </div>
    </div>
  );
}
