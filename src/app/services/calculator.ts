export class Calculator {

  public constructor() {}

  public static sumDigitsIn(num: number): number {
  return (num - 1) % 9 + 1;
}

}
