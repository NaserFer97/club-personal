import { TestBed } from '@angular/core/testing';

import { EntregarPremioService } from './entregar-premio.service';

describe('EntregarPremioService', () => {
  let service: EntregarPremioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntregarPremioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
