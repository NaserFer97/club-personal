import { TestBed } from '@angular/core/testing';

import { TrazabilidadProductosService } from './trazabilidad-productos.service';

describe('TrazabilidadProductosService', () => {
  let service: TrazabilidadProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrazabilidadProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
