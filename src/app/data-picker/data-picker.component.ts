import { Data } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { BirthDate } from '../entities/BirthDate';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.css']
})
export class DataPickerComponent implements OnInit {

  public events: string[] = [];
  public constructor(private dataService: Data, ) { }

  public ngOnInit(): void {
  }

  public addEvent(type: string, event: MatDatepickerInputEvent<Date>): void {
    const year: number = event.value.getFullYear();
    const month: number = event.value.getMonth() + 1;
    const day: number = event.value.getDate();
    const dataPickerId: string = event.targetElement.id;
    const birthDate: BirthDate = new BirthDate(day, month, year, dataPickerId);
    this.dataService.putToBirthDayArray(birthDate);
  }

}
