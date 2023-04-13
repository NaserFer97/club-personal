import { TestBed } from '@angular/core/testing';

import { RubrosCrearService } from './rubros-crear.service';

describe('RubrosCrearService', () => {
  let service: RubrosCrearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RubrosCrearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
