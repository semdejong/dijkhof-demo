"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { content } from "@/content";
import Logo from "@/components/Logo";
import OfferteLink from "@/components/OfferteLink";
import SleadsBadge from "@/components/SleadsBadge";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { nav, contact } = content;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header data-section="header" className="sticky top-0 z-40 border-b border-stone/30 bg-[#fffcf7]/95 backdrop-blur">
      <div className="wrap flex items-center justify-between gap-3 py-2.5">
        <Link href="/" aria-label="Hoveniersbedrijf G. Dijkhof, naar de homepage" className="shrink-0">
          <Logo labelled={false} className="h-12 w-auto sm:h-14" />
        </Link>
        <nav className="hidden items-center gap-x-4 gap-y-1 text-[15px] font-semibold text-navy xl:flex" aria-label="Hoofdmenu">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={active ? "text-green-deep underline decoration-2 underline-offset-4" : "hover:text-green-deep"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a href={contact.mobileHref} className="hidden min-h-11 items-center px-2 font-bold text-navy sm:inline-flex">
            {contact.mobile}
          </a>
          <OfferteLink className="btn btn-primary hidden px-4 md:inline-flex">Kennismaken</OfferteLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/25 text-navy xl:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
            <span aria-hidden className="relative block h-4 w-5">
              <span className={`absolute left-0 h-0.5 w-full bg-navy ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-full bg-navy ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-full bg-navy ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>
      <div className="wrap -mt-1 flex pb-2">
        <SleadsBadge />
      </div>
      <nav
        id="site-menu"
        aria-label="Mobiel menu"
        className={`${open ? "block" : "hidden"} border-t border-stone/30 bg-[#fffcf7] xl:hidden`}
      >
        <ul className="wrap flex flex-col gap-1 py-3 pb-28">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-11 items-center font-semibold ${active ? "text-green-deep" : "text-navy"}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <OfferteLink className="btn btn-primary mt-2 w-full">Vrijblijvend kennismaken</OfferteLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
