import { TestBed } from '@angular/core/testing';

import { DinamicComponentLoaderService } from './dinamic-component-loader.service';

describe('DinamicComponentLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DinamicComponentLoaderService = TestBed.get(DinamicComponentLoaderService);
    expect(service).toBeTruthy();
  });
});
