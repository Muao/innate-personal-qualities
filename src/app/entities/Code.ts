import { Calculator } from '../utilites/calculator';
import { BirthDate } from './birthDate';

export class Code {

  private readonly day: number;
  private readonly month: number;
  private readonly year: number;

  private _age: number;
  private _negativeCode: number[];
  private _positiveCode: number[];
  private _currentPeriod: string[];
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
    this._age = this.calculateAge(this.day, this.month, this.year);
    this._currentPeriod = this.currentPeriodCalculation(this._age, this._period, this._negativeCode);
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

  public get age(): number {
    return this._age;
  }

  public get currentPeriod(): string[]{
    return this._currentPeriod;
  }

 public calcPeriod(): number {
let chunk: number[] = this._negativeCode.slice(2);
    chunk = this.removeNines(chunk);
    const chunkLength: number = chunk.length;
    const result: number = 60 / chunkLength;

    return result;
  }


  private removeNines(input: number[]): number[] {
    if (input.includes(9)) {
      const index: number = input.indexOf(9);
      input.splice(index, 1);
      this.removeNines(input);
    }
    return input;
  }

  private calculateAge (birthMonth: number, birthDay: number, birthYear: number): number {
    const today: Date = new Date();
    const todayYear: number = today.getFullYear();
    const todayMonth: number = today.getMonth();
    const todayDay: number = today.getDate();
    let age: number = todayYear - birthYear;

    if ( todayMonth < (birthMonth - 1)) {
        age--;
    }
    if (((birthMonth - 1) === todayMonth) && (todayDay < birthDay)) {
        age--;
    }
    return age;
}

private currentPeriodCalculation(age: number, period: number, negativeCode: number[]): string[] {
const result: string[] = [];

result.push('0');
result.push('0'); // first two digit of negative code
const chunk: number[] = negativeCode.slice(2);
let periodCount: number = period;
for (let i: number = 0; i < chunk.length; i++) {
if (chunk[i] === 9) {
result.push('G'); // genious label
} else {
  if ((periodCount > age + 1) && (periodCount < age + period + 1)) {
        result.push('^');
      } else {
        result.push('0');
      }
      periodCount += period;
}
}
return result;
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
