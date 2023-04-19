import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregarPremioComponent } from './entregar-premio.component';

describe('EntregarPremioComponent', () => {
  let component: EntregarPremioComponent;
  let fixture: ComponentFixture<EntregarPremioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregarPremioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregarPremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
