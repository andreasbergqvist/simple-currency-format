const { currencyFormat } = require('../dist');
console.log(currencyFormat(1000000, 'sv-SE', 'SEK'));
// 1 000 000 kr
console.log(currencyFormat(1000000, 'en-GB', 'GBP'));
// £1,000,000
console.log(currencyFormat(1000000, 'mt-MT', 'EUR'));
// €1,000,000
console.log(currencyFormat(1000000, 'de-DE', 'EUR'));
// 1.000.000 €
console.log(currencyFormat(1000000, 'en-US', 'USD'));
// $1, 000, 000;
