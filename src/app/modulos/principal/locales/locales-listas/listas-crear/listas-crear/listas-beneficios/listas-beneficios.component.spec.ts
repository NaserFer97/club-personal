import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasBeneficiosComponent } from './listas-beneficios.component';

describe('ListasBeneficiosComponent', () => {
  let component: ListasBeneficiosComponent;
  let fixture: ComponentFixture<ListasBeneficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasBeneficiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
