import type { LeadStatusValue, ProjectTypeValue } from "@/types/enums";

export const PROJECT_TYPE_OPTIONS: Array<{ value: ProjectTypeValue; label: string }> = [
  { value: "APARTMENT", label: "Stan" },
  { value: "AIRBNB", label: "Apartman" },
  { value: "HOTEL", label: "Hotel" },
  { value: "OFFICE", label: "Ured" },
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
    slug: "ugradnja-pametnih-brava",
    title: "Ugradnja pametnih brava",
    description:
      "Ugradnja rješenja za ulaz bez ključeva, prilagođena vašem objektu i načinu najma.",
    details:
      "Check-in bez čekanja: jasna pravila za goste, čistače i vlasnika te upute koje odmah koristite. Izvedba na lokaciji uglavnom stane u jedan dolazak.",
    includes: [
      "Procjena vrata i navika korištenja (gosti, čistači, osoblje)",
      "Ugradnja i testiranje pristupa na lokaciji",
      "Postavljanje korisnika i kratka edukacija"
    ],
    imageSrc: "/images/service-ugradnja-pametnih-brava.png",
    imageAlt: "Pametna brava na modernim vratima"
  },
  {
    slug: "sustavi-kontrole-pristupa",
    title: "Sustavi kontrole pristupa",
    description:
      "Pristup za više osoba i uloga — bez stalnog dijeljenja i skupljanja ključeva.",
    details:
      "Česte promjene korisnika bez kaosa koordinacije: prava po osobi i vremenu, vi zadržavate pregled.",
    includes: [
      "Organizacija pristupa po ulogama i vremenu (gost/čistač/osoblje)",
      "Jednostavno dodavanje i ukidanje pristupa bez fizičkih ključeva",
      "Postavljanje pravila pristupa i upute za rad"
    ],
    imageSrc: "/images/service-sustavi-kontrole-pristupa.png",
    imageAlt: "Sustav pristupa s tipkovnicom i čitačem na ulazu"
  },
  {
    slug: "retrofit-pametnih-cilindara",
    title: "Retrofit pametnih cilindara",
    description:
      "Nadogradnja postojećih vrata na pametan pristup, bez nepotrebnih zahvata.",
    details:
      "Zadržite postojeća vrata — brz put do ulaza bez ključa, pouzdano u svakodnevici.",
    includes: [
      "Procjena kompatibilnosti i prijedlog rješenja",
      "Ugradnja uz minimalne zahvate i urednu izvedbu",
      "Provjera rada i upute za korištenje"
    ],
    imageSrc: "/images/service-retrofit-cilindara.png",
    imageAlt: "Pametni cilindar na suvremenim vratima s diskretnim retro tonom"
  },
  {
    slug: "odrzavanje-i-podrska",
    title: "Održavanje i podrška",
    description:
      "Brza pomoć, promjene pristupa i miran rad sustava nakon ugradnje.",
    details:
      "Kad se najam mijenja: prilagodba korisnika i postavki te situacija na terenu — pristup ostaje pouzdan.",
    includes: [
      "Promjene korisnika i pravila pristupa",
      "Provjere, podešavanja i rješavanje problema",
      "Podrška na daljinu ili na lokaciji po potrebi"
    ],
    imageSrc: "/images/service-odrzavanje-podrska.png",
    imageAlt: "Tehničar prilagođava pametnu bravu na vratima na lokaciji"
  },
  {
    slug: "sigurnosno-savjetovanje",
    title: "Sigurnosno savjetovanje",
    description:
      "Jasna preporuka prije ulaganja — što ima smisla za vaš objekt i način rada.",
    details:
      "Prije ulaganja: konkretan prijedlog, plan izvedbe i logika pristupa jednostavna za održavanje.",
    includes: [
      "Procjena objekta i scenarija korištenja (gosti, čistači, osoblje)",
      "Prijedlog opreme i načina pristupa (što, gdje i zašto)",
      "Plan koraka za ugradnju i postavljanje"
    ],
    imageSrc: "/images/service-sigurnosno-savjetovanje.png",
    imageAlt: "Tim uz stol pregledava planove i tehničku dokumentaciju za pristup"
  }
];

