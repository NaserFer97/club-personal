import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEventoCrearComponent } from './tipo-evento-crear.component';

describe('TipoEventoCrearComponent', () => {
  let component: TipoEventoCrearComponent;
  let fixture: ComponentFixture<TipoEventoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoEventoCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEventoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
