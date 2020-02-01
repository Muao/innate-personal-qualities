import { Calculator } from './calculator';

export class NegitiveCode {

  private day: number;
  private month: number;
  private year: number;
  private firstPartOfNegativeCode: string;
  private secondPartOfNegativeCode: string;

  public constructor(day: number, month: number, year: number) {
  this.day = day;
  this.month = month;
  this.year = year;
  }

public getFor(): string {
  this.firstPartOfNegativeCode = String(Calculator.sumDigitsIn(this.month + this.day));

  let numberr: string = (this.month < 10) ? '0' + this.month : this.month.toString();
  numberr = this.day.toString() + numberr;
  const nonUnderstandableDigit: number = Number(numberr);

  this.secondPartOfNegativeCode = String(nonUnderstandableDigit * this.year);
  return this.firstPartOfNegativeCode + ' ' + this.secondPartOfNegativeCode;
}
}
