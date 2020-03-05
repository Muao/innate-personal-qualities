import { Code } from './code';
import { Explanation } from './explanation';

export class CodeExplanation {

  public constructor(private code: Code) {
  }

  public get explanation(): Explanation[] {
    const counter: number = this.code.negativeCode.length;
    const negativeCode: number[] = this.code.negativeCode;
    const positiveCode: number[] = this.code.positiveCode;
    const period: number = this.code.period;

    const result: Explanation[] = [];

    let periodCounter: number = 0;
    for (let i: number = 0; i < counter; i++) {

      const periods: string = periodCounter + ' - ' + (periodCounter += period);
      const workingOff: string = negativeCode[i] + '';
      const workingOffGrade: string = positiveCode + '/9';
      const offset: string = positiveCode + '';

      result.push(
        new Explanation(
        periods,
        workingOff,
        workingOffGrade,
        offset
      ));
    }

    return result;
  }

}
