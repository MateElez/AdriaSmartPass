/** Metapodaci za kartice i liste — bez punog teksta članka (učitava se zasebno na stranici članka). */
export const BLOG_POSTS = [
  {
    slug: "odrzavanje-pametnih-brava-najcesci-problemi-i-rjesenja",
    title: "Održavanje video sustava: najčešći problemi i rješenja",
    category: "Tehnički vodiči",
    imageSrc: "/images/placeholders/blog-security.svg",
    imageAlt: "Servis video nadzora — pouzdan rad kamera i pohrane",
    excerpt:
      "CCTV optimization u praksi: od diskova i zagušenja mreže do noćne slike koja gubi oštrinu. Što provjeriti prije sezone da remote monitoring i snimanje budu pouzdani.",
    dateLabel: "10. veljače 2026.",
    readTimeLabel: "6 min čitanja"
  },
  {
    slug: "pametne-brave-u-airbnb-apartmanima",
    title: "Video nadzor u vilama i apartmanima za kratkoročni najam",
    category: "Primjena u praksi",
    imageSrc: "/images/placeholders/blog-security.svg",
    imageAlt: "Eksterijer smještaja za najam s diskretnim video nadzorom",
    excerpt:
      "Security system design za rentals: gdje staviti kamere, kako definirati zone i kako osigurati remote monitoring koji vlasnicima daje full property visibility bez invazivnog nadzora unutrašnjosti apartmana.",
    dateLabel: "5. veljače 2026.",
    readTimeLabel: "7 min čitanja"
  },
  {
    slug: "sigurnost-pametnih-brava-kljucne-informacije",
    title: "Sigurnost i privatnost video nadzora: što morate znati",
    category: "Sigurnost",
    imageSrc: "/images/placeholders/blog-security.svg",
    imageAlt: "Zaštita podataka i pristup monitoring sustavu",
    excerpt:
      "Property security i privatnost: enkripcija prijenosa, role-based pristupi, audit log i GDPR-aware postavljanje kamera — kako remote monitoring ostaje siguran i audit-friendly.",
    dateLabel: "30. siječnja 2026.",
    readTimeLabel: "6 min čitanja"
  },
  {
    slug: "pametne-brave-za-hotele-kako-odabrati-pravo-rjesenje",
    title: "Smart security za hotele: kako odabrati video i monitoring sustav",
    category: "Primjena u praksi",
    imageSrc: "/images/placeholders/blog-security.svg",
    imageAlt: "Hotelski zajednički prostor s profesionalnim nadzorom",
    excerpt:
      "Security system design za hotelske operacije: 24/7 monitoring, workflow smjena i SLA za incident escalation. Ujednačen remote monitoring za recepciju, housekeeping i leadership timove.",
    dateLabel: "25. siječnja 2026.",
    readTimeLabel: "8 min čitanja"
  },
  {
    slug: "kako-izabrati-idealnu-pametnu-bravu-za-dom",
    title: "Kako odabrati video nadzor za luksuznu nekretninu?",
    category: "Vodiči",
    imageSrc: "/images/placeholders/blog-security.svg",
    imageAlt: "Vila s pažljivo postavljenim IP kamerama na perimetru",
    excerpt:
      "CCTV optimization za luksuzne nekretnine: raspored kamera, noćna izvedba (IR/WDR), PoE infrastruktura i politika čuvanja. Dizajn koji podržava security system decisions kroz remote monitoring.",
    dateLabel: "20. siječnja 2026.",
    readTimeLabel: "7 min čitanja"
  },
  {
    slug: "pametne-brave-sto-su-i-kako-rade",
    title: "Što je moderan IP video nadzor i kako funkcionira?",
    category: "Edukacija",
    imageSrc: "/images/placeholders/blog-security.svg",
    imageAlt: "Pregled komponenti sustava video nadzora",
    excerpt:
      "Security system design od kamere do NVR-a i oblaka: osnovni pojmovi, remote monitoring logika i što znači imati skalabilnu property security arhitekturu za više lokacija.",
    dateLabel: "15. siječnja 2026.",
    readTimeLabel: "5 min čitanja"
  }
] as const;

export type BlogPost = (typeof BLOG_POSTS)[number];
