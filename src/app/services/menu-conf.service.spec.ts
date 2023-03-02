import { TestBed } from '@angular/core/testing';

import { MenuConfService } from './menu-conf.service';

describe('MenuConfService', () => {
  let service: MenuConfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuConfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
