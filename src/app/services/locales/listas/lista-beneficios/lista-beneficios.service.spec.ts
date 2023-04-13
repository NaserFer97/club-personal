import { TestBed } from '@angular/core/testing';

import { ListaBeneficiosService } from './lista-beneficios.service';

describe('ListaBeneficiosService', () => {
  let service: ListaBeneficiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaBeneficiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
