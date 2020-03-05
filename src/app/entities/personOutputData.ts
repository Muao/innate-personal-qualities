import { ContourResult } from '../entities/contourResult';
import { Code } from '../entities/code';
import { Potential } from '../entities/potential';
import { Explanation } from './explanation';
export class PersonOutputData {
  private readonly _code: Code;
  private readonly _contourResult: ContourResult[];
  private readonly _potential: Potential;
  private readonly _color: string;
  private readonly _name: string;
  private readonly _explanation: Explanation[];

  public constructor(code: Code,
                     explanation: Explanation[],
                     contourResult: ContourResult[],
                     potential: Potential,
                     name: string) {
    this._code = code;
    this._explanation = explanation;
    this._contourResult = contourResult;
    this._potential = potential;
    this._name = name;

    this._color = this.getRandomColor();
  }
  public get code(): Code {
    return this._code;
  }
  public get explanation(): Explanation[] {
    return this._explanation;
  }
  public get contourResult(): ContourResult[] {
    return this._contourResult;
  }
  public get potential(): Potential {
    return this._potential;
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
