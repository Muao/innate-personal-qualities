export class BirthDate {
  private _day: number;
  private _month: number;
  private _year: number;
  private _dataPickerId: string;

public constructor(day: number, month: number, year: number, dataPickerId: string) {
    this._day = day;
    this._month = month;
    this._year = year;
    this._dataPickerId = dataPickerId;
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

  public get dataPickerId(): string {
    return this._dataPickerId;
  }

  public toString(): string {
  return this._dataPickerId + ': ' + this._day + '.' + this._month + '.' + this._year;
  }
}
