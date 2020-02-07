
// tslint:disable-next-line: max-line-length
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { DataPickerComponent } from '../data-picker/data-picker.component';

@Injectable({
  providedIn: 'root'
})
export class DinamicComponentLoaderService {
  private factoryResolver: ComponentFactoryResolver;
  private rootViewContainer: ViewContainerRef;

 public constructor(factoryResolver: ComponentFactoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  public setRootViewContainerRef(viewContainerRef: ViewContainerRef): void {
    this.rootViewContainer = viewContainerRef;
  }
  public addDynamicComponent(): void {
    const factory: ComponentFactory<DataPickerComponent> =
    this.factoryResolver.resolveComponentFactory(DataPickerComponent);

    const component: ComponentRef<DataPickerComponent> =
    factory.create(this.rootViewContainer.parentInjector);

    this.rootViewContainer.insert(component.hostView);
  }
}
