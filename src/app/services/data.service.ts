import { PersonOutputData } from '../entities/personOutputData';
import { Month } from '../entities/month';
import { Injectable } from '@angular/core';
import { Year } from '../entities/year';
import { Contour } from '../entities/contour';
import { ContourResult } from '../entities/contourResult';
import { BirthDate } from '../entities/birthDate';
import { Code } from '../entities/code';
import { ContoursProcessor } from '../utilites/contoursProcessor';
import { ChartDataSets } from 'chart.js';
import { Observable, of } from 'rxjs';
import { Potential } from '../entities/potential';
import { CodeExplanation } from '../entities/codeExplanation';
import { Explanation } from '../entities/explanation';

@Injectable({
  providedIn: 'root'
})
export class Data {

  private personOutputData: PersonOutputData[] = [];
  private years: Year[] = [
    new Year(1900, 7, 17, 17),
    new Year(1901, 10, 16, 18),
    new Year(1902, 13, 15, 13),
    new Year(1903, 16, 14, 11),
    new Year(1904, 18, 12, 8),
    new Year(1905, 21, 11, 6),
    new Year(1906, 1, 10, 4),
    new Year(1907, 4, 9, 2),
    new Year(1908, 5, 7, 32),
    new Year(1909, 9, 6, 30),
    new Year(1910, 12, 5, 28),
    new Year(1911, 15, 4, 26),
    new Year(1912, 17, 2, 23),
    new Year(1913, 20, 1, 21),
    new Year(1914, 0, 0, 19),
    new Year(1915, 3, 27, 17),
    new Year(1916, 5, 25, 14),
    new Year(1917, 8, 24, 12),
    new Year(1918, 11, 23, 10),
    new Year(1919, 14, 22, 8),
    new Year(1920, 16, 20, 5),
    new Year(1921, 19, 19, 3),
    new Year(1922, 22, 18, 1),
    new Year(1923, 2, 17, 32),
    new Year(1924, 4, 15, 29),
    new Year(1925, 7, 14, 27),
    new Year(1926, 10, 13, 25),
    new Year(1927, 13, 12, 23),
    new Year(1928, 15, 10, 20),
    new Year(1929, 18, 9, 18),
    new Year(1930, 21, 8, 16),
    new Year(1931, 1, 7, 14),
    new Year(1932, 3, 5, 11),
    new Year(1933, 6, 4, 9),
    new Year(1934, 9, 3, 7),
    new Year(1935, 12, 2, 5),
    new Year(1936, 14, 0, 2),
    new Year(1937, 17, 27, 0),
    new Year(1938, 20, 26, 31),
    new Year(1939, 0, 25, 29),
    new Year(1940, 2, 23, 26),
    new Year(1941, 5, 22, 24),
    new Year(1942, 8, 21, 22),
    new Year(1943, 11, 20, 20),
    new Year(1944, 13, 18, 17),
    new Year(1945, 16, 17, 15),
    new Year(1946, 19, 16, 13),
    new Year(1947, 22, 15, 11),
    new Year(1948, 1, 13, 8),
    new Year(1949, 4, 12, 6),
    new Year(1950, 7, 11, 4),
    new Year(1951, 10, 10, 2),
    new Year(1952, 12, 8, 32),
    new Year(1953, 15, 7, 30),
    new Year(1954, 18, 6, 28),
    new Year(1955, 21, 5, 26),
    new Year(1956, 0, 3, 23),
    new Year(1957, 3, 2, 21),
    new Year(1958, 6, 1, 19),
    new Year(1959, 9, 0, 17),
    new Year(1960, 11, 26, 14),
    new Year(1961, 14, 25, 12),
    new Year(1962, 17, 24, 10),
    new Year(1963, 20, 23, 8),
    new Year(1964, 22, 21, 5),
    new Year(1965, 2, 20, 3),
    new Year(1966, 5, 19, 1),
    new Year(1967, 8, 18, 32),
    new Year(1968, 10, 16, 29),
    new Year(1969, 13, 15, 27),
    new Year(1970, 16, 14, 25),
    new Year(1971, 19, 13, 23),
    new Year(1972, 21, 11, 20),
    new Year(1973, 1, 10, 18),
    new Year(1974, 4, 9, 16),
    new Year(1975, 7, 8, 14),
    new Year(1976, 9, 6, 11),
    new Year(1977, 12, 5, 9),
    new Year(1978, 15, 4, 7),
    new Year(1979, 18, 3, 5),
    new Year(1980, 20, 1, 2),
    new Year(1981, 0, 0, 0),
    new Year(1982, 3, 27, 31),
    new Year(1983, 6, 26, 29),
    new Year(1984, 8, 24, 26),
    new Year(1985, 11, 23, 24),
    new Year(1986, 14, 22, 22),
    new Year(1987, 17, 21, 20),
    new Year(1988, 19, 19, 17),
    new Year(1989, 22, 18, 15),
    new Year(1990, 2, 17, 13),
    new Year(1991, 5, 16, 11),
    new Year(1992, 7, 14, 8),
    new Year(1993, 10, 13, 6),
    new Year(1994, 13, 12, 4),
    new Year(1995, 16, 11, 2),
    new Year(1996, 18, 9, 32),
    new Year(1997, 21, 8, 30),
    new Year(1998, 1, 7, 28),
    new Year(1999, 4, 6, 26),
    new Year(2000, 6, 4, 23),
    new Year(2001, 9, 3, 21),
    new Year(2002, 12, 2, 19),
    new Year(2003, 15, 1, 17),
    new Year(2004, 17, 27, 14),
    new Year(2005, 20, 26, 12),
    new Year(2006, 0, 25, 10),
    new Year(2007, 3, 24, 8),
    new Year(2008, 5, 22, 5),
    new Year(2009, 8, 21, 3),
    new Year(2010, 11, 20, 1),
    new Year(2011, 14, 19, 32),
    new Year(2012, 16, 17, 29),
    new Year(2013, 19, 16, 27),
    new Year(2014, 22, 15, 25),
    new Year(2015, 2, 14, 23),
    new Year(2016, 4, 12, 20),
    new Year(2017, 7, 11, 18),
    new Year(2018, 10, 10, 16),
    new Year(2019, 13, 9, 14),
    new Year(2020, 15, 7, 11),
    new Year(2021, 18, 6, 9),
    new Year(2022, 21, 5, 7),
  ];
  private months: Month[] = [
    new Month(22, 29, 13, 27, 5), // it's feb of leap year access by zero
    new Month(1, 31, 12, 26, 4),
    new Month(2, 28, 7, 26, 9),
    new Month(3, 31, 22, 23, 11),
    new Month(4, 30, 15, 21, 14),
    new Month(5, 31, 7, 18, 16),
    new Month(6, 30, 0, 16, 19),
    new Month(7, 31, 15, 13, 21),
    new Month(8, 31, 7, 10, 23),
    new Month(9, 30, 0, 8, 26),
    new Month(10, 31, 15, 5, 28),
    new Month(11, 30, 8, 3, 31),
    new Month(12, 31, 0, 0, 0),
  ];

// todo needs to use internationalization by browser settings
  private physics: Contour[] = [
    new Contour(1, 33, 55, 'сангвиник'),
    new Contour(2, 55, 72, 'сангвиник-холерик'),
    new Contour(3, 15, 65, 'чувствительный холерик'),
    new Contour(4, 50, 72, 'сангвиник-холерик'),
    new Contour(5, 30, 41, 'меланхолик'),
    new Contour(6, 75, 21, 'флегматик'),
    new Contour(7, 45, 72, 'сангвиник-холерик'),
    new Contour(8, 60, 22, 'флегматик'),
    new Contour(9, 35, 28, 'меланхолик'),
    new Contour(10, 35, 49, 'сангивиник'),
    new Contour(11, 95, 22, 'флегматик'),
    new Contour(12, 30, 99, 'чувствительный холерик'),
    new Contour(13, 40, 61, 'сангвиник'),
    new Contour(14, 20, 55, 'чувствительный холерик'),
    new Contour(15, 40, 28, 'меланхолик'),
    new Contour(16, 90, 21, 'флегматик'),
    new Contour(17, 50, 83, 'сангвиник холерик'),
    new Contour(18, 10, 45, 'чувствительный холерик'),
    new Contour(19, 99, 55, 'сангвиник-флегматик'),
    new Contour(20, 30, 52, 'сангвиник'),
    new Contour(21, 20, 79, 'чувствительный холерик'),
    new Contour(22, 80, 63, 'сангвиник-флегматик'),
    new Contour(23, 25, 51, 'меланхолик'),
  ];

