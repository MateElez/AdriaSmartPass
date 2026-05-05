import type { LeadStatusValue, ProjectTypeValue } from "@/types/enums";

export const PROJECT_TYPE_OPTIONS: Array<{ value: ProjectTypeValue; label: string }> = [
  { value: "APARTMENT", label: "Apartman / stan" },
  { value: "AIRBNB", label: "Villa / kratkoročni najam" },
  { value: "HOTEL", label: "Hotel ili boutique smještaj" },
  { value: "OFFICE", label: "Poslovni prostor" },
  { value: "OTHER", label: "Ostalo" }
];

export const LEAD_STATUS_OPTIONS: Array<{ value: LeadStatusValue; label: string }> = [
  { value: "NEW", label: "Novo" },
  { value: "CONTACTED", label: "Kontaktiran" },
  { value: "IN_PROGRESS", label: "U obradi" },
  { value: "WON", label: "Dobiveno" },
  { value: "LOST", label: "Izgubljeno" }
];

export const LEAD_STATUS_STYLES: Record<LeadStatusValue, string> = {
  NEW: "bg-sky-500/10 text-sky-300 border-sky-500/30",
  CONTACTED: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  IN_PROGRESS: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
  WON: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  LOST: "bg-rose-500/10 text-rose-300 border-rose-500/30"
};

export const SERVICE_ITEMS = [
  {
    slug: "video-surveillance-systems",
    title: "Video Surveillance Systems",
    description:
      "Premium sustavi video nadzora projektirani za sigurnost objekta i standarde hospitalityja.",
    details:
      "Ne radimo „instalaciju”. Radimo sustav: dizajn pokrivenosti, izbor opreme i deployment koji daje jasnu sliku događaja — danju i noću, u sezoni i izvan nje.",
    includes: [
      "Dizajn zona nadzora i matrica pokrivenosti (ulazi, perimetar, parking, zajednički prostori)",
      "Deployment kamera + pohrane (NVR/hibrid) i kalibracija slike (WDR/IR/noć)",
      "Predaja sustava s kontrolnom listom i obuka za ključne osobe"
    ],
    imageSrc: "/images/placeholders/service-security.svg",
    imageAlt: "Profesionalna IP kamera na fasadi luksuznog smještaja"
  },
  {
    slug: "remote-property-monitoring",
    title: "Remote Property Monitoring",
    description:
      "Real-time nadzor za vlasnike i operativu — jedna slika za jednu ili više lokacija.",
    details:
      "Uspostavljamo remote monitoring koji skraćuje reakciju: live pogled, pametne obavijesti i uvid u događaje bez fizičkog odlaska na lokaciju.",
    includes: [
      "Role-based uloge i pristupi (vlasnik, uprava, recepcija, tehničar)",
      "Pravila obavijesti (zone, raspored, prioritet) i incident flow",
      "Centralizirani pregled za više lokacija (dashboard, mobilni uvid)"
    ],
    imageSrc: "/images/placeholders/service-security.svg",
    imageAlt: "Centralizirani monitoring na više ekrana u tehničkoj prostoriji"
  },
  {
    slug: "perimeter-security-systems",
    title: "Perimeter Security Systems",
    description:
      "Zaštita perimetra i kritičnih zona oko objekta — dizajniran sloj odvraćanja i detekcije.",
    details:
      "Perimetar je mjesto gdje incident počinje. Projektiramo sustav koji daje rani signal i pregled događaja: ulazi, ograda, parking, servisni prilazi.",
    includes: [
      "Mapa perimetra i kritičnih točaka (prilazi, garaže, skladišta, zajedničke zone)",
      "Scenariji detekcije i noćni rad (IR, WDR, osvjetljenje gdje ima smisla)",
      "Deployment i testiranje na stvarnim scenarijima (lažno pozitivni vs. signal)"
    ],
    imageSrc: "/images/placeholders/service-security.svg",
    imageAlt: "Tehničar postavlja novu kameru uz postojeću infrastrukturu"
  },
  {
    slug: "smart-security-integration",
    title: "Smart Security Integration",
    description:
      "Future‑proof integracije: video nadzor kao jezgra, uz mogućnost proširenja na alarme i kontrolu pristupa.",
    details:
      "Dizajniramo sigurnosnu arhitekturu koja raste s vama. Integracije planiramo unaprijed, tako da novi slojevi ne ruše postojeći monitoring i operativu.",
    includes: [
      "Plan integracije (alarm, senzori, access control, smart locks) prema roadmapu",
      "Uloge i pravila: tko vidi što i kada (audit-friendly postavke)",
      "Dokumentacija sustava i standardizacija za portfelje"
    ],
    imageSrc: "/images/placeholders/service-security.svg",
    imageAlt: "Servis tehničara uz rack s NVR opremom"
  },
  {
    slug: "security-consultation-system-design",
    title: "Security Consultation & System Design",
    description:
      "Procjena rizika, dizajn sustava i izvedbeni plan — pripremljeno za vlasnika, upravu i budžetiranje.",
    details:
      "Konzultacije su mjesto gdje se štedi najviše: definicija ciljeva, zona, privatnosti i CAPEX/OPEX-a prije deploymenta. Dobivate jasan blueprint za premium smart security.",
    includes: [
      "Procjena objekta i operativnih scenarija (rental, hotel, poslovni timovi)",
      "Blueprint topologije (kamere, pohrana, mreža, napajanje, redundantnost)",
      "Plan faza deploymenta i okvir CAPEX/OPEX za donošenje odluke"
    ],
    imageSrc: "/images/placeholders/service-security.svg",
    imageAlt: "Tim pregledava tlocrte objekta i zonu video nadzora"
  }
];

