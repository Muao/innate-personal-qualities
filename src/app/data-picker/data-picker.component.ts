import { Code as Code } from '../services/Code';
import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { Calculator } from '../services/calculator';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.css']
})
export class DataPickerComponent implements OnInit {

  public events: string[] = [];
  public constructor() { }

  public ngOnInit(): void {
  }

  public addEvent(type: string, event: MatDatepickerInputEvent<Date>): void {
    const year: number = event.value.getFullYear();
    const month: number = event.value.getMonth() + 1;
    const day: number = event.value.getDate();

   const nc: Code = new Code(day, month, year);
   const negaitveCodeValue: number[] = nc.getNegativeCode;
    console.log(negaitveCodeValue);
    this.events.push(`${type}: ${event.value}`);
  }

}