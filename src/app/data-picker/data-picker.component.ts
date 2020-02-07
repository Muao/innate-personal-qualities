import { Data } from '../services/data.service';
import { Code as Code } from '../entities/Code';
import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { ContourResult } from '../entities/ContourResult';
import { ContoursProcessor } from '../utilites/ContoursProcessor';
import { Router } from '@angular/router';
import { BirthDate } from '../entities/BirthDate';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.css']
})
export class DataPickerComponent implements OnInit {

  public events: string[] = [];
  public constructor(private dataService: Data, private router: Router) { }

  public ngOnInit(): void {
  }

  public addEvent(type: string, event: MatDatepickerInputEvent<Date>): void {
    const year: number = event.value.getFullYear();
    const month: number = event.value.getMonth() + 1;
    const day: number = event.value.getDate();
    const birthDate: BirthDate = new BirthDate(day, month, year);
    this.dataService.setBirthDay(birthDate);
    this.router.navigate(['result']);
    this.events.push(`${type}: ${event.value}`);
  }


}
