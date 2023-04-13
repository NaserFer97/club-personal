import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarCarteleraComponent } from './importar-cartelera.component';

describe('ImportarCarteleraComponent', () => {
  let component: ImportarCarteleraComponent;
  let fixture: ComponentFixture<ImportarCarteleraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportarCarteleraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportarCarteleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
