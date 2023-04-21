import { TestBed } from '@angular/core/testing';

import { ResumenCanjesService } from './resumen-canjes.service';

describe('ResumenCanjesService', () => {
  let service: ResumenCanjesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumenCanjesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
