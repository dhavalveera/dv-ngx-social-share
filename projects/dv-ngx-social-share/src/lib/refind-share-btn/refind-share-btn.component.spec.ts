import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefindShareBtnComponent } from './refind-share-btn.component';

describe('RefindShareBtnComponent', () => {
  let component: RefindShareBtnComponent;
  let fixture: ComponentFixture<RefindShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefindShareBtnComponent]
    });
    fixture = TestBed.createComponent(RefindShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
