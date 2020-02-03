import { Year } from '../entities/Year';
import { Month } from '../entities/Month';
import { Data } from '../services/data.service';
import { Code as Code } from '../entities/Code';
import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { ContourResult } from '../entities/ContourResult';
import { ContoursProcessor } from '../utilites/ContoursProcessor';

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

    const allContours: ContourResult[] = new ContoursProcessor(this.dataService).getContours(day, month, year);

    console.log(allContours[0].contourName + ': ' + allContours[0].valueI + ' ' + allContours[0].valueII);
    console.log(allContours[1].contourName + ': ' + allContours[1].valueI + ' ' + allContours[1].valueII);
    console.log(allContours[2].contourName + ': ' + allContours[2].valueI + ' ' + allContours[2].valueII);

    this.events.push(`${type}: ${event.value}`);
  }

}
