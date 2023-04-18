import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesCrearComponent } from './promociones-crear.component';

describe('PromocionesCrearComponent', () => {
  let component: PromocionesCrearComponent;
  let fixture: ComponentFixture<PromocionesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionesCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
