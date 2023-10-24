import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GABShareBtnComponent } from './gabshare-btn.component';

describe('GABShareBtnComponent', () => {
  let component: GABShareBtnComponent;
  let fixture: ComponentFixture<GABShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GABShareBtnComponent]
    });
    fixture = TestBed.createComponent(GABShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
