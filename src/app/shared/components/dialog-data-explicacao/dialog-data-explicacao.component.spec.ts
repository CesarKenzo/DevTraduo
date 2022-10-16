import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogDataExplicacaoComponent } from './dialog-data-explicacao.component';



describe('DialogDataComponent', () => {
  let component: DialogDataExplicacaoComponent;
  let fixture: ComponentFixture<DialogDataExplicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDataExplicacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDataExplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
