import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkypeShareBtnComponent } from './skype-share-btn.component';

describe('SkypeShareBtnComponent', () => {
  let component: SkypeShareBtnComponent;
  let fixture: ComponentFixture<SkypeShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkypeShareBtnComponent]
    });
    fixture = TestBed.createComponent(SkypeShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
