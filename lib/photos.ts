export type Fotogroep = "aanleg" | "bestrating" | "onderhoud" | "tuinen";

export type Foto = {
  src: string;
  alt: string;
  groep: Fotogroep;
};

export const fotos: Foto[] = [
  {
    src: "/fotos/aanleg-01.jpg",
    alt: "Gebogen grijze oprit langs een gazon met jonge bomen en een geschoren haag.",
    groep: "aanleg",
  },
  {
    src: "/fotos/aanleg-02.jpg",
    alt: "Terras van grijze tegels met traptreden en een verhoogde border met lavendel.",
    groep: "aanleg",
  },
  {
    src: "/fotos/aanleg-03.jpg",
    alt: "Grindpad tussen hagen en borders, met een klinkerpad ernaast.",
    groep: "aanleg",
  },
  {
    src: "/fotos/aanleg-04.jpg",
    alt: "Terras van grote grijze tegels bij een woning, met buxusbollen en een kleine vijver.",
    groep: "aanleg",
  },
  {
    src: "/fotos/aanleg-05.jpg",
    alt: "Bakstenen woning met een verhoogde lavendelborder, traptreden en een terras.",
    groep: "aanleg",
  },
  {
    src: "/fotos/aanleg-06.jpg",
    alt: "Gebogen grijze oprit met jonge bomen op het gazon en een haag erachter.",
    groep: "aanleg",
  },
  {
    src: "/fotos/aanleg-07.jpg",
    alt: "Vijver met waterlelies, een houten bruggetje en borders met coniferen.",
    groep: "aanleg",
  },
  {
    src: "/fotos/aanleg-08.jpg",
    alt: "Grote vijver met lelies en een rode esdoorn, naast een gazon en een klinkerpad.",
    groep: "aanleg",
  },
  {
    src: "/fotos/aanleg-09.jpg",
    alt: "Gazon met strak geschoren hagen en hortensia's bij een bakstenen woning.",
    groep: "aanleg",
  },
  {
    src: "/fotos/bestrating-01.jpg",
    alt: "Rode klinkerbestrating met een brede trap en een terras van donkere natuursteen.",
    groep: "bestrating",
  },
  {
    src: "/fotos/bestrating-02.jpg",
    alt: "Gebogen klinkerpad langs geschoren hagen en bodembedekkers.",
    groep: "bestrating",
  },
  {
    src: "/fotos/bestrating-03.jpg",
    alt: "Boom in een ronde grindcirkel, midden in een vlak van rode klinkers.",
    groep: "bestrating",
  },
  {
    src: "/fotos/bestrating-04.jpg",
    alt: "Groot terras van grijze tegels met een zithoek en een border met een stenen ornament.",
    groep: "bestrating",
  },
  {
    src: "/fotos/bestrating-05.jpg",
    alt: "Groot terras van lichte natuurstenen tegels, omrand met donkere klinkers.",
    groep: "bestrating",
  },
  {
    src: "/fotos/bestrating-06.jpg",
    alt: "Gebogen grindpad met een opsluitband, tussen gazon en een border met heesters.",
    groep: "bestrating",
  },
  {
    src: "/fotos/bestrating-07.jpg",
    alt: "Klinkeroprit in visgraatverband tussen geschoren hagen met hortensia's.",
    groep: "bestrating",
  },
  {
    src: "/fotos/onderhoud-01.jpg",
    alt: "Groene bedrijfsbus bij een klinkeroprit, tussen hagen en hortensia's.",
    groep: "onderhoud",
  },
  {
    src: "/fotos/onderhoud-02.jpg",
    alt: "Border met jonge beplanting langs een schutting, naast een tegelpad.",
    groep: "onderhoud",
  },
  {
    src: "/fotos/onderhoud-03.jpg",
    alt: "Eigen wagenpark: twee groene bestelbussen en een vrachtwagen met het logo.",
    groep: "onderhoud",
  },
  {
    src: "/fotos/onderhoud-04.jpg",
    alt: "Woning met rieten dak, een gazon en geschoren buxusvormen.",
    groep: "onderhoud",
  },
  {
    src: "/fotos/onderhoud-05.jpg",
    alt: "Gazon met een klinkerpad en een verhoogde border met kleurige beplanting.",
    groep: "onderhoud",
  },
  {
    src: "/fotos/onderhoud-06.jpg",
    alt: "Kleurrijke beplanting rond een vijver, met een grindpad en een bruggetje.",
    groep: "onderhoud",
  },
  {
    src: "/fotos/onderhoud-07.jpg",
    alt: "Gestreept gemaaid gazon voor een bakstenen woning, met een ronde haag en rozen.",
    groep: "onderhoud",
  },
  {
    src: "/fotos/onderhoud-08.jpg",
    alt: "Gazon met een gebogen haag, hortensia's en een verhoogde border rond een boom.",
    groep: "onderhoud",
  },
  {
    src: "/fotos/tuin-01.jpg",
    alt: "Vijver met lelies en een brede border met vaste planten en heesters.",
    groep: "tuinen",
  },
  {
    src: "/fotos/tuin-02.jpg",
    alt: "Grindpad tussen hagen, vormbomen en een border met roze en gele bloemen.",
    groep: "tuinen",
  },
  {
    src: "/fotos/tuin-03.jpg",
    alt: "Klinkerpad tussen borders met bodembedekkers, heesters en jonge bomen.",
    groep: "tuinen",
  },
  {
    src: "/fotos/tuin-04.jpg",
    alt: "Gazon met rode rozen, een ronde verhoogde border en een geschoren haag.",
    groep: "tuinen",
  },
];

export const fotogroepen: { id: Fotogroep; label: string }[] = [
  { id: "aanleg", label: "Aanleg" },
  { id: "bestrating", label: "Bestrating" },
  { id: "onderhoud", label: "Onderhoud" },
  { id: "tuinen", label: "Tuinen" },
];

export function fotosVan(groep: Fotogroep) {
  return fotos.filter((foto) => foto.groep === groep);
}
