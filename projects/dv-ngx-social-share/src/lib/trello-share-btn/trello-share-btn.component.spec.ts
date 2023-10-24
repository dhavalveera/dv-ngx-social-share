import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloShareBtnComponent } from './trello-share-btn.component';

describe('TrelloShareBtnComponent', () => {
  let component: TrelloShareBtnComponent;
  let fixture: ComponentFixture<TrelloShareBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrelloShareBtnComponent]
    });
    fixture = TestBed.createComponent(TrelloShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
