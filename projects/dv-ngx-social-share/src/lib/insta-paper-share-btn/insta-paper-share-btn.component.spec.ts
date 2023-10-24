import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaPaperShareBtnComponent } from './insta-paper-share-btn.component';

describe('InstaPaperShareBtnComponent', () => {
  let component: InstaPaperShareBtnComponent;
  let fixture: ComponentFixture<InstaPaperShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstaPaperShareBtnComponent]
    });
    fixture = TestBed.createComponent(InstaPaperShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
