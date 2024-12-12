import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof value !== 'number') {
      throw new Error('amount must be a number');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${new Currency(this._currency.code, this._currency.name).displayFullCurrency()})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
