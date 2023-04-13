import { TestBed } from '@angular/core/testing';

import { TrazabilidadBeneficiosService } from './trazabilidad-beneficios.service';

describe('TrazabilidadBeneficiosService', () => {
  let service: TrazabilidadBeneficiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrazabilidadBeneficiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
