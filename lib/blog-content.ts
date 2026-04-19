import type { BlogPost } from "./blog-meta";

/**
 * Puni tekstovi članaka (Markdown bez H1 — naslov je u zaglavlju stranice).
 * Uvozi se samo u `app/blog/[slug]` da se ne vuče na početnu / u klijentski bundle.
 */
export const BLOG_POST_MARKDOWN: Record<BlogPost["slug"], string> = {
  "odrzavanje-pametnih-brava-najcesci-problemi-i-rjesenja": `Pametne brave su pouzdane za svakodnevno korištenje, ali kao i svaka tehnologija, zahtijevaju osnovno održavanje kako bi radile bez problema.

## Najčešći problemi

**1. Pražnjenje baterije**
Najčešći razlog prestanka rada. Većina brava šalje upozorenje na vrijeme.
**Rješenje:** Redovito provjeravajte stanje baterije i zamijenite je čim dobijete upozorenje.

**2. Problemi s povezivanjem (app / WiFi / Bluetooth)**
Ponekad se brava ne povezuje s aplikacijom.
**Rješenje:** provjerite internet ili Bluetooth, resetirajte vezu i ažurirajte aplikaciju.

**3. Mehaničko zapinjanje vrata**
Ako vrata nisu dobro podešena, brava može teže raditi.
**Rješenje:** provjerite poravnanje vrata i brave.

**4. Nevažeći kod ili kartica**
Korisnici ne mogu ući.
**Rješenje:** provjerite postavke pristupa i vrijeme važenja.

## Kako izbjeći probleme

* Redovito mijenjajte baterije
* Povremeno testirajte pristup
* Ažurirajte sustav
* Postavite jasna pravila pristupa

## Zaključak

Većina problema je jednostavna za riješiti. Uz osnovno održavanje, pametna brava radi pouzdano i dugoročno.`,
  "pametne-brave-u-airbnb-apartmanima": `U kratkoročnom najmu, brz i jednostavan check-in postaje standard. Pametne brave to omogućuju bez fizičkog kontakta i bez ključeva.

## Kako funkcionira

Gost prije dolaska dobije kod za ulaz ili digitalni pristup putem aplikacije. Ulazak je moguć u bilo koje vrijeme, bez čekanja.

## Prednosti za vlasnike

* Nema predaje ključeva
* Fleksibilan check-in
* Manje stresa i poziva
* Veća sigurnost (kod se deaktivira nakon odlaska)

## Prednosti za goste

* jednostavan ulaz
* bez čekanja
* jasne upute

## Zaključak

Pametne brave pojednostavljuju upravljanje apartmanom i poboljšavaju iskustvo gostiju.`,
  "sigurnost-pametnih-brava-kljucne-informacije": `Jedno od najčešćih pitanja je: jesu li pametne brave sigurne? Kratki odgovor: da — uz pravilnu konfiguraciju.

## Kako funkcionira sigurnost

Pametne brave koriste enkripciju, kontrolu pristupa i evidenciju ulazaka.

## Što ih čini sigurnima

* Kontrolirani pristup
* Vremenska ograničenja
* Mogućnost ukidanja pristupa
* Evidencija ulazaka

## Na što treba paziti

* koristite jake kodove
* redovito mijenjajte pristupe
* ne dijelite pristup bez kontrole

## Zaključak

Pametne brave mogu biti sigurnije od klasičnih ključeva — ako su pravilno postavljene.`,
  "pametne-brave-za-hotele-kako-odabrati-pravo-rjesenje": `Hoteli imaju specifične zahtjeve kada je u pitanju kontrola pristupa.

## Što treba uzeti u obzir

* broj soba i korisnika
* upravljanje osobljem
* integracije s booking sustavima

## Prednosti

* brži check-in
* manje operativnog rada
* bolja kontrola pristupa
* veća sigurnost

## Zaključak

Dobro postavljen sustav štedi vrijeme osoblju i poboljšava iskustvo gostiju.`,
  "kako-izabrati-idealnu-pametnu-bravu-za-dom": `Odabir pametne brave ovisi o nekoliko ključnih faktora.

## Bitni kriteriji

* vrsta vrata
* način otključavanja (PIN, kartica, aplikacija)
* povezivost (Bluetooth, WiFi)
* sigurnosne opcije
* jednostavnost korištenja

## Zaključak

Najbolja pametna brava je ona koja odgovara vašim stvarnim potrebama.`,
  "pametne-brave-sto-su-i-kako-rade": `Pametne brave omogućuju ulaz bez ključa koristeći digitalne metode pristupa.

## Kako rade

Koriste PIN kod, karticu ili mobilnu aplikaciju za upravljanje pristupom.

## Gdje se koriste

* apartmani
* kuće
* hoteli
* uredi

## Prednosti

* nema ključeva
* jednostavan pristup
* kontrola na daljinu
* veća sigurnost

## Zaključak

Pametne brave pojednostavljuju svakodnevni pristup i postaju standard u modernim objektima.`
};
