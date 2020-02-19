import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BirthDate } from '../entities/BirthDate';
import { Data } from '../services/data.service';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-input-date-form',
  templateUrl: './input-date-form.component.html',
  styleUrls: ['./input-date-form.component.css'],
})
export class InputDateFormComponent implements OnInit, OnDestroy {
  public startDate: Date = new Date(1990, 0, 1);
  public showButton: boolean;

  public nextId: number = this.dataService.nextId();

  public profileForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
  });

  public constructor(
    private _element: ElementRef,
    private dataService: Data,
    private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale(navigator.language); // getting locale from browser
  }

  public ngOnInit(): void {
    const childNodesLength: number = this._element.nativeElement.parentElement.childNodes.length;
    this.showButton = childNodesLength > 3;
  }

  public ngOnDestroy(): void {
    this.dataService.resetNextId();
  }

  public removeInputComponentHandler(): void {
    // fixme after removing last element 'one more date' button not working
    // tslint:disable-next-line:no-any
    const thisElement: any = this._element.nativeElement;
    thisElement.parentElement.removeChild(thisElement);
  }

  public onSubmit(): void {
    const name: string = this.profileForm.value.name;
    const date: Date = new Date(this.profileForm.value.date);
    if (!!name && !!date) {
      const birthDate: BirthDate = new BirthDate(
        date.getDate(),
        date.getMonth() + 1,
        date.getFullYear(),
        name,
        this.nextId
      );
      this.dataService.putToBirthDayArray(birthDate);
    }
  }

}
