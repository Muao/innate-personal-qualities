import { DinamicComponentLoaderService } from './../services/dinamic-component-loader.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @ViewChild('dynamic', {read: ViewContainerRef, static: true})
  public viewContainerRef: ViewContainerRef;

  public constructor(
    private dinamicComponentLoaderService: DinamicComponentLoaderService
      ) { }

  public ngOnInit(): void {
  }


  public oneMoreButtonHandler(): void {
this.appendComponentToBody();
  }

  private appendComponentToBody(): void {
    this.dinamicComponentLoaderService.setRootViewContainerRef(this.viewContainerRef);
    this.dinamicComponentLoaderService.addDynamicComponent();
  }
}
