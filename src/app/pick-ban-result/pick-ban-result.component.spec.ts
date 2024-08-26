import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickBanOrderComponent } from './pick-ban-result.component';

describe('PickBanOrderComponent', () => {
  let component: PickBanOrderComponent;
  let fixture: ComponentFixture<PickBanOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickBanOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickBanOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
