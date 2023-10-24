import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailShareBtnComponent } from './email-share-btn.component';

describe('EmailShareBtnComponent', () => {
  let component: EmailShareBtnComponent;
  let fixture: ComponentFixture<EmailShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailShareBtnComponent]
    });
    fixture = TestBed.createComponent(EmailShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
