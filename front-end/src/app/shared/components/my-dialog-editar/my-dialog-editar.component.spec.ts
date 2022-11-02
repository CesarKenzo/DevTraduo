import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialogEditarComponent } from './my-dialog-editar.component';

describe('MyDialogFeedbackComponent', () => {
  let component: MyDialogEditarComponent;
  let fixture: ComponentFixture<MyDialogEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDialogEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDialogEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
