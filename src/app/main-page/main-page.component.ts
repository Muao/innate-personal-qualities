import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public startDate: Date = new Date(1990, 0, 1);

  public orderForm: FormGroup;
  public items: FormArray;

  public constructor(
    private formBuilder: FormBuilder,
    private router: Router) {}

  public ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      items: this.formBuilder.array([ this.createItem() ])
    });
  }

  public createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      date: '',
    });
  }

  public addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  public removeItem(id: number): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.removeAt(id);
  }

  public calculateButtonHandler(): void {
    const resultArr: FormArray = this.orderForm.get('items') as FormArray;
    // tslint:disable-next-line: no-any
    const resultVal: any = resultArr.getRawValue();

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
}

