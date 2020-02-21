import { Calculator } from '../utilites/calculator';
import { BirthDate } from './BirthDate';

export class Code {

  private readonly day: number;
  private readonly month: number;
  private readonly year: number;

  private _negativeCode: number[];
  private _positiveCode: number[];
  private readonly _middleDigit: number;
  private readonly _period: number;

  public constructor(birthDate: BirthDate) {
    this.day = birthDate.day;
    this.month = birthDate.month;
    this.year = birthDate.year;
    this._middleDigit = Calculator.sumDigitsIn(this.day + this.month + this.year);
    this._negativeCode = this.calcNegativeCode();
    this._positiveCode = this.calcPositiveCode();
    this._period = this.calcPeriod();
  }

  public get negativeCode(): number[] {
    return this._negativeCode;
  }

  public get positiveCode(): number[] {
    return this._positiveCode;
  }

  public get middleDigit(): number {
    return this._middleDigit;
  }

  public get period(): number {
    return this._period;
  }

  private calcPeriod(): number {

   /* const negativeCodeLength: number = this._negativeCode.length - 1;
    let chunk: number[] = this._negativeCode.slice(2, negativeCodeLength);
    console.log(chunk);
    chunk = this.removeNines(chunk);
    console.log(chunk);
    const chunkNumber: number = Number.parseInt(chunk.join(''));
    console.log(chunkNumber);
    return 60 / chunkNumber;*/
   return 144;
  }

  private removeNines(input: number[]): number[] {
    if (input.includes(9)) {
      const index: number = input.indexOf(9);
      input.slice(index, 1);
      this.removeNines(input);
    }
    return input;
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
