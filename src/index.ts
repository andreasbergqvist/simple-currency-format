const currencySymbols = {
  AED: 'د.إ',
  AFN: '؋',
  ALL: 'L',
  AMD: '֏',
  ANG: 'ƒ',
  AOA: 'Kz',
  ARS: '$',
  AUD: '$',
  AWG: 'ƒ',
  AZN: '₼',
  BAM: 'KM',
  BBD: '$',
  BDT: '৳',
  BGN: 'лв',
  BHD: '.د.ب',
  BIF: 'FBu',
  BMD: '$',
  BND: '$',
  BOB: '$b',
  BRL: 'R$',
  BSD: '$',
  BTC: '฿',
  BTN: 'Nu.',
  BWP: 'P',
  BYR: 'Br',
  BYN: 'Br',
  BZD: 'BZ$',
  CAD: '$',
  CDF: 'FC',
  CHF: 'CHF',
  CLP: '$',
  CNY: '¥',
  COP: '$',
  CRC: '₡',
  CUC: '$',
  CUP: '₱',
  CVE: '$',
  CZK: 'Kč',
  DJF: 'Fdj',
  DKK: 'kr',
  DOP: 'RD$',
  DZD: 'دج',
  EEK: 'kr',
  EGP: '£',
  ERN: 'Nfk',
  ETB: 'Br',
  ETH: 'Ξ',
  EUR: '€',
  FJD: '$',
  FKP: '£',
  GBP: '£',
  GEL: '₾',
  GGP: '£',
  GHC: '₵',
  GHS: 'GH₵',
  GIP: '£',
  GMD: 'D',
  GNF: 'FG',
  GTQ: 'Q',
  GYD: '$',
  HKD: '$',
  HNL: 'L',
  HRK: 'kn',
  HTG: 'G',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '₪',
  IMP: '£',
  INR: '₹',
  IQD: 'ع.د',
  IRR: '﷼',
  ISK: 'kr',
  JEP: '£',
  JMD: 'J$',
  JOD: 'JD',
  JPY: '¥',
  KES: 'KSh',
  KGS: 'лв',
  KHR: '៛',
  KMF: 'CF',
  KPW: '₩',
  KRW: '₩',
  KWD: 'KD',
  KYD: '$',
  KZT: 'лв',
  LAK: '₭',
  LBP: '£',
  LKR: '₨',
  LRD: '$',
  LSL: 'M',
  LTC: 'Ł',
  LTL: 'Lt',
  LVL: 'Ls',
  LYD: 'LD',
  MAD: 'MAD',
  MDL: 'lei',
  MGA: 'Ar',
  MKD: 'ден',
  MMK: 'K',
  MNT: '₮',
  MOP: 'MOP$',
  MRO: 'UM',
  MRU: 'UM',
  MUR: '₨',
  MVR: 'Rf',
  MWK: 'MK',
  MXN: '$',
  MYR: 'RM',
  MZN: 'MT',
  NAD: '$',
  NGN: '₦',
  NIO: 'C$',
  NOK: 'kr',
  NPR: '₨',
  NZD: '$',
  OMR: '﷼',
  PAB: 'B/.',
  PEN: 'S/.',
  PGK: 'K',
  PHP: '₱',
  PKR: '₨',
  PLN: 'zł',
  PYG: 'Gs',
  QAR: '﷼',
  RMB: '￥',
  RON: 'lei',
  RSD: 'Дин.',
  RUB: '₽',
  RWF: 'R₣',
  SAR: '﷼',
  SBD: '$',
  SCR: '₨',
  SDG: 'ج.س.',
  SEK: 'kr',
  SGD: '$',
  SHP: '£',
  SLL: 'Le',
  SOS: 'S',
  SRD: '$',
  SSP: '£',
  STD: 'Db',
  STN: 'Db',
  SVC: '$',
  SYP: '£',
  SZL: 'E',
  THB: '฿',
  TJS: 'SM',
  TMT: 'T',
  TND: 'د.ت',
  TOP: 'T$',
  TRL: '₤',
  TRY: '₺',
  TTD: 'TT$',
  TVD: '$',
  TWD: 'NT$',
  TZS: 'TSh',
  UAH: '₴',
  UGX: 'USh',
  USD: '$',
  UYU: '$U',
  UZS: 'лв',
  VEF: 'Bs',
  VND: '₫',
  VUV: 'VT',
  WST: 'WS$',
  XAF: 'FCFA',
  XBT: 'Ƀ',
  XCD: '$',
  XOF: 'CFA',
  XPF: '₣',
  YER: '﷼',
  ZAR: 'R',
  ZWD: 'Z$'
};

