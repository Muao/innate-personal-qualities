import { ContourResult } from './ContourResult';
import { Code } from './Code';
export class PersonOutputData {
  private _code: Code;
  private _contourResult: ContourResult[];

  public constructor(code: Code, contourResult: ContourResult[]) {
    this._code = code;
    this._contourResult = contourResult;
  }
  public get code(): Code {
    return this._code;
  }
  public get contourResult(): ContourResult[] {
    return this._contourResult;
  }

}
