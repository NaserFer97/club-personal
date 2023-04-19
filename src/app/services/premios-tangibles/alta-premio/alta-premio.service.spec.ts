import { TestBed } from '@angular/core/testing';

import { AltaPremioService } from './alta-premio.service';

describe('AltaPremioService', () => {
  let service: AltaPremioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltaPremioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
