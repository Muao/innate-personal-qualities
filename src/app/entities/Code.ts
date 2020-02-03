import { Calculator } from '../utilites/calculator';

export class Code {

  private day: number;
  private month: number;
  private year: number;

  private negativeCode: number[];
  private positiveCode: number[];
  private middleDigit: number;

  public constructor(day: number, month: number, year: number) {
  this.day = day;
  this.month = month;
  this.year = year;
  this.middleDigit = Calculator.sumDigitsIn(day + month + year);
  this.negativeCode = this.calcNegativeCode();
  this.positiveCode = this.calcPositiveCode();
  }

private calcNegativeCode(): number[] {
  const firstDigitOfNegativeCode: number = Calculator.sumDigitsIn(this.month + this.day);

  let numberr: string = (this.month < 10) ? '0' + this.month : this.month.toString();
  numberr = this.day.toString() + numberr;
  const nonUnderstandableDigit: number = Number(numberr);

  const negativeCode: string = String(nonUnderstandableDigit * this.year);
  const negativeCodeAsNumbers: number[] = Calculator.stringToNumberArray(negativeCode);
  negativeCodeAsNumbers.unshift(firstDigitOfNegativeCode); // insert first digit of negative code to it's place
  return this.negativeCode = negativeCodeAsNumbers;
}

private calcPositiveCode(): number[] {
  return this.positiveCode = this.negativeCode.map((el: number) => Calculator.sumDigitsIn(el + this.middleDigit));
  }

public get getNegativeCode(): number[] {
  return this.negativeCode;
}

public get getPositiveCode(): number[] {
  return this.positiveCode;
}

public get getMiddleDigit(): number {
  return this.middleDigit;
}
}
