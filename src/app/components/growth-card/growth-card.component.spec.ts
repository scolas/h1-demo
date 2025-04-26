import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthCardComponent } from './growth-card.component';

describe('GrowthCardComponent', () => {
  let component: GrowthCardComponent;
  let fixture: ComponentFixture<GrowthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
