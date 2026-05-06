import type { LeadStatusValue, ProjectTypeValue } from "@/types/enums";

export const PROJECT_TYPE_OPTIONS: Array<{ value: ProjectTypeValue; label: string }> = [
  { value: "APARTMENT", label: "Apartman" },
  { value: "AIRBNB", label: "Vila" },
  { value: "HOTEL", label: "Hotel" },
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
    title: "Video nadzor",
    description:
      "Projektiranje i ugradnja video nadzora za jasan pregled i pouzdan zapis događaja.",
    details:
      "Sustav planiramo prema rasporedu objekta, ključnim zonama i uvjetima rada danju i noću.",
    includes: [
      "Plan pokrivenosti ulaza, perimetra i zajedničkih zona",
      "Ugradnju kamera, pohrane i konfiguraciju sustava",
      "Testiranje, predaju i osnovnu obuku korisnika"
    ],
    imageSrc: "/images/placeholders/service-security.svg",
    imageAlt: "Profesionalna IP kamera na fasadi luksuznog smještaja"
  },
  {
    slug: "remote-property-monitoring",
    title: "Udaljeni nadzor objekta",
    description:
      "Udaljeni nadzor objekta s live pregledom i pristupom s bilo koje lokacije.",
    details:
      "Idealan za vlasnike i operativu koji ne mogu uvijek biti fizički prisutni.",
    includes: [
      "Mobilni i desktop pristup sustavu",
      "Obavijesti i upozorenja za odabrane zone",
      "Centralni pregled jedne ili više lokacija"
    ],
    imageSrc: "/images/placeholders/service-security.svg",
    imageAlt: "Centralizirani monitoring na više ekrana u tehničkoj prostoriji"
  },
  {
    slug: "perimeter-security-systems",
    title: "Zaštita perimetra",
    description: "Zaštita ključnih vanjskih zona, prilaza i ulaza u objekt.",
    details:
      "Sustav planiramo tako da pruža jasan pregled kritičnih točaka tijekom dana i noći.",
    includes: [
      "Analizu perimetra i kritičnih zona",
      "Optimizaciju nadzora za noćne uvjete",
      "Testiranje pokrivenosti i vidljivosti prije predaje"
    ],
    imageSrc: "/images/placeholders/service-security.svg",
    imageAlt: "Tehničar postavlja novu kameru uz postojeću infrastrukturu"
  },
  {
    slug: "smart-security-integration",
    title: "Integrirani sigurnosni sustavi",
    description:
      "Sustavi spremni za buduće nadogradnje poput alarma, kontrole pristupa i automatizacije.",
    details:
      "Projektiramo infrastrukturu koja može rasti s objektom i potrebama poslovanja.",
    includes: [
      "Plan budućih nadogradnji i integracija",
      "Strukturu pristupa i korisničkih prava",
      "Standardizaciju za više objekata"
    ],
    imageSrc: "/images/placeholders/service-security.svg",
    imageAlt: "Servis tehničara uz rack s NVR opremom"
  },
  {
    slug: "security-consultation-system-design",
    title: "Sigurnosno savjetovanje",
    description: "Procjena objekta i plan sigurnosnog sustava prije ulaganja u opremu.",
    details:
      "Jasan prijedlog što ima smisla, gdje i zašto — bez nepotrebne opreme.",
    includes: [
      "Procjenu objekta i načina korištenja",
      "Preporuku sustava i rasporeda opreme",
      "Plan implementacije i okvir investicije"
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
    title: "Procjena objekta i rizika",
    description:
      "Pregledavamo raspored objekta, ključne zone i način korištenja prostora."
  },
  {
    title: "Projektiranje sustava",
    description:
      "Planiramo raspored opreme, pokrivenost zona i način upravljanja sustavom."
  },
  {
    title: "Ugradnja i puštanje u rad",
    description:
      "Instaliramo opremu, konfiguriramo sustav i testiramo rad u realnim uvjetima."
  },
  {
    title: "Predaja i podrška",
    description:
      "Predajemo sustav, obučavamo korisnike i ostajemo dostupni za prilagodbe."
  }
];

/** Brojka + podnaslov (sekcija Povjerenje). */
export const SOCIAL_PROOF_MAIN_STAT = {
  headline: "50+ objekata",
  body: "Vile, apartmani, hoteli i manji poslovni objekti diljem Hrvatske."
} as const;

export const SOCIAL_PROOF_OUTCOME =
  "Manje nejasnoća u svakodnevnom radu, brža provjera situacija i pouzdan pregled događaja kad je potreban konkretan dokaz.";

