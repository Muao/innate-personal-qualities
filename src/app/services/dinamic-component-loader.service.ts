
// tslint:disable-next-line: max-line-length
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { InputDateFormComponent } from '../input-date-form/input-date-form.component';

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
    const factory: ComponentFactory<InputDateFormComponent> =
    this.factoryResolver.resolveComponentFactory(InputDateFormComponent);

    const component: ComponentRef<InputDateFormComponent> =
    factory.create(this.rootViewContainer.parentInjector);

    this.rootViewContainer.insert(component.hostView);
  }
}
