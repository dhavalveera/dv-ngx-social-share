import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineShareBtnComponent } from './line-share-btn.component';

describe('LineShareBtnComponent', () => {
  let component: LineShareBtnComponent;
  let fixture: ComponentFixture<LineShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineShareBtnComponent]
    });
    fixture = TestBed.createComponent(LineShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
