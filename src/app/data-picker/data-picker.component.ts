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
    const date: string = event.value.toLocaleDateString('RU');
    const year: number = event.value.getFullYear();
    const sumBithYear: number = Calculator.sumDigitsIn(year);
    console.log(year + ' , ' + sumBithYear);

    this.events.push(`${type}: ${event.value}`);
  }

}
