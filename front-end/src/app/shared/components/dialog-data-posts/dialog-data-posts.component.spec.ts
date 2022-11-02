import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDataPostsComponent } from './dialog-data-posts.component';

describe('DialogDataComponent', () => {
  let component: DialogDataPostsComponent;
  let fixture: ComponentFixture<DialogDataPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDataPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDataPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