export const PRODUCT_CATEGORIES = [
  {
    title: "IP kamere i video snimanje",
    description:
      "Od diskretnih dome kamera do robustnih vanjskih snimanja — rezolucija, IR i smart security funkcije za property portfolio.",
    imageSrc: "/images/placeholders/category-security.svg",
    imageAlt: "IP sigurnosna kamera na ulazu nekretnine"
  },
  {
    title: "NVR, pohrana i redundantnost",
    description:
      "Lokalna i hibridna pohrana s politikom zadržavanja snimaka prilagođenom hotelima, vilama i najmu.",
    imageSrc: "/images/placeholders/category-security.svg",
    imageAlt: "Uređaji za pohranu video zapisa u tehničkom ormaru"
  },
  {
    title: "Mreža, napajanje i infrastruktura",
    description:
      "PoE switchevi, backbone i uvjeti za pouzdan video nadzor na lokacijama bez prekida u sezoni.",
    imageSrc: "/images/placeholders/category-security.svg",
    imageAlt: "Mrežna infrastruktura za sigurnosne sustave"
  },
  {
    title: "Centralizirani monitoring i integracije",
    description:
      "Dashboard za više lokacija, mobilni pregled i priključak na alarm ili facility workflow gdje je smisleno.",
    imageSrc: "/images/placeholders/category-security.svg",
    imageAlt: "Sučelje za monitoring više kamera i lokacija"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    title: "Security assessment",
    description:
      "Radimo security assessment nekretnine: mapiramo rizik po zoni, analiziramo vrijedne točke i scenarije incidenta (rental, hotel, poslovni prostori)."
  },
  {
    title: "System design",
    description:
      "Definiramo sigurnosnu arhitekturu: preporučeni raspored kamera, monitoring plan, pohrana, pravila obavijesti i logika pregleda za tim."
  },
  {
    title: "System deployment",
    description:
      "Premium deployment sustava: postavljanje i spajanje video infrastrukture, kalibracija slike te provjera snimanja i detekcije u realnim uvjetima."
  },
  {
    title: "Setup & optimization",
    description:
      "Postavljamo monitoring pristup i optimiziramo tuning: role-based pregled, obavijesti po prioritetu i dorađivanje sustava dok radi stabilno — danju i noću."
  }
];

