import { DinamicComponentLoaderService } from './../services/dinamic-component-loader.service';
import { Component, OnInit, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router
      ) { }

  public ngOnInit(): void {
  }


  public oneMoreButtonHandler(): void {
this.appendComponentToBody();
  }

  public calculateButtonHandler(): void {
    this.router.navigate(['result']);
  }

  public ngOnDestroy(): void {
    // how to destory child component, or remove it from container
  }

  private appendComponentToBody(): void {
    this.dinamicComponentLoaderService.setRootViewContainerRef(this.viewContainerRef);
    this.dinamicComponentLoaderService.addDynamicComponent();
  }



}
