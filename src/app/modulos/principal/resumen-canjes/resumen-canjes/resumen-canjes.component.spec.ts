import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenCanjesComponent } from './resumen-canjes.component';

describe('ResumenCanjesComponent', () => {
  let component: ResumenCanjesComponent;
  let fixture: ComponentFixture<ResumenCanjesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenCanjesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenCanjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
