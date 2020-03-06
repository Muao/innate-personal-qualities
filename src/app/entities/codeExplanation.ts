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
    const age: number = this.code.age;

    const result: Explanation[] = [];

    let periodCounter: number = 0;
    for (let i: number = 2; i <= counter - 1; i++) {
      if (negativeCode[i] !== 9) {
        const currentPeriod: boolean = (age >= periodCounter) && (age < periodCounter + period);
        const periods: string = periodCounter + ' - ' + (periodCounter += period);

        result.push(
          new Explanation(
            periods,
            negativeCode[i],
            positiveCode[i],
            currentPeriod
          ));
      }
    }

    result.unshift(new Explanation(
      'PERIN',
      negativeCode[1],
      positiveCode[1],
      false
    ));

    result.unshift(new Explanation(
      'MAIN',
      negativeCode[0],
      positiveCode[0],
      false
    ));

    return result;
  }
}
