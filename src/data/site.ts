/**
 * Sursa unică de adevăr pentru tot ce clientul poate vrea schimbat ulterior:
 * date de contact, program, servicii, recenzii, linkuri. Nimic de aici nu se
 * dublează în componente — la actualizare schimbi un singur fișier.
 */

/** Se schimbă cu domeniul real după ce e cumpărat, apoi redeploy. */
export const SITE_URL = "https://tudor-doc-vet.vercel.app";

export const BRAND = {
  name: "Tudor Doc Vet",
  legalName: "Tudor Doc-Vet SRL",
  vet: "Dr. Tudor Andrei",
  city: "Piatra Neamț",
  tagline: "Cabinet veterinar în Piatra Neamț — la cabinet și la domiciliu",
};

export const NAP = {
  street: "Str. Pictor Nicolae Grigorescu nr. 12",
  city: "Piatra Neamț",
  region: "Neamț",
  postalCode: "650066",
  country: "RO",
  phoneDisplay: "0740 318 815",
  phoneE164: "+40740318815",
  phoneSecondary: "0233 232 429",
  email: "andreitudorc@gmail.com",
  /** Aproximativ, str. Grigorescu, centru Piatra Neamț — de rafinat cu pinul real din GBP. */
  geo: { lat: 46.9286, lng: 26.3665 },
};

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Tudor+Doc-Vet+Strada+Pictor+Nicolae+Grigorescu+12+Piatra+Neamt";

/** wa.me pe numărul principal — de confirmat că are WhatsApp activ pe el. */
const waMessage = encodeURIComponent(
  "Bună ziua! Aș dori o programare la Tudor Doc Vet pentru animalul meu.",
);
export const WHATSAPP_URL = `https://wa.me/40740318815?text=${waMessage}`;

const waHome = encodeURIComponent(
  "Bună ziua! Aș dori o consultație la domiciliu prin Tudor Doc Vet.",
);
export const WHATSAPP_HOME_URL = `https://wa.me/40740318815?text=${waHome}`;

export const SOCIAL = {
  facebook: "https://www.facebook.com/TudorDocVet",
  instagram: "",
  email: "andreitudorc@gmail.com",
};

/**
 * Program — DE CONFIRMAT cu clientul înainte de publicarea finală.
 * Sursele publice diferă; aici e varianta cu program extins.
 */
export const SCHEDULE = {
  groups: [
    { label: "Luni – Vineri", hours: "07:00 – 21:00" },
    { label: "Sâmbătă – Duminică", hours: "09:00 – 17:00" },
  ],
  note: "Sună înainte să vii; pentru domiciliu stabilim ora împreună.",
  schema: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "21:00" },
    { days: ["Saturday", "Sunday"], opens: "09:00", closes: "17:00" },
  ],
};

/** Cele două lucruri care ne diferențiază — devin secțiuni-erou și pagini dedicate. */
export const DIFFERENTIATORS = [
  {
    id: "domiciliu",
    icon: "home" as const,
    kicker: "La tine acasă",
    title: "Venim la domiciliu",
    body: "Nu toți pacienții suportă bine drumul. Venim la tine cu tot ce trebuie pentru consultații, vaccinări și tratamente. Mai puțin stres pentru animal, zero drumuri pentru tine.",
    href: "/consultatii-la-domiciliu/",
  },
  {
    id: "ferma",
    icon: "barn" as const,
    kicker: "Companie și fermă",
    title: "Câini, pisici și animale de fermă",
    body: "Îngrijim deopotrivă animalele de companie și pe cele din gospodărie și fermă. Aceeași grijă și pentru pisica din casă, și pentru animalele din curte.",
    href: "/animale-de-ferma/",
  },
];

