import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditShareBtnComponent } from './reddit-share-btn.component';

describe('RedditShareBtnComponent', () => {
  let component: RedditShareBtnComponent;
  let fixture: ComponentFixture<RedditShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedditShareBtnComponent]
    });
    fixture = TestBed.createComponent(RedditShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
