import { BirthDate } from './../entities/BirthDate';
import { DinamicComponentLoaderService } from './../services/dinamic-component-loader.service';
import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, NavigationExtras, Params } from '@angular/router';
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
      ) { }

  public ngOnInit(): void {
  }


  public oneMoreButtonHandler(): void {
this.appendComponentToBody();
  }

  public calculateButtonHandler(): void {
console.log( this.queryString);

    this.router.navigate(['result'], this.navigationExtras);
    // fixme result?0=%5Bobject%20Object%5D&1=%5Bobject%20Object%5D
  }

  public ngOnDestroy(): void {
    // how to destory child component, or remove it from container
  }

  private appendComponentToBody(): void {
    this.dinamicComponentLoaderService.setRootViewContainerRef(this.viewContainerRef);
    this.dinamicComponentLoaderService.addDynamicComponent();
  }

  private get navigationExtras(): NavigationExtras {

    const navigationExtras: NavigationExtras = {
      queryParams: this.queryString
    };

    return navigationExtras;
  }

  private get queryString(): Params[] {
    const allBirthDays: BirthDate[] = this.dataService.getBirthdayArray();

    const result: Params[] = [];
    allBirthDays.forEach((birthDay: BirthDate) => {
      result.push({[birthDay.dataPickerId]: birthDay.day + '/' + birthDay.month + '/' + birthDay.year});
    });

    return result;
  }


}
