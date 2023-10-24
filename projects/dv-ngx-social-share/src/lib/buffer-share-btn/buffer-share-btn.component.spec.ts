import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferShareBtnComponent } from './buffer-share-btn.component';

describe('BufferShareBtnComponent', () => {
  let component: BufferShareBtnComponent;
  let fixture: ComponentFixture<BufferShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BufferShareBtnComponent]
    });
    fixture = TestBed.createComponent(BufferShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
