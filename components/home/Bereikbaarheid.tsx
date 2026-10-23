import { content } from "@/content";

export default function Bereikbaarheid() {
  const { contact } = content;
  return (
    <section data-section="bereikbaarheid" className="py-16">
      <div className="wrap grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="font-display text-3xl font-extrabold text-navy">Bereikbaarheid</h2>
          <p className="mt-3 text-[18px]">{contact.appointment}</p>
        </div>
        <a href={contact.phoneHref} className="rounded-2xl bg-sand-soft p-5 font-display text-2xl font-extrabold text-navy">
          {contact.phone}
          <span className="mt-1 block font-sans text-base font-semibold">Vast</span>
        </a>
        <a href={contact.mobileHref} className="rounded-2xl bg-navy p-5 font-display text-2xl font-extrabold text-sand">
          {contact.mobile}
          <span className="mt-1 block font-sans text-base font-semibold text-sand">Mobiel</span>
        </a>
        <a href={contact.emailHref} className="break-all rounded-2xl bg-white p-5 font-bold text-navy ring-1 ring-stone/40 md:col-span-3">
          {contact.email}
        </a>
      </div>
    </section>
  );
}
