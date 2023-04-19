import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaPremioComponent } from './baja-premio.component';

describe('BajaPremioComponent', () => {
  let component: BajaPremioComponent;
  let fixture: ComponentFixture<BajaPremioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaPremioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaPremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
