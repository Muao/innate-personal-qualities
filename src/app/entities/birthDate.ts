export class BirthDate {
  private readonly _day: number;
  private readonly _month: number;
  private readonly _year: number;
  private readonly _name: string;

public constructor(day: number, month: number, year: number, name: string) {
    this._day = day;
    this._month = month;
    this._year = year;
    this._name = name;
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

  public get name(): string {
  return this._name;
  }

  public toString(): string {
  return this._day + '.' + this._month + '.' + this._year;
  }
}
