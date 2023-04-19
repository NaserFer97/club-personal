import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazabilidadProductosComponent } from './trazabilidad-productos.component';

describe('TrazabilidadProductosComponent', () => {
  let component: TrazabilidadProductosComponent;
  let fixture: ComponentFixture<TrazabilidadProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrazabilidadProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazabilidadProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
