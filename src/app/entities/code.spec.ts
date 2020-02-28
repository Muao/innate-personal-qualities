import { BirthDate } from '../entities/birthDate';
import { Code } from '../entities/code';

describe('calc period', () => {

  it('sumDigitsIn returns 15', () => {

    const birthDate: BirthDate = new BirthDate(
      21,
      12,
      1983,
      'test'
    );
  const code: Code = new Code(birthDate);
  const result: number = code.calcPeriod();

  expect(result === 12).toBeTruthy();
});
});

describe('birthDate ', () => {

  it('bitrhdate true', () => {

    const birthDate: BirthDate = new BirthDate(
      2,
      10,
      1994,
      'test'
    );
    const code: Code = new Code(birthDate);
    const result: number = code.calculateAge(2, 10, 1994);

    expect(result === 25).toBeTruthy();
  });
});
