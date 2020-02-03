import { ContourResult } from '../entities/ContourResult';
import { Month } from '../entities/Month';
import { Year } from '../entities/Year';
import { Data } from '../services/data.service';

export class ContoursProcessor {

  public constructor(private dataService: Data) { }

  public getContours(day: number, month: number, year: number): ContourResult[] {
    const allContours: ContourResult[] = [];
    const monthTable: Month = (this.dataService.getMonthes(month, year));
    const yearTable: Year = (this.dataService.getYear(year));
    const thirdSell: number = monthTable.haveDays - day;

    let physicsIndex: number = yearTable.rowI + monthTable.rowI + thirdSell;
    let emotionalIndex: number = yearTable.rowII + monthTable.rowII + thirdSell;
    let intellectualIndex: number = yearTable.rowIII + monthTable.rowIII + thirdSell;

    while (physicsIndex > 23) {
      physicsIndex -= 23;
    }
    while (emotionalIndex > 28) {
      emotionalIndex -= 28;
    }
    while (intellectualIndex > 33) {
      intellectualIndex -= 33;
    }
    allContours[0] = this.dataService.getPhysics(physicsIndex);
    allContours[1] = this.dataService.getEmotionals(emotionalIndex);
    allContours[2] = this.dataService.getIntellectuals(intellectualIndex);
    return allContours;
  }
}
