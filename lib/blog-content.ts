import type { BlogPost } from "./blog-meta";

/**
 * Puni tekstovi članaka (Markdown bez H1 — naslov je u zaglavlju stranice).
 * Uvozi se samo u `app/blog/[slug]` da se ne vuče na početnu / u klijentski bundle.
 */
export const BLOG_POST_MARKDOWN: Record<BlogPost["slug"], string> = {
  "odrzavanje-pametnih-brava-najcesci-problemi-i-rjesenja": `Profesionalni video nadzor pouzdano radi mjesecima, ali diskovi, mreža i okoliš traže povremenu pažnju — posebno na objektima s jakom sezonom.

U praksi, CCTV optimization znači da noćna slika, mrežni promet i pohrana rade u pravom scenariju — ne samo „na testu”.

## Najčešći problemi

**1. Disk pun ili u upozorenju**
NVR prestaje snimati ili briše starije zapise prije dogovorenog roka.
**Rješenje:** Provjerite politiku zadržavanja i rezervu kapaciteta; planirajte proširenje prije vrhunca sezone.

**2. Nestabilna mreža ili VLAN**
Kamera „šeta” izvan pogleda ili kasni live pregled.
**Rješenje:** Provjerite PoE switch, kablove i opterećenje linka; izolirajte video promet gdje je moguće.

**3. Loša noćna slika ili zamućenje**
Kondenzacija, refleksije ili pogrešan kut montaže.
**Rješenje:** Čišćenje optike, podešavanje WDR/IR ili premještaj ako je zona osvijetljena protustranjem.

**4. Zastarjeli firmware**
Proizvođači zatvaraju ranjivosti ažuriranjima.
**Rješenje:** Zakazana sezona održavanja — test na jednoj kameri prije masovnog rollouta.

## Kako izbjeći probleme

* Jednom kvartalno: vizualni pregled kritičnih snimaka (jesu li svi kanali „živi”)
* Jednom godišnje: provjera UPS-a i ventilacije racka
* Dokumentirajte tko ima administratorski pristup monitoring sustavu

## Zaključak

Uz predvidljivo održavanje, monitoring sustavi ostaju dokazni alat za incidente — ne izvor stresa kad zatrebate snimku.`,
  "pametne-brave-u-airbnb-apartmanima": `Ville i dizajn-apartmani za najam traže diskretnu, ali uvjerljivu property security — gosti žele privatnost, vi želite kontekst ako nešto pođe po zlu.

Uz remote monitoring i jasan monitoring plan, odluke se donose iz provjerenog zapisa kad god se dogodi incident.

## Što obično nadziremo

Eksterijer, ulazi, parking i zajednički prostori (bazen, terasa). Unutrašnjost jedinica ostaje izvan kadra osim ako postoji izričit poslovni razlog i transparentna politika.

## Prednosti za operativu najma

* Brza provjera događaja bez fizičkog dolaska na lokaciju
* Jedinstvena slika za tim za najam i facility
* Manje sporova „što se dogodilo” — snimka kao objektivan trag

## Prednosti za brend

* Premium dojam uz profesionalno postavljene kamere
* Skladnije s policyjem osiguranja za luksuzni segment

## Zaključak

Video nadzor nije zamjena za gostoljubivost — ali jest standard za smart security u portfelju nekretnina koji želite štititi na razini B2B očekivanja.`,
  "sigurnost-pametnih-brava-kljucne-informacije": `Vlasnici često pitaju: je li video nadzor siguran kao koncept? Kratki odgovor: da — uz strogo upravljanje korisničkim računima, fizičku zaštitu racka i svjesno crtanje zona snimanja.

## Slojevi zaštite

Šifrirani prijenos (TLS gdje platforma podržava), jake administratorske lozinke, 2FA na oblaku i segmentirana mreža za kamere.

## Što čini sustav otpornijim

* Minimalni broj admin naloga
* Zaključani ormari za NVR
* Redovita zamjena defaultnih lozinki
* Jasna pravila tko smije eksportirati snimke

## Privatnost

Informirajte goste gdje je nadzor aktivan; izbjegavajte zone očekivanja privatnosti bez pravne osnove.

## Zaključak

Smart security je siguran koliko je dobro projektiran — tehnički, organizacijski i kroz remote monitoring koji je audit-friendly.`,
  "pametne-brave-za-hotele-kako-odabrati-pravo-rjesenje": `Hoteli i boutique smještaj traže monitoring sustav koji podržava 24/7 operaciju i različite uloge osoblja — bez da svaka smjena dijeli isti administratorski račun.

Remote monitoring omogućuje smjenama da rade na istoj istini incidenta, bez „različitih verzija” događaja.

## Na što obratiti pažnju

Kapacitet NVR-a vs. broj kanala, rezolucija za kasniji zoom na registracijske ploče te redundantnost napajanja za kritične kamere.

## Prednosti za leadership

* Jedinstven incident timeline za sigurnost i front office
* Dokumentacija za osiguranje i revizije
* Skalabilnost kad dodajete krilo ili partnerski objekt

## Zaključak

Dobro odabran video nadzor smanjuje šum u komunikaciji između smjena i daje vlasnicima mir tijekom noći.`,
  "kako-izabrati-idealnu-pametnu-bravu-za-dom": `Luksuzna nekretnina ili portfelj vila zahtijeva više od komercijalnog „WiFi kompleta”. Evo što odvaja amatersku kupnju od premium smart property security.

CCTV optimization u praksi znači ciljanu montažu, realnu noćnu izvedbu i plan pohrane koji ne iznenadi u vrhuncu.

## Bitni kriteriji

* Svjetlosni uvjeti i IR domet po lokaciji
* Integracija s postojećom mrežom i redundantnost linka
* Trajanje čuvanja i gdje fizički leže zapisi
* Mogućnost centralnog monitoringa ako imate više adresa
* Diskretna estetika montaže

## Zaključak

Najbolji sustav je onaj koji odgovara vašem scenariju najma — ne najskuplji paket iz kataloga.`,
  "pametne-brave-sto-su-i-kako-rade": `Moderan IP video nadzor pretvara svjetlosni signal u digitalni zapis koji pohranjujete lokalno, u oblaku ili kombinirano — uz role-based ovlasti za vaš tim.

U pozadini je security system design koji omogućuje remote monitoring i skaliranje lokacija.

## Kako funkcionira ukratko

Kamera enkodira sliku, šalje je preko mreže na NVR ili servis; aplikacija ili VMS prikazuju live i playback uz traženje po vremenu ili pokretu.

## Gdje se koristi u nekretninama

Ville, luksuzni apartmani, boutique hoteli, poslovni kampusi i zajednički prostori najma.

## Prednosti

* Dokumentacija događaja
* Udaljeni monitoring sustavi za vlasnike u drugoj vremenskoj zoni
* Skalabilnost broja lokacija u jednom sučelju

## Zaključak

Video nadzor je temeljni sloj smart security strategije za profesionalno upravljane nekretnine.`
};
