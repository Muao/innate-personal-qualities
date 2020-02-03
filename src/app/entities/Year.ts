export class Year {

  private _year: number;
  private _rowI: number;
  private _rowII: number;
  private _rowIII: number;

  public constructor(year: number, rowI: number, rowII: number, rowIII: number) {
    this._year = year;
    this._rowI = rowI;
    this._rowII = rowII;
    this._rowIII = rowIII;
  }

  public get year(): number {
    return this._year;
  }
  public get rowI(): number {
    return this._rowI;
  }
  public get rowII(): number {
    return this._rowII;
  }
  public get rowIII(): number {
    return this._rowIII;
  }
}