  private emotionals: Contour[] = [
    new Contour(1, 69, 95, 'страстный'),
    new Contour(2, 75, 27, 'эгоистичный (лидерский)'),
    new Contour(3, 31, 45, 'эмпатический'),
    new Contour(4, 62, 77, 'страстный'),
    new Contour(5, 50, 59, 'эмпатический'),
    new Contour(6, 44, 68, 'эмпатический'),
    new Contour(7, 12, 45, 'самоотверженный интергативный'),
    new Contour(8, 6, 23, 'холодный'),
    new Contour(9, 81, 54, 'эгоистичный (лидерский)'),
    new Contour(10, 25, 77, 'самоотверженный интергативный'),
    new Contour(11, 18, 50, 'самоотверженный интергативный'),
    new Contour(12, 44, 59, 'эмпатический'),
    new Contour(13, 25, 68, 'самоотверженный интергативный'),
    new Contour(14, 50, 77, 'страстный'),
    new Contour(15, 50, 99, 'страстный'),
    new Contour(16, 50, 36, 'сентиментальный'),
    new Contour(17, 50, 41, 'сентиментальный'),
    new Contour(18, 31, 14, 'холодный'),
    new Contour(19, 99, 54, 'эгоистичный (лидерский)'),
    new Contour(20, 44, 32, 'сентиментальный'),
    new Contour(21, 62, 41, 'сентиментальный'),
    new Contour(22, 25, 18, 'холодный'),
    new Contour(23, 69, 59, 'эгоистичный (лидерский)'),
    new Contour(24, 56, 41, 'сентиментальный'),
    new Contour(25, 44, 68, 'эмпатический'),
    new Contour(26, 37, 41, 'холодный'),
    new Contour(27, 56, 73, 'страстный'),
    new Contour(28, 44, 73, 'эмпатический'),
  ];

