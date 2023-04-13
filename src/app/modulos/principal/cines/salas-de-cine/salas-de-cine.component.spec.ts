import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasDeCineComponent } from './salas-de-cine.component';

describe('SalasDeCineComponent', () => {
  let component: SalasDeCineComponent;
  let fixture: ComponentFixture<SalasDeCineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalasDeCineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalasDeCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
