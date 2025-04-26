import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanygrowthComponent } from './companygrowth.component';

describe('CompanygrowthComponent', () => {
  let component: CompanygrowthComponent;
  let fixture: ComponentFixture<CompanygrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanygrowthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanygrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
