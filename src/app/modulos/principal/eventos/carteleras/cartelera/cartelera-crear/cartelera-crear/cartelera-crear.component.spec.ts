import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteleraCrearComponent } from './cartelera-crear.component';

describe('CarteleraCrearComponent', () => {
  let component: CarteleraCrearComponent;
  let fixture: ComponentFixture<CarteleraCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteleraCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteleraCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
