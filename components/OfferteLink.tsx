import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  className?: string;
  children: ReactNode;
};

/** Kennismaken / offerte / aanvraag. data-cta wordt door de Sleads-tracker gelezen. */
export default function OfferteLink({ href = "/kennismaken", className = "btn btn-primary", children }: Props) {
  return (
    <Link href={href} data-cta="offerte" className={className}>
      {children}
    </Link>
  );
}
