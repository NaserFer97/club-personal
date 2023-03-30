import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalesCrearComponent } from './locales-crear.component';

describe('LocalesCrearComponent', () => {
  let component: LocalesCrearComponent;
  let fixture: ComponentFixture<LocalesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalesCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
