import { Year } from '../entities/Year';
import { Month } from '../entities/Month';
import { Data } from '../services/data.service';
import { Code as Code } from '../entities/Code';
import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { ContourResult } from '../entities/ContourResult';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.css']
})
export class DataPickerComponent implements OnInit {

  public events: string[] = [];
  public constructor(private dataService: Data) { }

  public ngOnInit(): void {
  }

  public addEvent(type: string, event: MatDatepickerInputEvent<Date>): void {
    const year: number = event.value.getFullYear();
    const month: number = event.value.getMonth() + 1;
    const day: number = event.value.getDate();

   const code: Code = new Code(day, month, year);

    console.log(code.getNegativeCode);
    console.log(code.getMiddleDigit);
    console.log(code.getPositiveCode);
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

  const physics: ContourResult = this.dataService.getPhysics(physicsIndex);
    console.log(physics.valueI + '--> ' + physics.valueII);

    console.log(physicsIndex + " " + emotionalIndex + " " + intellectualIndex);

    this.events.push(`${type}: ${event.value}`);
  }

}
