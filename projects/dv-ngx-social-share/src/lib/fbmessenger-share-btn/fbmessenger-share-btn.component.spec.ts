import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FBMessengerShareBtnComponent } from './fbmessenger-share-btn.component';

describe('FBMessengerShareBtnComponent', () => {
  let component: FBMessengerShareBtnComponent;
  let fixture: ComponentFixture<FBMessengerShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FBMessengerShareBtnComponent]
    });
    fixture = TestBed.createComponent(FBMessengerShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
