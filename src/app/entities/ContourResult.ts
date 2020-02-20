export class ContourResult {
  private _contourName: string;
  private _valueI: number;
  private _valueII: number;
  private _description: string;

  public constructor(contourName: string, valueI: number, valueII: number, description: string) {
    this._contourName = contourName;
    this._valueI = valueI;
    this._valueII = valueII;
    this._description = description;
  }

  public get contourName(): string {
    return this._contourName;
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
