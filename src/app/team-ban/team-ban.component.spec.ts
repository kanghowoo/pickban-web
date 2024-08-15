import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBanComponent } from './team-ban.component';

describe('TeamBanComponent', () => {
  let component: TeamBanComponent;
  let fixture: ComponentFixture<TeamBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamBanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
