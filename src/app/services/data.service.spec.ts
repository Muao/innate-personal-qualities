/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Data } from './data.service';

describe('Service: DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Data]
    });
  });

  it('should ...', inject([Data], (service: Data) => {
    expect(service).toBeTruthy();
  }));
});
