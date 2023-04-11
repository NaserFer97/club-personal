import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasCrearComponent } from './listas-crear.component';

describe('ListasCrearComponent', () => {
  let component: ListasCrearComponent;
  let fixture: ComponentFixture<ListasCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
