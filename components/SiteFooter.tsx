import Link from "next/link";
import { content } from "@/content";
import Logo from "@/components/Logo";
import OfferteLink from "@/components/OfferteLink";

export default function SiteFooter() {
  const { company, nav, contact, werkgebied } = content;
  return (
    <footer data-section="footer" className="bg-navy text-sand">
      <div className="wrap grid gap-8 py-12 md:grid-cols-3">
        <div>
          <Logo tone="dark" className="h-16 w-auto" />
          <p className="mt-4 text-[17px] text-sand">{company.tagline}</p>
          <p className="mt-1 text-[17px]">{company.city}</p>
          <OfferteLink className="btn btn-sand mt-5">Vrijblijvend kennismaken</OfferteLink>
        </div>
        <nav aria-label="Footer">
          <p className="font-display text-lg font-extrabold text-white">Pagina&apos;s</p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sand hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-display text-lg font-extrabold text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-[17px]">
            <li>
              <a className="hover:text-white" href={contact.phoneHref}>
                {contact.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={contact.mobileHref}>
                {contact.mobile}
              </a>
            </li>
            <li>
              <a className="break-all hover:text-white" href={contact.emailHref}>
                {contact.email}
              </a>
            </li>
            <li>Werkgebied: {werkgebied.join(", ")} en de Stedendriehoek.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="wrap py-4 pb-24 text-sm text-sand/90 md:pb-4">© {company.name} · {company.city}</p>
      </div>
    </footer>
  );
}
