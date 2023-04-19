import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPremiosComponent } from './stock-premios.component';

describe('StockPremiosComponent', () => {
  let component: StockPremiosComponent;
  let fixture: ComponentFixture<StockPremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockPremiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
