import { ContourResult } from './ContourResult';
import { Code } from './Code';
import { Potential } from './Potential';
export class PersonOutputData {
  private readonly _code: Code;
  private readonly _contourResult: ContourResult[];
  private readonly _potential: Potential;
  private readonly _dataPickerId: number;
  private readonly _color: string;
  private readonly _name: string;

  public constructor(code: Code,
                     contourResult: ContourResult[],
                     potential: Potential,
                     dataPickerId: number,
                     name: string) {
    this._code = code;
    this._contourResult = contourResult;
    this._potential = potential;
    this._dataPickerId = dataPickerId;
    this._name = name;
    // this._color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this._color = this.getRandomColor();
  }
  public get code(): Code {
    return this._code;
  }
  public get contourResult(): ContourResult[] {
    return this._contourResult;
  }
  public get potential(): Potential {
    return this._potential;
  }
  public get dataPickerId(): number {
    return this._dataPickerId;
  }
  public get color(): string {
    return this._color;
  }
  public get name(): string {
    return this._name;
  }

  private getRandomColor(): string {
    const trans: string = '0.5'; // 50% transparency
    let color: string = 'rgba(';
    for (let i: number = 0; i < 3; i++) {
      color += Math.floor(Math.random() * 255) + ',';
    }
    color += trans + ')'; // add the transparency
    return color;
  }
}
