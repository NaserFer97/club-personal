import { TestBed } from '@angular/core/testing';

import { AgenciasEntregaService } from './agencias-entrega.service';

describe('AgenciasEntregaService', () => {
  let service: AgenciasEntregaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenciasEntregaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
