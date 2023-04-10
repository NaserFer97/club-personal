import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalesRubrosComponent } from './locales-rubros.component';

describe('LocalesRubrosComponent', () => {
  let component: LocalesRubrosComponent;
  let fixture: ComponentFixture<LocalesRubrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalesRubrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalesRubrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
