import { currencyFormat } from '../src';

describe('test output', () => {
  it('sv-SE SEK', () => {
    expect(currencyFormat(1000000, 'sv-SE', 'SEK')).toEqual('1 000 000 kr');
  });
  it('en-GB GBP', () => {
    expect(currencyFormat(1000000, 'en-GB', 'GBP')).toEqual('£1,000,000');
  });
  it('en-US USD', () => {
    expect(currencyFormat(1000000, 'en-US', 'USD')).toEqual('$1,000,000');
  });
  it('en-US SEK', () => {
    expect(currencyFormat(1000000, 'en-US', 'SEK')).toEqual('kr1,000,000');
  });
});
