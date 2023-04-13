import { TestBed } from '@angular/core/testing';

import { ImportarCarteleraService } from './importar-cartelera.service';

describe('ImportarCarteleraService', () => {
  let service: ImportarCarteleraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportarCarteleraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
