import { patterns } from './patterns';
import { currencySymbols } from './currencySymbols';

function currencyFormat(amount, locale, currency, decimals = 0) {
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

export { currencyFormat };
