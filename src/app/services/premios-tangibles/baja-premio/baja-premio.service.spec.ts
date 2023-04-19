import { TestBed } from '@angular/core/testing';

import { BajaPremioService } from './baja-premio.service';

describe('BajaPremioService', () => {
  let service: BajaPremioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BajaPremioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