export const TESTIMONIALS = [
  {
    quote:
      "Kod više vila najviše nam znači što sve možemo provjeriti iz jednog sustava. Kad se nešto dogodi, odmah imamo pregled situacije bez deset poziva i nagađanja.",
    attribution: "vlasnik rental objekata, Zadar"
  },
  {
    quote:
      "Noćna smjena i management imaju isti pregled nad ključnim zonama objekta. Sve je jednostavnije kad postoji jasan zapis događaja.",
    attribution: "hotel operations manager, Split"
  },
  {
    quote:
      "Živim izvan Hrvatske pa mi je udaljeni pregled objekta velika sigurnost. Ne moram za svaku situaciju organizirati fizički obilazak.",
    attribution: "vlasnik vile, remote upravljanje"
  }
] as const;

export const FAQ_ITEMS = [
  {
    question: "Kako funkcionira sustav video nadzora?",
    answer:
      "Kamere snimaju i spremaju video zapis putem lokalne pohrane, mrežnog snimača ili kombiniranog sustava.\n\nSustav omogućuje live pregled, pregled snimki i udaljeni pristup s mobitela ili računala."
  },
  {
    question: "Mogu li pratiti objekt na daljinu?",
    answer:
      "Da.\n\nObjekt možete pratiti putem mobitela ili računala — uživo ili kroz pregled snimki. Pristup se može prilagoditi po korisnicima, primjerice za vlasnika, management ili osoblje."
  },
  {
    question: "Koliko dugo se čuvaju snimke?",
    answer:
      "To ovisi o broju kamera, kvaliteti snimanja i kapacitetu pohrane.\n\nSustav planiramo prema objektu i vašim potrebama — od nekoliko dana do više tjedana pohrane."
  },
  {
    question: "Što ako nestane interneta?",
    answer:
      "Ako objekt koristi lokalnu pohranu, sustav nastavlja snimati i bez interneta.\n\nInternet je potreban za udaljeni pristup i pregled sustava izvan lokacije."
  },
  {
    question: "Što ako nestane struje?",
    answer:
      "Za važnije objekte preporučujemo dodatnu zaštitu napajanja (UPS) kako bi sustav ostao stabilan i tijekom kraćih prekida struje."
  },
  {
    question: "Je li video nadzor u skladu s privatnošću?",
    answer:
      "Da, uz pravilno planiranje sustava.\n\nKamere postavljamo tako da pokrivaju sigurnosno važne zone uz izbjegavanje privatnih prostora i nepotrebnog nadzora."
  },
  {
    question: "Tko može gledati snimke?",
    answer:
      "Pristup imaju samo osobe koje vi odredite.\n\nSustav se može organizirati tako da različiti korisnici imaju različite razine pristupa."
  },
  {
    question: "Mogu li više objekata pratiti iz jednog sustava?",
    answer:
      "Da.\n\nViše lokacija može se povezati u jedan pregled kako bi vlasnik ili management imali jednostavniji nadzor nad objektima."
  },
  {
    question: "Koliko traje ugradnja?",
    answer:
      "To ovisi o veličini objekta i kompleksnosti sustava.\n\nManji objekti često se mogu završiti u jednom danu, dok veći sustavi zahtijevaju više faza postavljanja i konfiguracije."
  },
  {
    question: "Treba li za ugradnju velika adaptacija objekta?",
    answer:
      "Ne nužno.\n\nKod velikog broja objekata sustav se može postaviti uz minimalne zahvate, ovisno o postojećoj infrastrukturi i rasporedu prostora."
  },
  {
    question: "Što preporučujete za vile i apartmane?",
    answer:
      "Najčešće preporučujemo pregled ključnih zona poput ulaza, parkinga, prilaza i zajedničkih vanjskih prostora — bez nepotrebnog pokrivanja privatnih dijelova objekta."
  },
  {
    question: "Može li se sustav kasnije proširiti?",
    answer:
      "Da.\n\nSustav se može nadograditi dodatnim kamerama, alarmom, kontrolom pristupa i drugim sigurnosnim rješenjima kako objekt raste ili se potrebe mijenjaju."
  },
  {
    question: "Trebam li video nadzor ako već imam alarm?",
    answer:
      "Alarm i video nadzor imaju različitu ulogu.\n\nAlarm upozorava na događaj, dok video nadzor daje pregled situacije i mogućnost provjere što se stvarno dogodilo."
  },
  {
    question: "Što ako ne znam koristiti sustav?",
    answer:
      "Nakon postavljanja pokazujemo osnovno korištenje sustava i način pregleda kamera i snimki.\n\nCilj je da sustav bude jednostavan za svakodnevno korištenje, bez nepotrebne kompleksnosti."
  },
  {
    question: "Nudite li podršku nakon ugradnje?",
    answer:
      "Da.\n\nDostupni smo za prilagodbe, pomoć oko pristupa korisnika, provjere sustava i buduće nadogradnje prema potrebama objekta."
  }
] as const;