  private intellectuals: Contour[] = [
    new Contour(1, 64, 35, 'гармоничный художественный'),
    new Contour(2, 21, 65, 'дискретный'),
    new Contour(3, 21, 65, 'дискретный'),
    new Contour(4, 93, 82, 'сверхпродуктивный'),
    new Contour(5, 43, 41, 'гармоничный художественный'),
    new Contour(6, 0, 99, 'дискретный'),
    new Contour(7, 57, 88, 'продуктивный мыслительный'),
    new Contour(8, 7, 41, 'прикладной мыслительный'),
    new Contour(9, 29, 35, 'прикладной смешанный'),
    new Contour(10, 86, 35, 'гармоничный художественный'),
    new Contour(11, 29, 82, 'гармоничный мыслительный'),
    new Contour(12, 86, 41, 'гармоничный художественный'),
    new Contour(13, 14, 71, 'дискретный'),
    new Contour(14, 50, 59, 'продуктивный смешанный'),
    new Contour(15, 78, 65, 'продуктивный художественный'),
    new Contour(16, 93, 24, 'аналоговый'),
    new Contour(17, 84, 71, 'продуктивный художественный'),
    new Contour(18, 29, 41, 'прикладной смешанный'),
    new Contour(19, 26, 71, 'гармоничный мыслительный'),
    new Contour(20, 99, 82, 'сверхпродуктивный'),
    new Contour(21, 7, 76, 'дискретный'),
    new Contour(22, 14, 35, 'прикладной мыслительный'),
    new Contour(23, 50, 65, 'продуктивный смешанный'),
    new Contour(24, 26, 18, 'прикладной смешанный'),
    new Contour(25, 29, 88, 'гармоничный мыслительный'),
    new Contour(26, 93, 59, 'продуктивный художественный'),
    new Contour(27, 57, 82, 'продуктивный мыслительный'),
    new Contour(28, 29, 29, 'прикладной смешанный'),
    new Contour(29, 29, 88, 'гармоничный мыслительный'),
    new Contour(30, 71, 47, 'гармоничный художественный'),
    new Contour(31, 7, 35, 'прикладной мыслительный'),
    new Contour(32, 64, 59, 'продуктивный смешанный'),
    new Contour(33, 29, 82, 'гармоничный мыслительный'),
  ];

