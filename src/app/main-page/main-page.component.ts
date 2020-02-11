import { BirthDate } from '../entities/BirthDate';
import { DinamicComponentLoaderService } from '../services/dinamic-component-loader.service';
import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationExtras, Params, Router } from '@angular/router';
import { Data } from '../services/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {

  @ViewChild('dynamic', {read: ViewContainerRef, static: true})
  public viewContainerRef: ViewContainerRef;

  public constructor(
    private dinamicComponentLoaderService: DinamicComponentLoaderService,
    private router: Router,
    private dataService: Data
  ) {
  }

  public ngOnInit(): void {
  }


  public oneMoreButtonHandler(): void {
    this.appendComponentToBody();
  }

  public calculateButtonHandler(): void {
    console.log(this.queryString);

    this.router.navigate(['result'], this.navigationExtras);
  }

  public ngOnDestroy(): void {
    // fixme how to destory child component, or remove it from container?
  }

  private appendComponentToBody(): void {
    this.dinamicComponentLoaderService.setRootViewContainerRef(this.viewContainerRef);
    this.dinamicComponentLoaderService.addDynamicComponent();
  }

  private get navigationExtras(): NavigationExtras {

    return {
      queryParams: this.queryString
    };
  }

  private get queryString(): Params {
    const allBirthDays: BirthDate[] = this.dataService.getBirthdayArray();
    // fixme how can I make same in normal way?
    let queryParams: string = '{';
    allBirthDays.forEach((birthDay: BirthDate) => {

      const paramName: string = (birthDay.dataPickerId).replace('mat-input', 'user');
      queryParams += '"' + paramName + '"'
        + ': "' + birthDay.day
        + '.' + birthDay.month
        + '.' + birthDay.year
        + '",';

    });

    queryParams = queryParams.replace(/.$/, '');
    queryParams += '}';

    return JSON.parse(queryParams);
  }
}
