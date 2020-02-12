import { ContourResult } from './ContourResult';
import { Code } from './Code';
export class PersonOutputData {
  private readonly _code: Code;
  private readonly _contourResult: ContourResult[];
  private readonly _dataPickerId: string;

  public constructor(code: Code, contourResult: ContourResult[], dataPickerId: string) {
    this._code = code;
    this._contourResult = contourResult;
    this._dataPickerId = dataPickerId;
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

}
