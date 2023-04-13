import { TestBed } from '@angular/core/testing';

import { LocalesAdheridosService } from './locales-adheridos.service';

describe('LocalesAdheridosService', () => {
  let service: LocalesAdheridosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalesAdheridosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
