import { TestBed } from '@angular/core/testing';

import { StockPremiosService } from './stock-premios.service';

describe('StockPremiosService', () => {
  let service: StockPremiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockPremiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
