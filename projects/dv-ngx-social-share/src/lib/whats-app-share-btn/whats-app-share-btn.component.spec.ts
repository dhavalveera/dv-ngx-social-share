import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppShareBtnComponent } from './whats-app-share-btn.component';

describe('WhatsAppShareBtnComponent', () => {
  let component: WhatsAppShareBtnComponent;
  let fixture: ComponentFixture<WhatsAppShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsAppShareBtnComponent]
    });
    fixture = TestBed.createComponent(WhatsAppShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
