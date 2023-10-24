import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VKShareBtnComponent } from './vkshare-btn.component';

describe('VKShareBtnComponent', () => {
  let component: VKShareBtnComponent;
  let fixture: ComponentFixture<VKShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VKShareBtnComponent]
    });
    fixture = TestBed.createComponent(VKShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
