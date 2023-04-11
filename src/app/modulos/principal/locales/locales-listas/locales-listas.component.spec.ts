import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalesListasComponent } from './locales-listas.component';

describe('LocalesListasComponent', () => {
  let component: LocalesListasComponent;
  let fixture: ComponentFixture<LocalesListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalesListasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalesListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
