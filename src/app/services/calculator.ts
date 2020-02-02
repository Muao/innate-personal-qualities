export class Calculator {

  public constructor() {}

  public static sumDigitsIn(num: number): number {
  return (num - 1) % 9 + 1;
}

public static stringToNumberArray(s: string): number[] {
  return s.split('').map(Number);
}

}
