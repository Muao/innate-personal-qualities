export class Month {

  private _month: number;
  private _haveDays: number;
  private _rowI: number;
  private _rowII: number;
  private _rowIII: number;

 public constructor (month: number, haveDays: number, rowI: number, rowII: number, rowIII: number){
  this._month = month;
  this._haveDays = haveDays;
  this._rowI = rowI;
  this._rowII = rowII;
  this._rowIII = rowIII;
  }

  public get month(): number {
    return this._month;
  }

  public get haveDays(): number {
    return this._haveDays;
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
