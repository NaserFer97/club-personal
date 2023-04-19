import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciasEntregaComponent } from './agencias-entrega.component';

describe('AgenciasEntregaComponent', () => {
  let component: AgenciasEntregaComponent;
  let fixture: ComponentFixture<AgenciasEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciasEntregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciasEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
