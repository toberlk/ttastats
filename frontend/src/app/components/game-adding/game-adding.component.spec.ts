import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAddingComponent } from './game-adding.component';

describe('GameAddingComponent', () => {
  let component: GameAddingComponent;
  let fixture: ComponentFixture<GameAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameAddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
