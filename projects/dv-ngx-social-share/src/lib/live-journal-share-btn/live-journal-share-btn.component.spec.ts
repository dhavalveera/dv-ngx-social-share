import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveJournalShareBtnComponent } from './live-journal-share-btn.component';

describe('LiveJournalShareBtnComponent', () => {
  let component: LiveJournalShareBtnComponent;
  let fixture: ComponentFixture<LiveJournalShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveJournalShareBtnComponent]
    });
    fixture = TestBed.createComponent(LiveJournalShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
