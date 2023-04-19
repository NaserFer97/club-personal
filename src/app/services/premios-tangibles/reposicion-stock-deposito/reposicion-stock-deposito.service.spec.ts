import { TestBed } from '@angular/core/testing';

import { ReposicionStockDepositoService } from './reposicion-stock-deposito.service';

describe('ReposicionStockDepositoService', () => {
  let service: ReposicionStockDepositoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposicionStockDepositoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
