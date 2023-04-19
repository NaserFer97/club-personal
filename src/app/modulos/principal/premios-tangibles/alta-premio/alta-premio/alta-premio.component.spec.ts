import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPremioComponent } from './alta-premio.component';

describe('AltaPremioComponent', () => {
  let component: AltaPremioComponent;
  let fixture: ComponentFixture<AltaPremioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaPremioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
