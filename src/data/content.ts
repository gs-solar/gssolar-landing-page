/**
 * Všetky texty stránky. Nastavenia webu (logo, GTM, kontakt…) sú v site.ts.
 */

export const seo = {
  titulok: 'GS Solar — Fotovoltaika',
  popis:
    'Inštalácia fotovoltaických panelov vám zníži účty za elektrinu a zvýši hodnotu vašej nehnuteľnosti. Zabezpečíme všetko od návrhu až po inštaláciu a revíziu.',
};

export const hero = {
  nadpis: 'Plaťte menej za elektrinu',
  text: 'Inštalácia fotovoltaických panelov vám zníži účty za elektrinu a zvýši hodnotu vašej nehnuteľnosti. Zabezpečíme všetko od návrhu až po inštaláciu a revíziu.',
  cta: 'Mám záujem',
  obrazok: '/images/naseprace3jpg1.webp',
};

/** Dve arch karty — Pre domácnosti / Pre firmy */
export const ponuky = [
  {
    titulok: 'Pre domácnosti',
    /** Text môže obsahovať HTML (napr. <b> pre zvýraznenie súm) */
    text: 'Znížte svoje mesačné náklady na elektrinu a staňte sa energeticky nezávislí. Využite aktuálnu zľavu <b>1 000 €</b> na inštaláciu fotovoltaických panelov. Kompletné riešenie na mieru od návrhu až po revíznu správu.',
    cta: 'Mám záujem',
    ikona: '/images/icon_71a58e7f.svg',
    obrazok: '/images/WhatsAppImage20240510at06573810.jpeg',
    farbaKarty: 'light' as const,
  },
  {
    titulok: 'Pre firmy',
    text: 'Využite štátne dotácie pre mikro, malé a stredné podniky až do výšky <b>50 000 €</b>. Pomôžeme vám s celým procesom – od návrhu projektu, cez administratívu až po realizáciu a revíznu správu.',
    cta: 'Mám záujem',
    ikona: '/images/icon_6d4af6ed.svg',
    obrazok: '/images/WhatsAppImage20240510at065834101.jpeg',
    farbaKarty: 'pale' as const,
  },
];

export const strechy = {
  nadpis: 'Montujeme na každý typ strechy',
  polozky: [
    {
      text: 'Konštrukcia na trapézové plechové strechy',
      ikona: '/images/img-3a279efc-93x93.png',
    },
    {
      text: 'Konštrukcia na škridlovú strechu',
      ikona: '/images/img-b9aafd09-80x80.png',
    },
    {
      text: 'Konštrukcia na falcované plechové strechy',
      ikona: '/images/img-9442a469-81x81.png',
    },
    {
      text: 'Konštrukcia strechy s fatrafolom / gumoasfaltom',
      ikona: '/images/img-3a279efc-93x93.png',
    },
  ],
};

export const statistiky = [
  {
    cislo: '3 000+',
    popis: 'Nainštalovaných panelov',
    ikona: '/images/icon_311a299e.svg',
  },
  {
    cislo: '4-6 rokov',
    popis: 'Priemerná návratnosť investície',
    ikona: '/images/icon_1048a2bf.svg',
  },
  {
    cislo: '300+',
    popis: 'Spokojných zákazníkov',
    ikona: '/images/icon_43cdd71a.svg',
  },
];

export const postup = {
  nadpis: 'Ako postupujeme?',
  cta: 'Chcem cenovú ponuku',
  kroky: [
    'Obhliadka a poradenstvo ohľadom systému',
    'Vytvorenie projektovej dokumentácie a inštalácia',
    'Revízna správa a odovzdanie diela',
    'Vybavíme za vás všetku byrokraciu',
  ],
};

export const recenzie = {
  nadpis: 'Recenzie zákazníkov',
  cta: 'Kontaktujte nás',
  polozky: [
    {
      meno: 'Ondrej Oravec',
      text: 'So spoločnosťou GS Solar som bol nadmieru spokojný. Montovali mi 10 KW menič a 7 KW solárne panely s predprípravou na batérie. Od prvotného kontaktu a nacenenia prebiehalo všetko profesionálne a na úrovni. Všetko čo bolo povedané, bolo dodržané aj montáž v dohodnutom termíne. Odporúčam všetkými 10.',
    },
    {
      meno: 'Miroslav Dinga',
      text: 'Mnohé firmy by sa mali od týchto pánov učiť! Výborný, profi a pritom ľudský prístup. Páni prišli, obzreli dom, navrhli ako by to mohlo celé vypadať a fungovať, nebránili sa urobiť aj zmeny (aby nám vyhovoval vizuál na dome a neboli všade lišty) a za 2 týždne komplet odovzdaná hotová 10.5 KW fotovoltalika bez líšt a viditeľných káblov.',
    },
    {
      meno: 'Rastislav Slovák',
      text: 'So spoločnosťou GS Solar som veľmi spokojný. Prišli, obzreli, navrhli. Behom týždňa vybavili s distribučkou. Namontovali a zapojili. Behom mesiaca to už fungovalo. Profíci, vrelo odporúčam.',
    },
    {
      meno: 'Rastislav Kočiš',
      text: 'GS Solar nám inštalovali 10kWp fotovoltaiku. Sme veľmi spokojní a do budúcna ich iste oslovíme, ak budeme rozširovať. Profesionálny prístup, výborná komunikácia. Za jeden deň nám to namontovali a oživili. Vybavili všetky povolenia s elektrárňami až po záverečnú revíznu správu, nikde sme nemuseli chodiť. Boli aj promptní, od prvého oslovenia do troch týždňov urobené aj s revíznou správou. Dobrá cena a platili sme po uskutočnení prác pred vystavením revíznej správy. Doručujeme.',
    },
    {
      meno: 'Patrícia Mladá',
      text: 'Radi by sme sa poďakovali firme za profesionálnu realizáciu fotovoltiky. Od prvého kontaktu až po finálnu montáž prebehlo všetko bez problémov a podľa dohody. Priebežne nás informovali o každom kroku realizácie. Veľké plus dávame za vybavenie všetkej potrebnej administratívy a papierovačiek. Montáž prebehla načas, pracovníci boli veľmi šikovní, slušní. Taktiež oceňujeme aj odborné poradenstvo, ochotne nám zodpovedali všetky otázky, ktoré sme mali. S výsledkom sme maximálne spokojní, nemáme čo vytknúť a firmu určite budeme odporúčať.',
    },
  ],
};

