import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInShareBtnComponent } from './linked-in-share-btn.component';

describe('LinkedInShareBtnComponent', () => {
  let component: LinkedInShareBtnComponent;
  let fixture: ComponentFixture<LinkedInShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkedInShareBtnComponent]
    });
    fixture = TestBed.createComponent(LinkedInShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
