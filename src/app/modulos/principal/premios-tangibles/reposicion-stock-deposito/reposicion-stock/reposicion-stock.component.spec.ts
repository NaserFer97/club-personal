import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposicionStockComponent } from './reposicion-stock.component';

describe('ReposicionStockComponent', () => {
  let component: ReposicionStockComponent;
  let fixture: ComponentFixture<ReposicionStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReposicionStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposicionStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