/** Jedna brojka + konkretan ishod (sekcija Povjerenje). */
export const SOCIAL_PROOF_MAIN_STAT = { label: "Instalirano u", value: "50+ objekata" } as const;

export const SOCIAL_PROOF_OUTCOME =
  "Full property visibility, remote security control i 24/7 monitoring capability — manje incidenata i brži sigurnosni odgovor, dokumentiran snimkama.";

export const TESTIMONIALS = [
  {
    quote:
      "U portfelju od šest vila konačno imamo jedinstven monitoring dashboard. Incident na bazenu riješimo brzim pregledom snimke i sigurnosnim uvidom, bez telefonskog maratona.",
    attribution: "vlasnik portfelja najma, Zadar"
  },
  {
    quote:
      "Boutique hotel — noćna smjena ima full property visibility na kritičnim zonama i opskrbnom hodniku u jednom sučelju. Osiguranje i tim za najam dobiju isti sigurnosni trag.",
    attribution: "operations manager, Split"
  },
  {
    quote:
      "Živim u inozemstvu: remote security control i 24/7 monitoring capability za kritične zone — bez delegiranja provjere na lokaciju. Dobivam sigurnosni pregled i obavijesti odmah.",
    attribution: "vlasnik vile, udaljeno upravljanje"
  }
] as const;

export const FAQ_ITEMS = [
  {
    question: "Kako funkcionira video nadzor sustav?",
    answer:
      "Kamere snimaju i šalju video preko mreže na pohranu (NVR, oblak ili hibrid). Monitoring platforma omogućuje live pregled, pregled snimaka po vremenu i događajima te upravljanje korisnicima i pravima pristupa."
  },
  {
    question: "Mogu li pratiti objekt na daljinu?",
    answer:
      "Da. Remote monitoring je standard: live pogled i pregled snimaka dostupni su na mobitelu i računalu, uz role-based pristupe (npr. vlasnik, uprava, recepcija, tehničar) i pravila obavijesti po zonama i prioritetu."
  },
  {
    question: "Koliko je siguran sustav nadzora?",
    answer:
      "Sigurnost ovisi o dizajnu i postavkama: segmentirana mreža za video promet, jake lozinke i 2FA gdje je dostupno, minimalan broj admin računa te kontrola tko smije gledati ili izvoziti snimke. Sustav postavljamo tako da bude audit-friendly za operativu i vlasnike."
  },
  {
    question: "Koliko dugo se čuvaju snimke?",
    answer:
      "Trajanje čuvanja definiramo prema vašem riziku i proceduri: od nekoliko dana do više tjedana ili mjeseci. U ponudi su jasno navedeni kapacitet, broj kanala, rezolucija i politika automatskog brisanja."
  },
  {
    question: "Što ako internet ili struja padnu?",
    answer:
      "Ovisno o arhitekturi. Lokalni NVR nastavlja snimati i bez interneta; za kritične lokacije preporučujemo UPS za pohranu i mrežnu opremu. Obavijesti i udaljeni pristup ovise o redundantnoj vezi (npr. backup internet) koju možemo planirati u dizajnu."
  },
  {
    question: "Je li video nadzor u skladu s privatnošću?",
    answer:
      "Da, uz pravilno postavljanje. Radimo po načelu najmanjeg opsega: javne i servisne zone jasno označene, izbjegavanje privatnih prostora gostiju bez opravdanog interesa te jasna politika tko i kada pristupa snimkama."
  },
  {
    question: "Tko sve može gledati snimke?",
    answer:
      "Samo korisnici koje vi odredite. Postavljamo role-based pristup (vlasnik, uprava, recepcija, facility/tehničar) i, gdje platforma podržava, audit log promjena i pregleda/izvoza snimki."
  },
  {
    question: "Može li se sustav proširiti na alarm / access control?",
    answer:
      "Da. Video surveillance i monitoring mogu biti jezgra, a sustav se može širiti na alarmne senzore i access control prema roadmapu. Bitno je planirati topologiju (mreža, napajanje, pohrana) unaprijed kako bi proširenje bilo „plug-in”, a ne novi projekt."
  }
] as const;