const patterns = <const>[
  {
    locale: 'en',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'af',
    decimal: ',',
    group: ' ',
    currency: '{currency}{number}'
  },
  {
    locale: 'af-NA',
    decimal: ',',
    group: ' ',
    currency: '{currency}{number}'
  },
  {
    locale: 'af-ZA',
    decimal: ',',
    group: ' ',
    currency: '{currency}{number}'
  },
  {
    locale: 'agq',
    decimal: ',',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'agq-CM',
    decimal: ',',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'ak',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ak-GH',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'am',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'am-ET',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ar',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-001',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-AE',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-BH',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-DJ',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-DZ',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-EG',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-EH',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-ER',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-IL',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-IQ',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-JO',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-KM',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-KW',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-LB',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-LY',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-MA',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-MR',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-OM',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-PS',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-QA',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-SA',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-SD',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-SO',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-SS',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-SY',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-TD',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-TN',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'ar-YE',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'as',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'as-IN',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'asa',
    decimal: '.',
    group: ',',
    currency: '{number} {currency}'
  },
  {
    locale: 'asa-TZ',
    decimal: '.',
    group: ',',
    currency: '{number} {currency}'
  },
  {
    locale: 'ast',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'ast-ES',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'az',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'az-Arab',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'az-Cyrl',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'az-Cyrl-AZ',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'az-Latn',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'az-Latn-AZ',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'bas',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'bas-CM',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'be',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'be-BY',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'bem',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'bem-ZM',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'bez',
    decimal: '.',
    group: ',',
    currency: '{number}{currency}'
  },
  {
    locale: 'bez-TZ',
    decimal: '.',
    group: ',',
    currency: '{number}{currency}'
  },
  {
    locale: 'bg',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'bg-BG',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'bm',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'bm-ML',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'bm-Nkoo',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'bn',
    decimal: '.',
    group: ',',
    currency: '{number}{currency}'
  },
  {
    locale: 'bn-BD',
    decimal: '.',
    group: ',',
    currency: '{number}{currency}'
  },
  {
    locale: 'bn-IN',
    decimal: '.',
    group: ',',
    currency: '{number}{currency}'
  },
  {
    locale: 'bo',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'bo-CN',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'bo-IN',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'br',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'br-FR',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'brx',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'brx-IN',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'bs',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'bs-Cyrl',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'bs-Cyrl-BA',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'bs-Latn',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'bs-Latn-BA',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'ca',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'ca-AD',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'ca-ES',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'ca-ES-VALENCIA',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'ca-FR',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'ca-IT',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'ce',
    decimal: '.',
    group: ',',
    currency: '{number} {currency}'
  },
  {
    locale: 'ce-RU',
    decimal: '.',
    group: ',',
    currency: '{number} {currency}'
  },
  {
    locale: 'cgg',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'cgg-UG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'chr',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'chr-US',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ckb',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ckb-IQ',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ckb-IR',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'cs',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'cs-CZ',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'cu',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'cu-RU',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'cy',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'cy-GB',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'da',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'da-DK',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'da-GL',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'dav',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'dav-KE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'de',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'de-AT',
    decimal: ',',
    group: ' ',
    currency: '{currency} {number}'
  },
  {
    locale: 'de-BE',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'de-CH',
    decimal: '.',
    group: "'",
    currency: '{currency} {number}'
  },
  {
    locale: 'de-DE',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'de-LI',
    decimal: '.',
    group: "'",
    currency: '{currency} {number}'
  },
  {
    locale: 'de-LU',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'dje',
    decimal: '.',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'dje-NE',
    decimal: '.',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'dsb',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'dsb-DE',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'dua',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'dua-CM',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'dyo',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'dyo-SN',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'dz',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'dz-BT',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ebu',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ebu-KE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ee',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ee-GH',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ee-TG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'el',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'el-CY',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'el-GR',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'en-001',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-150',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'en-AG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-AI',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-AS',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-AT',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'en-AU',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-BB',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-BE',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'en-BI',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-BM',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-BS',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-BW',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-BZ',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-CA',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-CC',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-CH',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'en-CK',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-CM',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-CX',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-CY',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-DE',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'en-DG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-DK',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'en-DM',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-Dsrt',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'en-ER',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-FI',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'en-FJ',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-FK',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-FM',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-GB',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-GD',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-GG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-GH',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-GI',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-GM',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-GU',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-GY',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-HK',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-IE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-IL',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-IM',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-IN',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'en-IO',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-JE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-JM',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-KE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-KI',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-KN',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-KY',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-LC',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-LR',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-LS',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-MG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-MH',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-MO',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-MP',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-MS',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-MT',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-MU',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-MW',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-MY',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-NA',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-NF',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-NG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-NL',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'en-NR',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-NU',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-NZ',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-PG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-PH',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-PK',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-PN',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-PR',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-PW',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-RW',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-SB',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-SC',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-SD',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-SE',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'en-SG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-SH',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-SI',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'en-SL',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-SS',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-SX',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-SZ',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-Shaw',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'en-TC',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-TK',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-TO',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-TT',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-TV',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-TZ',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-UG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-UM',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-US',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-VC',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-VG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-VI',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-VU',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-WS',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-ZA',
    decimal: ',',
    group: ' ',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-ZM',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'en-ZW',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'eo',
    decimal: ',',
    group: ' ',
    currency: '{currency} {number}'
  },
  {
    locale: 'eo-001',
    decimal: ',',
    group: ' ',
    currency: '{currency} {number}'
  },
  {
    locale: 'es',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'es-419',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-AR',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'es-BO',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-BR',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-CL',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-CO',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'es-CR',
    decimal: ',',
    group: ' ',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-CU',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-DO',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-EA',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'es-EC',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-ES',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'es-GQ',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-GT',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-HN',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-IC',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'es-MX',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-NI',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-PA',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-PE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-PH',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'es-PR',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-PY',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'es-SV',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-US',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'es-UY',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'es-VE',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'et',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'et-EE',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'eu',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'eu-ES',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'ewo',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ewo-CM',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fa',
    decimal: '٫',
    group: '٬',
    currency: '\u200e{currency}{number}'
  },
  {
    locale: 'fa-AF',
    decimal: '٫',
    group: '٬',
    currency: '\u200e{currency}{number}'
  },
  {
    locale: 'fa-IR',
    decimal: '٫',
    group: '٬',
    currency: '\u200e{currency}{number}'
  },
  {
    locale: 'ff',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ff-CM',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ff-GN',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ff-MR',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ff-SN',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fi',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fi-FI',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fil',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'fil-PH',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'fo',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'fo-DK',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'fo-FO',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-BE',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-BF',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-BI',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-BJ',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-BL',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-CA',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-CD',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-CF',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-CG',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-CH',
    decimal: '.',
    group: ' ',
    currency: '{currency} {number}'
  },
  {
    locale: 'fr-CI',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-CM',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-DJ',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-DZ',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-FR',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-GA',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-GF',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-GN',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-GP',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-GQ',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-HT',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-KM',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-LU',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-MA',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-MC',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-MF',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-MG',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-ML',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-MQ',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-MR',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-MU',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-NC',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-NE',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-PF',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-PM',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-RE',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-RW',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-SC',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-SN',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-SY',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-TD',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-TG',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-TN',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-VU',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-WF',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fr-YT',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'fur',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'fur-IT',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'fy',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'fy-NL',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'ga',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ga-IE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'gd',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'gd-GB',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'gl',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'gl-ES',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'gsw',
    decimal: '.',
    group: '’',
    currency: '{number} {currency}'
  },
  {
    locale: 'gsw-CH',
    decimal: '.',
    group: '’',
    currency: '{number} {currency}'
  },
  {
    locale: 'gsw-FR',
    decimal: '.',
    group: '’',
    currency: '{number} {currency}'
  },
  {
    locale: 'gsw-LI',
    decimal: '.',
    group: '’',
    currency: '{number} {currency}'
  },
  {
    locale: 'gu',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'gu-IN',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'guz',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'guz-KE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'gv',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'gv-IM',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ha',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ha-Arab',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ha-GH',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ha-NE',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ha-NG',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'haw',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'haw-US',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'he',
    decimal: '.',
    group: ',',
    currency: '{number} {currency}'
  },
  {
    locale: 'he-IL',
    decimal: '.',
    group: ',',
    currency: '{number} {currency}'
  },
  {
    locale: 'hi',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'hi-IN',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'hr',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'hr-BA',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'hr-HR',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'hsb',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'hsb-DE',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'hu',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'hu-HU',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'hy',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'hy-AM',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'id',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'id-ID',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'ig',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ig-NG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ii',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ii-CN',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'is',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'is-IS',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'it',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'it-CH',
    decimal: '.',
    group: "'",
    currency: '{currency} {number}'
  },
  {
    locale: 'it-IT',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'it-SM',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'iu-Latn',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ja',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ja-JP',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'jgo',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'jgo-CM',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'jmc',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'jmc-TZ',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ka',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ka-GE',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'kab',
    decimal: ',',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'kab-DZ',
    decimal: ',',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'kam',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'kam-KE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'kde',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'kde-TZ',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'kea',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'kea-CV',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'khq',
    decimal: '.',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'khq-ML',
    decimal: '.',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'ki',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ki-KE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'kk',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'kk-KZ',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'kkj',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'kkj-CM',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'kl',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'kl-GL',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'kln',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'kln-KE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'km',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'km-KH',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'kn',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'kn-IN',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ko',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ko-KP',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ko-KR',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'kok',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'kok-IN',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ks',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ks-IN',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'ksb',
    decimal: '.',
    group: ',',
    currency: '{number}{currency}'
  },
  {
    locale: 'ksb-TZ',
    decimal: '.',
    group: ',',
    currency: '{number}{currency}'
  },
  {
    locale: 'ksf',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ksf-CM',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ksh',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ksh-DE',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'kw',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'kw-GB',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ky',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ky-KG',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'lag',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'lag-TZ',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'lb',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'lb-LU',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'lg',
    decimal: '.',
    group: ',',
    currency: '{number}{currency}'
  },
  {
    locale: 'lg-UG',
    decimal: '.',
    group: ',',
    currency: '{number}{currency}'
  },
  {
    locale: 'lkt',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'lkt-US',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ln',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'ln-AO',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'ln-CD',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'ln-CF',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'ln-CG',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'lo',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'lo-LA',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'lrc',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'lrc-IQ',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'lrc-IR',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'lt',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'lt-LT',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'lu',
    decimal: ',',
    group: '.',
    currency: '{number}{currency}'
  },
  {
    locale: 'lu-CD',
    decimal: ',',
    group: '.',
    currency: '{number}{currency}'
  },
  {
    locale: 'luo',
    decimal: '.',
    group: ',',
    currency: '{number}{currency}'
  },
  {
    locale: 'luo-KE',
    decimal: '.',
    group: ',',
    currency: '{number}{currency}'
  },
  {
    locale: 'luy',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'luy-KE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'lv',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'lv-LV',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'mas',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'mas-KE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'mas-TZ',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'mer',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'mer-KE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'mfe',
    decimal: '.',
    group: ' ',
    currency: '{currency} {number}'
  },
  {
    locale: 'mfe-MU',
    decimal: '.',
    group: ' ',
    currency: '{currency} {number}'
  },
  {
    locale: 'mg',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'mg-MG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'mgh',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'mgh-MZ',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'mgo',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'mgo-CM',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'mk',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'mk-MK',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'ml',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ml-IN',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'mn',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'mn-MN',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'mn-Mong',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'mr',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'mr-IN',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ms',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ms-Arab',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ms-BN',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'ms-MY',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ms-SG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'mt',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'mt-MT',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'mua',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'mua-CM',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'my',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'my-MM',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'mzn',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'mzn-IR',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'naq',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'naq-NA',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'nb',
    decimal: ',',
    group: ' ',
    currency: '{currency} {number}'
  },
  {
    locale: 'nb-NO',
    decimal: ',',
    group: ' ',
    currency: '{currency} {number}'
  },
  {
    locale: 'nb-SJ',
    decimal: ',',
    group: ' ',
    currency: '{currency} {number}'
  },
  {
    locale: 'nd',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'nd-ZW',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ne',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ne-IN',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ne-NP',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'nl',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'nl-AW',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'nl-BE',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'nl-BQ',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'nl-CW',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'nl-NL',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'nl-SR',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'nl-SX',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'nmg',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'nmg-CM',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'nn',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'nn-NO',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'nnh',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'nnh-CM',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'nus',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'nus-SS',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'nyn',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'nyn-UG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'om',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'om-ET',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'om-KE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'or',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'or-IN',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'os',
    decimal: ',',
    group: ' ',
    currency: '{currency} {number}'
  },
  {
    locale: 'os-GE',
    decimal: ',',
    group: ' ',
    currency: '{currency} {number}'
  },
  {
    locale: 'os-RU',
    decimal: ',',
    group: ' ',
    currency: '{currency} {number}'
  },
  {
    locale: 'pa',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'pa-Arab',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'pa-Arab-PK',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'pa-Guru',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'pa-Guru-IN',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'pl',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'pl-PL',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'prg',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'prg-001',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ps',
    decimal: '٫',
    group: '٬',
    currency: '{number} {currency}'
  },
  {
    locale: 'ps-AF',
    decimal: '٫',
    group: '٬',
    currency: '{number} {currency}'
  },
  {
    locale: 'pt',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'pt-AO',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'pt-BR',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'pt-CH',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'pt-CV',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'pt-GQ',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'pt-GW',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'pt-LU',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'pt-MO',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'pt-MZ',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'pt-PT',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'pt-ST',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'pt-TL',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'qu',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'qu-BO',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'qu-EC',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'qu-PE',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'rm',
    decimal: '.',
    group: '’',
    currency: '{number} {currency}'
  },
  {
    locale: 'rm-CH',
    decimal: '.',
    group: '’',
    currency: '{number} {currency}'
  },
  {
    locale: 'rn',
    decimal: ',',
    group: '.',
    currency: '{number}{currency}'
  },
  {
    locale: 'rn-BI',
    decimal: ',',
    group: '.',
    currency: '{number}{currency}'
  },
  {
    locale: 'ro',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'ro-MD',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'ro-RO',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'rof',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'rof-TZ',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'root',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ru',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ru-BY',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ru-KG',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ru-KZ',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ru-MD',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ru-RU',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ru-UA',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'rw',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'rw-RW',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'rwk',
    decimal: '.',
    group: ',',
    currency: '{number}{currency}'
  },
  {
    locale: 'rwk-TZ',
    decimal: '.',
    group: ',',
    currency: '{number}{currency}'
  },
  {
    locale: 'sah',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'sah-RU',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'saq',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'saq-KE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'sbp',
    decimal: '.',
    group: ',',
    currency: '{number}{currency}'
  },
  {
    locale: 'sbp-TZ',
    decimal: '.',
    group: ',',
    currency: '{number}{currency}'
  },
  {
    locale: 'se',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'se-FI',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'se-NO',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'se-SE',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'seh',
    decimal: ',',
    group: '.',
    currency: '{number}{currency}'
  },
  {
    locale: 'seh-MZ',
    decimal: ',',
    group: '.',
    currency: '{number}{currency}'
  },
  {
    locale: 'ses',
    decimal: '.',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'ses-ML',
    decimal: '.',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'sg',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'sg-CF',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'shi',
    decimal: ',',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'shi-Latn',
    decimal: ',',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'shi-Latn-MA',
    decimal: ',',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'shi-Tfng',
    decimal: ',',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'shi-Tfng-MA',
    decimal: ',',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'si',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'si-LK',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'sk',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'sk-SK',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'sl',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'sl-SI',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'smn',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'smn-FI',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'sn',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'sn-ZW',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'so',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'so-DJ',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'so-ET',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'so-KE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'so-SO',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'sq',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'sq-AL',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'sq-MK',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'sq-XK',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'sr',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'sr-Cyrl',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'sr-Cyrl-BA',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'sr-Cyrl-ME',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'sr-Cyrl-RS',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'sr-Cyrl-XK',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'sr-Latn',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'sr-Latn-BA',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'sr-Latn-ME',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'sr-Latn-RS',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'sr-Latn-XK',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'sv',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'sv-AX',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'sv-FI',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'sv-SE',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'sw',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'sw-CD',
    decimal: ',',
    group: '.',
    currency: '{currency}{number}'
  },
  {
    locale: 'sw-KE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'sw-TZ',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'sw-UG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ta',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ta-IN',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ta-LK',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ta-MY',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ta-SG',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'te',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'te-IN',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'teo',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'teo-KE',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'teo-UG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'th',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'th-TH',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ti',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ti-ER',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ti-ET',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'tk',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'tk-TM',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'to',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'to-TO',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'tr',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'tr-CY',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'tr-TR',
    decimal: ',',
    group: '.',
    currency: '{number} {currency}'
  },
  {
    locale: 'twq',
    decimal: '.',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'twq-NE',
    decimal: '.',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'tzm',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'tzm-MA',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ug',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'ug-CN',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'uk',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'uk-UA',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'ur',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ur-IN',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'ur-PK',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'uz',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'uz-Arab',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'uz-Arab-AF',
    decimal: '٫',
    group: '٬',
    currency: '{currency} {number}'
  },
  {
    locale: 'uz-Cyrl',
    decimal: ',',
    group: ' ',
    currency: '{currency} {number}'
  },
  {
    locale: 'uz-Cyrl-UZ',
    decimal: ',',
    group: ' ',
    currency: '{currency} {number}'
  },
  {
    locale: 'uz-Latn',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'uz-Latn-UZ',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'vai',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'vai-Latn',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'vai-Latn-LR',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'vai-Vaii',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'vai-Vaii-LR',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'vi',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'vi-VN',
    decimal: ',',
    group: '.',
    currency: '{currency} {number}'
  },
  {
    locale: 'vo',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'vo-001',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'vun',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'vun-TZ',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'wae',
    decimal: ',',
    group: '’',
    currency: '{currency} {number}'
  },
  {
    locale: 'wae-CH',
    decimal: ',',
    group: '’',
    currency: '{currency} {number}'
  },
  {
    locale: 'xog',
    decimal: '.',
    group: ',',
    currency: '{number} {currency}'
  },
  {
    locale: 'xog-UG',
    decimal: '.',
    group: ',',
    currency: '{number} {currency}'
  },
  {
    locale: 'yav',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'yav-CM',
    decimal: ',',
    group: ' ',
    currency: '{number} {currency}'
  },
  {
    locale: 'yi',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'yi-001',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'yo',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'yo-BJ',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'yo-NG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'yue',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'yue-HK',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'yue-Hans',
    decimal: '.',
    group: ',',
    currency: '{currency} {number}'
  },
  {
    locale: 'zgh',
    decimal: ',',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'zgh-MA',
    decimal: ',',
    group: ' ',
    currency: '{number}{currency}'
  },
  {
    locale: 'zh',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'zh-Hans',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'zh-Hans-CN',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'zh-Hans-HK',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'zh-Hans-MO',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'zh-Hans-SG',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'zh-Hant',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'zh-Hant-HK',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'zh-Hant-MO',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'zh-Hant-TW',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'zu',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  },
  {
    locale: 'zu-ZA',
    decimal: '.',
    group: ',',
    currency: '{currency}{number}'
  }
];

type CurrencySymbol = keyof typeof currencySymbols;
type Locale = typeof patterns[number]['locale'];

function currencyFormat(
  amount: number,
  locale: Locale,
  currency: CurrencySymbol,
  decimals = 0
) {
  const localePattern = patterns.find(pattern => pattern.locale === locale);
  if (localePattern === undefined) {
    throw `Locale ${locale} not found`;
  }
  if (currencySymbols[currency] == null) {
    throw `Currency ${currency} not found`;
  }
  const roundedSum = Math.round(amount * 100) / 100;
  const sum = roundedSum
    .toFixed(decimals)
    .replace('.', localePattern.decimal)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${localePattern.group}`);

  return localePattern.currency
    .replace('{currency}', currencySymbols[currency])
    .replace('{number}', sum);
}

export { currencyFormat, CurrencySymbol, Locale };
