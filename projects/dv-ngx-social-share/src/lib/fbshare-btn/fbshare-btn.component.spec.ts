import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FBShareBtnComponent } from './fbshare-btn.component';

describe('FBShareBtnComponent', () => {
  let component: FBShareBtnComponent;
  let fixture: ComponentFixture<FBShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FBShareBtnComponent]
    });
    fixture = TestBed.createComponent(FBShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
