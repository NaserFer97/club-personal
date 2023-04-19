import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciasCrearComponent } from './agencias-crear.component';

describe('AgenciasCrearComponent', () => {
  let component: AgenciasCrearComponent;
  let fixture: ComponentFixture<AgenciasCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciasCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
