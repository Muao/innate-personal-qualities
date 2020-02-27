export class ContourResult {
  private readonly _contourName: string;
  private readonly _valueI: number;
  private readonly _valueII: number;
  private readonly _description: string;

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
