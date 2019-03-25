## Simple Currency formatter

#### A simple, lightweight, localized currency formatter.

IF you do not have access to Javascript Intl library.  
Like when you are running on Android with React Native.  
Then your can use this _simplified_ formatter.

It is simplified in a way that it will always return the same currency symbols for any given currency code.  
Even when a locale that should render a specific other symbol is used.  
This library simply use the symbol that is used in the prefered currency in a locale.

Example:

```shell
npm install simple-currency-format
yarn add simple-currency-format
```

```javascript
import { currencyFormat } from 'simple-currency-format';
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
```

## Credits

- [Intl.js](https://github.com/andyearnshaw/Intl.js/): We use currency format data from this library.
- [currency-symbol-map](https://github.com/bengourley/currency-symbol-map): We use currency symbol mapping from this library.
