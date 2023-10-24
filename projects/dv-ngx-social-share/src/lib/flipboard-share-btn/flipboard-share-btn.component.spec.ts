import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipboardShareBtnComponent } from './flipboard-share-btn.component';

describe('FlipboardShareBtnComponent', () => {
  let component: FlipboardShareBtnComponent;
  let fixture: ComponentFixture<FlipboardShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlipboardShareBtnComponent]
    });
    fixture = TestBed.createComponent(FlipboardShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
