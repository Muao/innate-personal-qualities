export class Contour {

  private _index: number;
  private _valueI: number;
  private _valueII: number;
  private _description: string;

  public constructor(index: number, valueI: number, valueII: number, description: string) {
    this._index = index;
    this._valueI = valueI;
    this._valueII = valueII;
    this._description = description;
  }

  public get index(): number {
    return this._index;
  }
  public get valueI(): number {
    return this._valueI;
  }
  public get valueII(): number {
    return this._valueII;
  }
  public get description(): string {
    return this._description;
  }
}
