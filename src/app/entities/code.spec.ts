import { BirthDate } from './birthDate';
import { Code } from './code';

describe('calc period', () => {

  it('sumDigitsIn returns 15', () => {

    const birthDate: BirthDate = new BirthDate(
      21,
      12,
      1983,
      'test',
      1
    );
  const code: Code = new Code(birthDate);
  const result: number = code.calcPeriod();

  expect(result === 12).toBeTruthy();
});
});
