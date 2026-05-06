/** Metapodaci za kartice i liste — bez punog teksta članka (učitava se zasebno na stranici članka). */
export const BLOG_POSTS = [
  {
    slug: "gdje-postaviti-kamere-vila-apartman-smislen-nadzor",
    title: "Gdje postaviti kamere u vili ili apartmanu za smislen nadzor?",
    category: "Primjena u praksi",
    imageSrc: "/images/placeholders/blog-security.svg",
    imageAlt: "Video nadzor vile ili apartmana — smisleno postavljene zone",
    excerpt:
      "Pametno postavljen video nadzor daje pregled nad objektom bez osjećaja pretjeranog nadzora i bez narušavanja privatnosti gostiju.",
    dateLabel: "5. veljače 2026.",
    readTimeLabel: "7 min čitanja"
  },
  {
    slug: "kako-pripremiti-video-nadzor-sezona-promet-gostiju",
    title: "Kako pripremiti video nadzor za sezonu i veći promet gostiju",
    category: "Tehnički vodiči",
    imageSrc: "/images/placeholders/blog-security.svg",
    imageAlt: "Priprema video nadzora prije sezone — pohrana i mreža",
    excerpt:
      "Prije početka sezone vrijedi provjeriti radi li sustav stabilno — posebno pohrana, mreža i noćna slika.",
    dateLabel: "10. veljače 2026.",
    readTimeLabel: "6 min čitanja"
  },
  {
    slug: "tko-smije-gledati-snimke-nadzor-privatnost",
    title: "Tko smije gledati snimke i kako postaviti nadzor bez narušavanja privatnosti?",
    category: "Sigurnost",
    imageSrc: "/images/placeholders/blog-security.svg",
    imageAlt: "Pravila pristupa snimkama i privatnost u video nadzoru",
    excerpt:
      "Dobar video nadzor ne znači nadzirati sve. Najvažnije je jasno definirati tko ima pristup sustavu i koje zone stvarno imaju smisla pratiti.",
    dateLabel: "30. siječnja 2026.",
    readTimeLabel: "6 min čitanja"
  },
  {
    slug: "moderan-video-nadzor-vs-obicne-kamere",
    title: "Što danas razlikuje moderan video nadzor od „običnih kamera”?",
    category: "Edukacija",
    imageSrc: "/images/placeholders/blog-security.svg",
    imageAlt: "Moderni sustav video nadzora i mobilni pregled",
    excerpt:
      "Moderni video nadzor više nije samo snimanje slike. Razlika je u preglednosti, stabilnosti sustava i mogućnosti upravljanja objektom na daljinu.",
    dateLabel: "15. siječnja 2026.",
    readTimeLabel: "5 min čitanja"
  },
  {
    slug: "sto-hotel-treba-video-nadzora-visak",
    title: "Što hotel zapravo treba od video nadzora — a što je višak?",
    category: "Primjena u praksi",
    imageSrc: "/images/placeholders/blog-security.svg",
    imageAlt: "Hotelski video nadzor i operativa",
    excerpt:
      "Dobar hotelski video nadzor ne znači više kamera. Važnije je da sustav pomaže operativi i daje jasan pregled ključnih situacija.",
    dateLabel: "25. siječnja 2026.",
    readTimeLabel: "8 min čitanja"
  }
] as const;

export type BlogPost = (typeof BLOG_POSTS)[number];
