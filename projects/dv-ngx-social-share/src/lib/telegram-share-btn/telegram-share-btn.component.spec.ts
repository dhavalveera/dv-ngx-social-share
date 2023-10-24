import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramShareBtnComponent } from './telegram-share-btn.component';

describe('TelegramShareBtnComponent', () => {
  let component: TelegramShareBtnComponent;
  let fixture: ComponentFixture<TelegramShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelegramShareBtnComponent]
    });
    fixture = TestBed.createComponent(TelegramShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
