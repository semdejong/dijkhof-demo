export const content = {
  slug: "dijkhof-demo",

  company: {
    name: "Hoveniersbedrijf G. Dijkhof",
    tagline: "Tuinarchitectuur en bestratingen",
    city: "Klarenbeek",
    logo: "/logo-dijkhof-origineel.png",
  },

  colors: {
    primary: "#3F7414",
    primaryForeground: "#ffffff",
    accent: "#569A1C",
    background: "#FFFcf7",
    foreground: "#16245B",
    muted: "#F5F1E9",
  },

  seo: {
    title: "Hoveniersbedrijf G. Dijkhof | Uw hovenier in Klarenbeek",
    description:
      "Uw hovenier in Klarenbeek. Meer dan 35 jaar tuinontwerp, tuinaanleg, bestratingen, tuinonderhoud en paardenfaciliteiten in de Stedendriehoek.",
    lang: "nl",
  },

  nav: [
    { label: "Aanleg", href: "/tuinaanleg" },
    { label: "Onderhoud", href: "/tuinonderhoud" },
    { label: "Bestrating", href: "/bestrating" },
    { label: "Paardenfaciliteiten", href: "/paardenfaciliteiten" },
    { label: "Ons werk", href: "/ons-werk" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],

  contact: {
    phone: "055-3011795",
    phoneHref: "tel:+31553011795",
    mobile: "06-51429636",
    mobileHref: "tel:+31651429636",
    email: "info@hoveniersbedrijfgdijkhof.nl",
    emailHref: "mailto:info@hoveniersbedrijfgdijkhof.nl",
    appointment: "Bel of mail ons voor een afspraak.",
  },

  werkgebied: ["Klarenbeek", "Apeldoorn", "Deventer", "Zutphen"],
};

export type Content = typeof content;
