export class Explanation {

  private _period: string;
  private _workingOff: string;
  private _workingOffGrade: string;
  private _offset: string;

  public constructor(period: string, workingOff: number, offset: number) {

    this._period = period;
    this._workingOff = this.chakraByNumber(workingOff);
    this._workingOffGrade = offset + '/9';
    this._offset = this.chakraByNumber(offset);
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

  private chakraByNumber(num: number): string {
    switch (num) {
      case 1: return 'MULADH';
      case 2: return 'SVADHI';
      case 3: return 'MANIPUR';
      case 4: return 'ANAHAT';
      case 5: return 'VISHUDH';
      case 6: return 'AJNA';
      case 7: return 'SAHASRARA';
      case 8: return 'INFINITY';
      case 9: return '-';
      case 0: return '-'; // todo needs to clarification
      default : return 'wrong number';
    }
  }
}
