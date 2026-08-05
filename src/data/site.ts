/**
 * Nastavenia projektu — jediné miesto, kde sa mení identita webu.
 * Texty sekcií sa upravujú v content.ts.
 */
import { zaklad } from './url';

export const site = {
  /** Názov firmy — používa sa v title, og:site_name a JSON-LD */
  nazovFirmy: 'GS Solar',

  /** Jazyk stránky a og:locale */
  jazyk: 'sk',
  ogLocale: 'sk_SK',

  /**
   * Google Tag Manager ID (napr. 'GTM-XXXXXXX').
   * Ak zostane prázdny reťazec, GTM sa do stránky vôbec nevloží.
   */
  gtmId: 'GTM-KSQ42VMC',

  logo: {
    src: zaklad('/images/img-399b42f8-273x47.png'),
    alt: 'GS Solar – logo',
    width: 273,
    height: 47,
  },

  favicon: zaklad('/images/favicon.png'),

  /** Obrázok pre og:image (zdieľanie na sociálnych sieťach) */
  ogImage: {
    src: zaklad('/images/img-6622086d-1200x.jpg'),
    width: 1200,
    height: 675,
  },

  /** Hlavný web a blog firmy */
  webUrl: 'https://gssolar.sk/',
  blogUrl: 'https://gssolar.sk/blog/',

  socialneSiete: {
    instagram: 'https://www.instagram.com/gs.solar.sro/',
    facebook: 'https://www.facebook.com/profile.php?id=61556550314948',
  },

  /** URL stránky s ochranou osobných údajov (GDPR) */
  gdprUrl: 'https://gssolar.sk/ochrana-sukromia/',

  kontakt: {
    email: 'info@gssolar.sk',
    telefony: ['+421 940 001 808'],
    /** Telefón v medzinárodnom formáte pre JSON-LD */
    telefonJsonLd: '+421940001808',
    sidlo: 'Mlynárska 40/34 926 01 Sereď',
  },

  /**
   * Údaje pre štruktúrované dáta (JSON-LD) na hlavnej stránke.
   * Typ firmy: https://schema.org/LocalBusiness a podtypy
   */
  jsonLd: {
    typFirmy: 'LocalBusiness',
    adresa: {
      ulica: 'Mlynárska 40/34',
      mesto: 'Sereď',
      psc: '926 01',
      krajina: 'SK',
    },
    oblastPosobenia: 'Slovensko',
  },
};