export const PRODUCT_CATEGORIES = [
  {
    title: "Pametne brave",
    description:
      "Baterijski i žičani sustavi brava s udaljenim upravljanjem, pristupom za goste i evidencijom ulazaka.",
    imageSrc: "/images/kategorije/kategorija-pametne-brave.png",
    imageAlt: "Pametna brava na ulazu"
  },
  {
    title: "Tipkovnice i čitači",
    description:
      "Sigurne PIN, RFID i višefaktorske kontrole pristupa za objekte s čestim promjenama korisnika i uredske ulaze.",
    imageSrc: "/images/kategorije/kategorija-tipkovnice-citaci.png",
    imageAlt: "Tipkovnica i RFID čitač za kontrolu pristupa"
  },
  {
    title: "Cilindri",
    description:
      "Pametni cilindri spremni za retrofit koji zadržavaju postojeća vrata uz modernu kontrolu pristupa.",
    imageSrc: "/images/kategorije/kategorija-cilindri.png",
    imageAlt: "Moderni pametni cilindar s LED indikatorom na suvremenim vratima"
  },
  {
    title: "Sustavi kontrole pristupa",
    description:
      "Centralizirani sustavi s skalabilnim dozvolama za upravljanje pristupom na više lokacija.",
    imageSrc: "/images/kategorije/kategorija-kontrola-pristupa.png",
    imageAlt: "Ulaz u objekt s PIN tipkovnicom i RFID čitačem u svakodnevnoj upotrebi"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    title: "Brza procjena",
    description: "Pregledamo vrata i način rada u objektu te predložimo što ima smisla."
  },
  {
    title: "Dogovor rješenja",
    description: "Definiramo pristup za goste, čistače i vlasnika — jasno i bez improvizacije."
  },
  {
    title: "Ugradnja",
    description:
      "Konfiguriramo i testiramo sve na licu mjesta — tipično sve u jednom dolasku. Kad vrata dopuštaju, izbjegavamo bušenje kovine; ulaz može raditi i kad u tom trenutku nema mreže, ovisno o načinu pristupa koji odaberemo."
  },
  {
    title: "Postavljanje i podrška",
    description: "Podesimo pravila pristupa, pokažemo korištenje i ostanemo dostupni za promjene."
  }
];

/** Jedna brojka + konkretan ishod (sekcija Povjerenje). */
export const SOCIAL_PROOF_MAIN_STAT = { label: "Instalirano u", value: "50+ objekata" } as const;

export const SOCIAL_PROOF_OUTCOME = "Manje poziva i dogovaranja oko check-ina.";

export const TESTIMONIALS = [
  {
    quote:
      "Imali smo 20+ check-inova tjedno — sada gotovo nula poziva oko ključa. Gosti znaju upute, a čistač ima svoj termin.",
    attribution: "vlasnik apartmana, Zadar"
  },
  {
    quote:
      "Airbnb gosti uđu sami, čistač dolazi u dogovoreno vrijeme. Više ne živim u porukama o ključu.",
    attribution: "vlasnik Airbnb smještaja, Split"
  },
  {
    quote: "Živim u inozemstvu — pristup za nove goste riješim u par minuta, bez nekoga tko predaje ključ.",
    attribution: "vlasnik, udaljeno upravljanje"
  }
] as const;

export const FAQ_ITEMS = [
  {
    question: "Što ako internet ne radi?",
    answer:
      "Pristup se postavlja prema dogovoru (npr. kod ili kartica). Internet nije nužan za osnovni ulaz — gdje model dopušta, mogući su offline kodovi kad mreže nema."
  },
  {
    question: "Koliko traje baterija u praksi?",
    answer:
      "Ovisno o modelu i broju ulazaka, često nekoliko mjeseci do godine ili više. Sustav na vrijeme upozori; zamjena je jednostavna."
  },
  {
    question: "Može li na postojeća vrata?",
    answer:
      "U većini slučajeva da. Na procjeni provjerimo vrata i cilindar te predložimo rješenje bez nepotrebnih zahvata."
  },
  {
    question: "Koliko traje ugradnja?",
    answer:
      "Uobičajeno 1–2 sata u jednom terminu. Duljina ovisi o vratima i rješenju; cilj je završiti bez zastoja u najmu."
  },
  {
    question: "Je li sigurno?",
    answer:
      "Da. Pristupi se mogu ograničiti po osobi i vremenu, a vi zadržavate kontrolu i mogućnost ukidanja kad god treba."
  },
  {
    question: "Što ako gost ne zna koristiti?",
    answer:
      "Upute šaljemo jasno i kratko (npr. u poruci za gosta). Možemo dogovoriti i jednostavan podsjetnik ili kratku pomoć — ako zapne, dostupni smo za brzu pomoć."
  },
  {
    question: "Može li se povezati s Booking ili Airbnb?",
    answer:
      "Sustav rješava ulaz i pristup; rezervacije i kalendar i dalje idu kroz platformu koja vam odgovara. Povezivanje ovisi o odabranom modelu — na procjeni kažemo što je realno za vaš objekt."
  }
] as const;
