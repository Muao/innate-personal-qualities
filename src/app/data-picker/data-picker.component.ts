import { Year } from './../services/Year';
import { Month } from './../services/Month';
import { Data } from './../services/data.service';
import { Code as Code } from '../services/Code';
import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

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

    let rowI: number = yearTable.rowI + monthTable.rowI + thirdSell;
    let rowII: number = yearTable.rowII + monthTable.rowII + thirdSell;
    let rowIII: number = yearTable.rowIII + monthTable.rowIII + thirdSell;

    while (rowI > 23) {
      rowI -= 23;
  }
  while (rowII > 28) {
      rowII -= 28;
  }
  while (rowIII > 33) {
      rowIII -= 33;
  }
    console.log(rowI + " " + rowII + " " + rowIII);

    this.events.push(`${type}: ${event.value}`);
  }

}