  private static isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
  }

  public getPhysics(index: number): ContourResult {
    const fromTable: Contour = this.physics.find((cont: Contour) => cont.index === index);
    return new ContourResult('Physics', fromTable.valueI, fromTable.valueII, fromTable.description);
  }

  public getEmotionals(index: number): ContourResult {
    const fromTable: Contour = this.emotionals.find((cont: Contour) => cont.index === index);
    return new ContourResult('Emotionals', fromTable.valueI, fromTable.valueII, fromTable.description);
  }

  public getIntellectuals(index: number): ContourResult {
    const fromTable: Contour = this.intellectuals.find((cont: Contour) => cont.index === index);
    return new ContourResult('Intellectuals', fromTable.valueI, fromTable.valueII, fromTable.description);
  }

  public getYear(inputYear: number): Year {
    return this.years.find((yearr: Year) => yearr.year === inputYear);
  }

  public getMonthes(month: number, year: number): Month {
    if (month === 2 && Data.isLeapYear(year)) {
      month = 22; // february of leap year
    }
    return this.months.find((monss: Month) => monss.month === month);
  }

  public createResultUsersData(inputBirthDate: BirthDate): void {

    const code: Code =
      new Code(inputBirthDate);

    const contourResult: ContourResult[] =
      new ContoursProcessor(this).getContours(inputBirthDate);

    const potential: Potential =
      new Potential(contourResult);

    const codeExplanation: CodeExplanation =
      new CodeExplanation(code);

    this.personOutputData.push(
      new PersonOutputData(code, codeExplanation.explanation, contourResult, potential, inputBirthDate.name)
    );
  }

  public getPersonOutputData(): Observable<PersonOutputData[]> {
    return of(this.personOutputData);
  }

  public getRadarChartData(): ChartDataSets[] {
    const radarChartData: ChartDataSets[] = [];
    this.personOutputData.forEach((data: PersonOutputData) => {
        radarChartData.push(
          {
            data: [
              null,
              data.contourResult[2].valueII, // ajna
              data.contourResult[1].valueI, // manipura
              data.contourResult[0].valueI, // muladhara
              data.contourResult[0].valueII, // svadhistana
              data.contourResult[1].valueII, // anahata
              data.contourResult[2].valueI, // vishudha

            ],
            label: data.name,
            backgroundColor: data.color,
            borderColor: data.color,
            pointBackgroundColor: data.color,
            pointHoverBorderColor: 'black',
            pointRadius: 6,
            pointHoverRadius: 7,
            spanGaps: true
          });
      }
    );
    return radarChartData;
  }

  public get radarChartLabels(): string[] {
     // return ['', 'MULADH', 'SVADHI', 'MANIPUR', 'ANAHAT', 'VISHUDH', 'AJNA'];
     return [null, 'AJNA', 'MANIPUR', 'MULADH', 'SVADHI', 'ANAHAT', 'VISHUDH'];
  }

  public get tickNames(): string[] {
    return ['', 'MIN', 'NORM', ' ', 'MAX'];
  }

  public clearPersonalOutputData(): void {
    this.personOutputData = [];
  }
}