/** Serviciile reale, confirmate de client. Fără dotări inventate. */
export const SERVICES = [
  {
    id: "consultatii",
    icon: "stethoscope",
    name: "Consultații",
    lead: "Vii cu o grijă, pleci cu un plan.",
    body: "Consult complet, cu timp să întrebi tot ce te frământă. Pleci acasă știind ce are animalul, ce tratament urmează și la ce să fii atent.",
    points: ["Consult general și control de rutină", "Explicații pe înțelesul tău", "La cabinet sau la domiciliu"],
  },
  {
    id: "vaccinari",
    icon: "syringe",
    name: "Vaccinări",
    lead: "Protecție la timp, carnet la zi.",
    body: "Schemă de vaccinare potrivită vârstei și felului de viață al animalului, cu carnet de sănătate completat corect pentru călătorii și pensiune.",
    points: ["Câini, pisici și animale de fermă", "Carnet de sănătate și pașaport", "Îți amintim de rapel"],
  },
  {
    id: "sterilizari",
    icon: "scalpel",
    name: "Sterilizări",
    lead: "O intervenție de rutină, făcută cu grijă.",
    body: "Sterilizare pentru câini și pisici, cu pregătire atentă înainte și indicații clare pentru recuperare acasă. Îți spunem exact la ce să fii atent.",
    points: ["Pregătire și monitorizare", "Indicații clare de recuperare", "Programare din timp"],
  },
  {
    id: "microcipari",
    icon: "microchip",
    name: "Microcipări",
    lead: "Obligatoriu, rapid și fără durere.",
    body: "Aplicăm microcipul și îl înregistrăm în baza de date. Necesar pentru pașaport și pentru a-ți regăsi animalul dacă se pierde vreodată.",
    points: ["Aplicare rapidă", "Înregistrare în baza de date", "Pentru pașaport și călătorii"],
  },
  {
    id: "tratamente",
    icon: "pill",
    name: "Tratamente",
    lead: "Îl punem pe picioare, pas cu pas.",
    body: "Tratăm afecțiunile curente ale animalelor de companie și de fermă, cu deparazitare, medicație și monitorizare până se face bine.",
    points: ["Deparazitare internă și externă", "Medicație și pansamente", "Monitorizare pe parcurs"],
  },
  {
    id: "tunsori-igienice",
    icon: "scissors",
    name: "Tunsori igienice",
    lead: "Curat, îngrijit și în largul lui.",
    body: "Tuns și îngrijire igienică pentru câini și pisici, făcute calm. Blana îngrijită înseamnă mai puține noduri și o piele sănătoasă.",
    points: ["Tuns igienic pentru câini și pisici", "Tăiat unghii, curățat urechi", "Răbdare cu animalele anxioase"],
  },
] as const;

/** Cum decurge o vizită — timeline pe home. */
export const VISIT_STEPS = [
  { n: 1, title: "Ne suni sau ne scrii", text: "Îmi spui pe scurt ce se întâmplă și stabilim ora, la cabinet sau la tine acasă." },
  { n: 2, title: "Consultul, fără grabă", text: "Examinăm animalul cu răbdare, punem întrebări și îți explicăm ce vedem." },
  { n: 3, title: "Planul, pe înțelesul tău", text: "Primești diagnosticul, tratamentul și pașii următori, clar, fără jargon." },
  { n: 4, title: "Rămânem în legătură", text: "Te reamintim de rapel sau de control și suntem la telefon dacă apare ceva." },
];

/** Recenzii reale publice (Google / citymaps), cu inițialele așa cum apar. */
export const REVIEWS = [
  { quote: "Foarte empatic cu animalele și profesionist. Ne ducem pisicile și câinii cu încredere.", author: "C.C.", source: "Google" },
  { quote: "Atenție imediată, cu grijă, profesionalism și dragoste pentru fiecare suflet care suferă.", author: "U.D.", source: "Google" },
  { quote: "Medic cu experiență, prietenos și atent. Îngrijire de calitate, la prețuri accesibile.", author: "S.F.", source: "Google" },
] as const;

export const RATING = { value: "4,5", valueNum: 4.5, count: 37 };

/** Statistici pentru bara cu count-up (doar cifre reale). */
export const STATS = [
  { value: 4.5, suffix: "★", label: "rating pe Google", decimals: 1 },
  { value: 37, suffix: "", label: "recenzii de la stăpâni", decimals: 0 },
  { value: 2, suffix: "", label: "feluri de a ne vedea: cabinet și domiciliu", decimals: 0 },
  { value: 6, suffix: "", label: "servicii pentru companie și fermă", decimals: 0 },
];

/** Întrebări frecvente reale. */
export const FAQ = [
  {
    q: "Veniți și la domiciliu?",
    a: "Da. Pentru consultații, vaccinări și multe tratamente venim la tine acasă, cu tot ce trebuie. Sună la 0740 318 815 și stabilim ora.",
  },
  {
    q: "Consultați și animale de fermă?",
    a: "Da. Îngrijim deopotrivă animalele de companie (câini, pisici) și pe cele din gospodărie și fermă.",
  },
  {
    q: "Trebuie să sun înainte să vin?",
    a: "Da, o programare telefonică scurtă înseamnă că te așteptăm pregătiți și stai mai puțin. Pentru situații care nu pot aștepta, sună oricând.",
  },
  {
    q: "Ce aduc la prima vizită?",
    a: "Carnetul de sănătate, dacă îl ai. Spune-ne din timp dacă animalul e speriat sau agresiv, ca să-l primim în felul potrivit.",
  },
  {
    q: "Care este programul?",
    a: "Luni–Vineri între 07:00 și 21:00, iar sâmbăta și duminica între 09:00 și 17:00.",
  },
];

/** Meniul principal. */
export const NAV = [
  { label: "Acasă", short: "Acasă", href: "/" },
  { label: "Servicii", short: "Servicii", href: "/servicii/" },
  { label: "La domiciliu", short: "La domiciliu", href: "/consultatii-la-domiciliu/" },
  { label: "Animale de fermă", short: "Fermă", href: "/animale-de-ferma/" },
  { label: "Despre", short: "Despre", href: "/despre/" },
  { label: "Contact", short: "Contact", href: "/contact/" },
];
