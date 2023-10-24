import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketShareBtnComponent } from './pocket-share-btn.component';

describe('PocketShareBtnComponent', () => {
  let component: PocketShareBtnComponent;
  let fixture: ComponentFixture<PocketShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PocketShareBtnComponent]
    });
    fixture = TestBed.createComponent(PocketShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
