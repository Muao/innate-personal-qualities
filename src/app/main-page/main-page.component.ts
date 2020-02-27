import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public startDate: Date = new Date(1983, 11, 21);
  public minDate: Date = new Date(1900, 0, 1);
  public maxDate: Date = new Date(2022, 11, 31);
  public parentForm: FormGroup;
  public items: FormArray;

  public constructor(
    private fb: FormBuilder,
    private router: Router,
    translate: TranslateService,
    private dateAdapter: DateAdapter<Date>) {
      this.dateAdapter.setLocale(navigator.language); // getting locale from browser
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(navigator.language);
    }

  public ngOnInit(): void {
    this.parentForm = this.fb.group({
      items: this.fb.array([ this.createItem() ])
    });
    this.items = this.parentForm.get('items') as FormArray;
  }

  public addItem(): void {
    this.items.push(this.createItem());
  }

  public removeItem(id: number): void {
    this.items.removeAt(id);
  }

  public calculateButtonHandler(): void {
    // tslint:disable-next-line: no-any
    const resultVal: any = this.items.getRawValue();

    let queryParams: string = '{';

    for (let index: number = 0; index < resultVal.length; index++) {
      // tslint:disable-next-line: no-any
      const element: any = resultVal[index];
      const name: string = element.name;
      const date: Date = element.date;

      queryParams += '"' + name + '"'
          + ': "' + date.getDate()
          + '.' + (date.getMonth() + 1)
          + '.' + date.getFullYear()
          + '",';
    }
    queryParams = queryParams.replace(/.$/, '');
  queryParams += '}';
// tslint:disable-next-line: no-any
  const result: any = JSON.parse(queryParams);

  this.router.navigate(['result'], {queryParams: result});
    }

    private createItem(): FormGroup {
      return this.fb.group({
        name: ['', Validators.required],
        date: ['', Validators.required],
      });
    }
}

