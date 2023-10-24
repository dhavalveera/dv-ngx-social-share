import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiggShareBtnComponent } from './digg-share-btn.component';

describe('DiggShareBtnComponent', () => {
  let component: DiggShareBtnComponent;
  let fixture: ComponentFixture<DiggShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiggShareBtnComponent]
    });
    fixture = TestBed.createComponent(DiggShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
