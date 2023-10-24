import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestShareBtnComponent } from './pinterest-share-btn.component';

describe('PinterestShareBtnComponent', () => {
  let component: PinterestShareBtnComponent;
  let fixture: ComponentFixture<PinterestShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinterestShareBtnComponent]
    });
    fixture = TestBed.createComponent(PinterestShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
