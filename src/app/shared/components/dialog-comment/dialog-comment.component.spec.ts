import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCommentComponent } from './dialog-comment.component';

describe('DialogCommentComponent', () => {
  let component: DialogCommentComponent;
  let fixture: ComponentFixture<DialogCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
