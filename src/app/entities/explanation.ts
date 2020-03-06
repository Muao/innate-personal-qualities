export class Explanation {

  private readonly _period: string;
  private readonly _workingOff: string;
  private readonly _workingOffGrade: string;
  private readonly _offset: string;
  private readonly _currentPeriod: boolean;

  public constructor(period: string, workingOff: number, offset: number, currentPeriod: boolean) {

    this._period = period;
    this._workingOff = Explanation.chakraByNumber(workingOff);
    this._workingOffGrade = offset + '/9';
    this._offset = Explanation.chakraByNumber(offset);
    this._currentPeriod = currentPeriod;
  }

  public get period(): string {
    return this._period;
  }

  public get workingOff(): string {
    return this._workingOff;
  }

  public get workingOffGrade(): string {
    return this._workingOffGrade;
  }

  public get offset(): string {
    return this._offset;
  }

  public get currentPeriod(): boolean {
    return this._currentPeriod;
  }

  private static chakraByNumber(num: number): string {
    switch (num) {
      case 1:
        return 'MULADH';
      case 2:
        return 'SVADHI';
      case 3:
        return 'MANIPUR';
      case 4:
        return 'ANAHAT';
      case 5:
        return 'VISHUDH';
      case 6:
        return 'AJNA';
      case 7:
        return 'SAHASRARA';
      case 8:
        return 'INFINITY';
      case 9:
        return '-';
      case 0:
        return '-'; // todo needs to clarification
      default :
        return 'wrong number';
    }
  }
}
