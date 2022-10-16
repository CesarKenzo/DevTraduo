import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDataTraducaoComponent } from './dialog-data-traducao.component';

describe('DialogDataComponent', () => {
  let component: DialogDataTraducaoComponent;
  let fixture: ComponentFixture<DialogDataTraducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDataTraducaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDataTraducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
