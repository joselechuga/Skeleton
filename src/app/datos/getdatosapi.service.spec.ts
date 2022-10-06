import { TestBed } from '@angular/core/testing';

import { GetdatosapiService } from './getdatosapi.service';

describe('GetdatosapiService', () => {
  let service: GetdatosapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdatosapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
