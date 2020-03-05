export class Explanation {
  private period: string;
  private workingOff: string;
  private workingOffGrade: string;
  private offset: string;


  public constructor(period: string, workingOff: string, workingOffGrade: string, offset: string) {
    this.period = period;
    this.workingOff = workingOff;
    this.workingOffGrade = workingOffGrade;
    this.offset = offset;
  }
}
