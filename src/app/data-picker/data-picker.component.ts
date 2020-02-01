import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.css']
})
export class DataPickerComponent implements OnInit {

  public events: string[] = [];
  public constructor() { }

  public ngOnInit() {
  }

  public addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    const date = event.value.toLocaleDateString('RU');
    console.log(date);
    this.events.push(`${type}: ${event.value}`);
  }

}
