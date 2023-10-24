import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinboardShareBtnComponent } from './pinboard-share-btn.component';

describe('PinboardShareBtnComponent', () => {
  let component: PinboardShareBtnComponent;
  let fixture: ComponentFixture<PinboardShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinboardShareBtnComponent]
    });
    fixture = TestBed.createComponent(PinboardShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
