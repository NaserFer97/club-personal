import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenDetalleComponent } from './resumen-detalle.component';

describe('ResumenDetalleComponent', () => {
  let component: ResumenDetalleComponent;
  let fixture: ComponentFixture<ResumenDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
