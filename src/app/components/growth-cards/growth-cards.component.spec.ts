import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthCardsComponent } from './growth-cards.component';

describe('GrowthCardsComponent', () => {
  let component: GrowthCardsComponent;
  let fixture: ComponentFixture<GrowthCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowthCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
