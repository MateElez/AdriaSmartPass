/** Metapodaci za kartice i liste — bez punog teksta članka (učitava se zasebno na stranici članka). */
export const BLOG_POSTS = [
  {
    slug: "odrzavanje-pametnih-brava-najcesci-problemi-i-rjesenja",
    title: "Održavanje pametnih brava: najčešći problemi i rješenja",
    category: "Tehnički vodiči",
    imageSrc: "/images/blog/blog-odrzavanje-pametnih-brava.png",
    imageAlt: "Pametna brava na vratima — održavanje i pouzdan rad",
    excerpt:
      "Saznajte koji se problemi najčešće javljaju kod pametnih brava i kako ih jednostavno otkloniti – od pražnjenja baterije do poteškoća u povezivanju.",
    dateLabel: "10. veljače 2026.",
    readTimeLabel: "6 min čitanja"
  },
  {
    slug: "pametne-brave-u-airbnb-apartmanima",
    title: "Pametne brave u Airbnb apartmanima",
    category: "Primjena u praksi",
    imageSrc: "/images/blog/blog-airbnb-apartmani.png",
    imageAlt: "Ulaz u apartman za kratkoročni najam s pametnom bravom",
    excerpt:
      "Pogledajte kako pametne brave pojednostavljuju upravljanje Airbnb smještajem – omogućuju brži check-in, veću sigurnost i bolje iskustvo za goste.",
    dateLabel: "5. veljače 2026.",
    readTimeLabel: "7 min čitanja"
  },
  {
    slug: "sigurnost-pametnih-brava-kljucne-informacije",
    title: "Sigurnost pametnih brava: ključne informacije",
    category: "Sigurnost",
    imageSrc: "/images/blog/blog-sigurnost-pametnih-brava.png",
    imageAlt: "Digitalna sigurnost i kontrola pristupa pametne brave",
    excerpt:
      "Detaljan pregled sigurnosnih aspekata pametnih brava – kako funkcionira enkripcija, kako se zaštititi od neovlaštenog pristupa i koje su preporučene sigurnosne mjere.",
    dateLabel: "30. siječnja 2026.",
    readTimeLabel: "6 min čitanja"
  },
  {
    slug: "pametne-brave-za-hotele-kako-odabrati-pravo-rjesenje",
    title: "Pametne brave za hotele: kako odabrati pravo rješenje",
    category: "Primjena u praksi",
    imageSrc: "/images/blog/blog-hoteli-pametne-brave.png",
    imageAlt: "Hotelski hodnik i elektronička brava na sobama",
    excerpt:
      "Sve što hoteli trebaju znati prije implementacije pametnih brava – prednosti, mogućnosti integracije i savjeti za uspješnu primjenu.",
    dateLabel: "25. siječnja 2026.",
    readTimeLabel: "8 min čitanja"
  },
  {
    slug: "kako-izabrati-idealnu-pametnu-bravu-za-dom",
    title: "Kako izabrati idealnu pametnu bravu za dom?",
    category: "Vodiči",
    imageSrc: "/images/blog/blog-pametna-brava-dom.png",
    imageAlt: "Obiteljska kuća s pametnom bravom na ulaznim vratima",
    excerpt:
      "Pregled najvažnijih kriterija pri kupnji pametne brave – vrste, funkcionalnosti, kompatibilnost i omjer cijene i kvalitete.",
    dateLabel: "20. siječnja 2026.",
    readTimeLabel: "7 min čitanja"
  },
  {
    slug: "pametne-brave-sto-su-i-kako-rade",
    title: "Pametne brave: što su i kako rade?",
    category: "Edukacija",
    imageSrc: "/images/blog/blog-sto-su-pametne-brave.png",
    imageAlt: "Pregled dijelova pametne brave — kako radi",
    excerpt:
      "Upoznajte se s osnovama pametnih brava – tehnologija iza njih, način rada i razlozi zašto postaju standard u modernim objektima.",
    dateLabel: "15. siječnja 2026.",
    readTimeLabel: "5 min čitanja"
  }
] as const;

export type BlogPost = (typeof BLOG_POSTS)[number];
