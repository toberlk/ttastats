import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WondersStatsComponent } from './wonders-stats.component';

describe('WondersStatsComponent', () => {
  let component: WondersStatsComponent;
  let fixture: ComponentFixture<WondersStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WondersStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WondersStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
