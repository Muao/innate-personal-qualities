export class BirthDate {
  private _day: number;
  private _month: number;
  private _year: number;

public constructor(day: number, month: number, year: number) {
    this._day = day;
    this._month = month;
    this._year = year;
  }

  public get day(): number {
    return this._day;
  }

  public get month(): number {
    return this._month;
  }

  public get year(): number {
    return this._year;
  }
}
