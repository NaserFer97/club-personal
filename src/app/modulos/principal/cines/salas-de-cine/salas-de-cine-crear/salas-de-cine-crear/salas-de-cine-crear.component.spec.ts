import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasDeCineCrearComponent } from './salas-de-cine-crear.component';

describe('SalasDeCineCrearComponent', () => {
  let component: SalasDeCineCrearComponent;
  let fixture: ComponentFixture<SalasDeCineCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalasDeCineCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalasDeCineCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
