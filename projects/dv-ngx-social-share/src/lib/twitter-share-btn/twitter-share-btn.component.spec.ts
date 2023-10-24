import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterShareBtnComponent } from './twitter-share-btn.component';

describe('TwitterShareBtnComponent', () => {
  let component: TwitterShareBtnComponent;
  let fixture: ComponentFixture<TwitterShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwitterShareBtnComponent]
    });
    fixture = TestBed.createComponent(TwitterShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
