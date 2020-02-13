import { ContourResult } from './ContourResult';
import { Code } from './Code';
export class PersonOutputData {
  private readonly _code: Code;
  private readonly _contourResult: ContourResult[];
  private readonly _dataPickerId: string;
  private readonly _color: string;

  public constructor(code: Code, contourResult: ContourResult[], dataPickerId: string) {
    this._code = code;
    this._contourResult = contourResult;
    this._dataPickerId = dataPickerId;
    // this._color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this._color = this.getRandomColor();
  }
  public get code(): Code {
    return this._code;
  }
  public get contourResult(): ContourResult[] {
    return this._contourResult;
  }
  public get dataPickerId(): string {
    return this._dataPickerId;
  }
  public get color(): string {
    return this._color;
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
