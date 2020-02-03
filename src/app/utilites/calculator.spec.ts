import { Calculator } from './calculator';

describe('sumDigitsIn properly working', () => {

  it('sumDigitsIn returns 3', () => {
  const result: number = Calculator.sumDigitsIn(12);
  expect(result === 3).toBeTruthy();
});
it('sumDigitsIn returns 3', () => {
  const result: number = Calculator.sumDigitsIn(11112);
  expect(result === 6).toBeTruthy();
});
it('sumDigitsIn returns 0', () => {
  const result: number = Calculator.sumDigitsIn(0);
  expect(result === 0).toBeTruthy();
});

it('sumDigitsIn returns 3', () => {
  const result: number = Calculator.sumDigitsIn(1983);
  expect(result === 3).toBeTruthy();
});

it('sumDigitsIn returns -3', () => {
  const result: number = Calculator.sumDigitsIn(-1983);
  expect(result === -3).toBeTruthy();
});
});

describe('stringToNumberArray', () => {

  it('stringToNumberArray is [1,1,1]', () => {
    const result: number[] = Calculator.stringToNumberArray('111');
    expect(JSON.stringify(result) === JSON.stringify([1, 1, 1])).toBeTruthy();
  });
  it('stringToNumberArray is [1]', () => {
    const result: number[] = Calculator.stringToNumberArray('1');
    expect(JSON.stringify(result) === JSON.stringify([1])).toBeTruthy();
  });
  it('stringToNumberArray is 0', () => {
    const result: number[] = Calculator.stringToNumberArray('');
    expect(JSON.stringify(result) === JSON.stringify([])).toBeTruthy();
  });

});
