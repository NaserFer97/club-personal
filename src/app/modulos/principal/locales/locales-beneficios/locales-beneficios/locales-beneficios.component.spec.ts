import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalesBeneficiosComponent } from './locales-beneficios.component';

describe('LocalesBeneficiosComponent', () => {
  let component: LocalesBeneficiosComponent;
  let fixture: ComponentFixture<LocalesBeneficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalesBeneficiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalesBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
