import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TumblrShareBtnComponent } from './tumblr-share-btn.component';

describe('TumblrShareBtnComponent', () => {
  let component: TumblrShareBtnComponent;
  let fixture: ComponentFixture<TumblrShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TumblrShareBtnComponent]
    });
    fixture = TestBed.createComponent(TumblrShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