export const faq = {
  nadpis: 'Často kladené otázky',
  polozky: [
    {
      otazka: 'Čo je fotovoltaická elektráreň a ako funguje?',
      odpovede: [
        'Je to systém, ktorý vyrába elektrickú energiu zo slnečného žiarenia. Obsahuje striedač, ktorý jednosmerný prúd premení na striedavý. Fotovoltaická elektráreň prednostne zásobuje energiou vašu domácnosť. Pokiaľ je energie zo slnka málo (nepriaznivé počasie, noc), začne systém čerpať zo siete.',
      ],
    },
    {
      otazka: 'Na akú svetovú stranu by mala byť orientovaná?',
      odpovede: [
        'Pre inštaláciu je najvhodnejšia svetová strana juh a kombinácia strán východ západ. Naopak, nevhodná svetová strana pre fotovoltaiku je sever.',
      ],
    },
    {
      otazka: 'Aký je postup v prípade záujmu o fotovoltaickú elektráreň?',
      odpovede: [
        'Predložíte nám informácie o ročnej spotrebe elektrickej energie. Na základe analýzy spotreby vypracujeme cenovú kalkuláciu vrátane energetických ziskov.',
        'Vo vygenerovanom PDF dokumente cenovej ponuky nájdete podrobný cenový rozpis vrátane podrobnej energetickej predikcie pre jednotlivé mesiace.',
        'Nasledujú legislatívne kroky: pošleme žiadosť o rezervovanú kapacitu vášmu distribútorovi a oznámenie na stavebnom úrade.',
        'Po vybavení formalít prichádzajú na rad montáž a spustenie do prevádzky.',
      ],
    },
  ],
};

export const prace = {
  nadpis: 'Niektoré naše práce',
  obrazky: [
    { src: '/images/img-5b9b6f30-330x185.jpg', alt: 'Realizácia fotovoltaiky' },
    { src: '/images/img-b2f004ef-331x185.jpg', alt: 'Realizácia fotovoltaiky' },
    { src: '/images/img-9af0b6dc-329x185.jpg', alt: 'Realizácia fotovoltaiky' },
    { src: '/images/img-ce26990a-330x185.jpg', alt: 'Realizácia fotovoltaiky' },
    { src: '/images/img-1c3b9064-329x185.jpg', alt: 'Realizácia fotovoltaiky' },
    { src: '/images/img-f6f6b656-328x184.jpg', alt: 'Realizácia fotovoltaiky' },
  ],
};

export const blog = {
  nadpis: 'Navštívte náš blog',
  text: 'Chcete sa dozvedieť o fotovoltaike viac? Tak navštívte náš blog.',
  cta: 'Klik na blogové články',
};

export const footer = {
  copyright: '© 2025 GS Solar',
};

/** Ponechané pre KontaktForm.astro z template (formulár zatiaľ nie je na stránke) */
export const formular = {
  nadpis: 'Získajte nezáväznú cenovú ponuku',
  podnadpis:
    'Vyplňte formulár a do 24 hodín vás kontaktujeme s návrhom riešenia a orientačnou kalkuláciou.',
  polia: {
    meno: 'Meno',
    email: 'Email',
    telefon: 'Telefónne číslo',
    mesto: 'Mesto / Obec',
    typProjektu: 'Typ projektu',
    typStrechy: 'Typ strechy',
    poznamka: 'Poznámka',
  },
  typProjektuMoznosti: ['Domácnosť', 'Firma'],
  typStrechyMoznosti: [
    'Trapézový plech',
    'Škridla',
    'Falcovaný plech',
    'Fatrafol / gumoasfalt',
    'Iné',
  ],
  gdprText: 'Súhlasím so spracovaním osobných údajov',
  odoslat: 'Získať cenovú ponuku zdarma',
};

export const dakujeme = {
  nadpis: 'Ďakujeme za váš dopyt!',
  text: 'Vaša žiadosť bola úspešne odoslaná. Ozveme sa vám do 24 hodín s návrhom riešenia a orientačnou kalkuláciou.',
  tlacidlo: 'Späť na hlavnú stránku',
};
