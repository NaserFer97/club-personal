import { TestBed } from '@angular/core/testing';

import { ListasCrearService } from './listas-crear.service';

describe('ListasCrearService', () => {
  let service: ListasCrearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListasCrearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
