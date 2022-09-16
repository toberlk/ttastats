import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersStatsComponent } from './leaders-stats.component';

describe('LeadersStatsComponent', () => {
  let component: LeadersStatsComponent;
  let fixture: ComponentFixture<LeadersStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadersStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadersStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
