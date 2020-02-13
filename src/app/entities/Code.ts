import { Calculator } from '../utilites/calculator';
import { BirthDate } from './BirthDate';

export class Code {

  public get positiveCode(): number[] {
    return this._positiveCode;
  }

  public get middleDigit(): number {
    return this._middleDigit;
  }

  private readonly day: number;
  private readonly month: number;
  private readonly year: number;

  private _negativeCode: number[];
  private _positiveCode: number[];
  private readonly _middleDigit: number;

  public constructor(birthDate: BirthDate) {
    this.day = birthDate.day;
    this.month = birthDate.month;
    this.year = birthDate.year;
    this._middleDigit = Calculator.sumDigitsIn(this.day + this.month + this.year);
    this._negativeCode = this.calcNegativeCode();
    this._positiveCode = this.calcPositiveCode();
  }

  public get negativeCode(): number[] {
    return this._negativeCode;
  }

  private calcNegativeCode(): number[] {
    const firstDigitOfNegativeCode: number = Calculator.sumDigitsIn(this.month + this.day);

    let numberr: string = (this.month < 10) ? '0' + this.month : this.month.toString();
    numberr = this.day.toString() + numberr;
    const nonUnderstandableDigit: number = Number(numberr);

    const negativeCode: string = String(nonUnderstandableDigit * this.year);
    const negativeCodeAsNumbers: number[] = Calculator.stringToNumberArray(negativeCode);
    negativeCodeAsNumbers.unshift(firstDigitOfNegativeCode); // insert first digit of negative code to it's place
    return this._negativeCode = negativeCodeAsNumbers;
  }

  private calcPositiveCode(): number[] {
    return this._positiveCode = this.negativeCode.map((el: number) => Calculator.sumDigitsIn(el + this._middleDigit));
  }
}
