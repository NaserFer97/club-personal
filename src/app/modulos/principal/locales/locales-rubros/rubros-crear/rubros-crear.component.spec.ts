import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubrosCrearComponent } from './rubros-crear.component';

describe('RubrosCrearComponent', () => {
  let component: RubrosCrearComponent;
  let fixture: ComponentFixture<RubrosCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubrosCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubrosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
