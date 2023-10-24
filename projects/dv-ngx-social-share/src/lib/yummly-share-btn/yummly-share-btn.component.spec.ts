import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YummlyShareBtnComponent } from './yummly-share-btn.component';

describe('YummlyShareBtnComponent', () => {
  let component: YummlyShareBtnComponent;
  let fixture: ComponentFixture<YummlyShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YummlyShareBtnComponent]
    });
    fixture = TestBed.createComponent(YummlyShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
