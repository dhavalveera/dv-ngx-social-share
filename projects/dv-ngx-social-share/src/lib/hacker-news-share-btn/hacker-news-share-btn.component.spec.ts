import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerNewsShareBtnComponent } from './hacker-news-share-btn.component';

describe('HackerNewsShareBtnComponent', () => {
  let component: HackerNewsShareBtnComponent;
  let fixture: ComponentFixture<HackerNewsShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackerNewsShareBtnComponent]
    });
    fixture = TestBed.createComponent(HackerNewsShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
