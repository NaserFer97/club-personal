import { TestBed } from '@angular/core/testing';

import { SalasDeCineService } from './salas-de-cine.service';

describe('SalasDeCineService', () => {
  let service: SalasDeCineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalasDeCineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
