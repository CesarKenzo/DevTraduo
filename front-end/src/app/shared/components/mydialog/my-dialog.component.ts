import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/model/usuario';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MydialogComponent implements OnInit {

  usuario = new Usuario();

  constructor(private backendService: BackendService, private snackBar: MatSnackBar){
  
    this.ativarEnter();
  }

  ngOnInit(): void {}

  public onAdd(): void {
  //this.backendService.save(this.usuario).subscribe(_result => this.onSucess(), _error => this.onError());
  }
  
  private onSucess() {
    this.snackBar.open('Usuário Salva com sucesso!', '', {duration: 3000});
  }

  private onError() {
    this.snackBar.open('Erro ao Adicionar Usuário.', '', { duration: 3000 });
  }

  public ativarEnter(){
    document.addEventListener("keypress", function (e) {

      if (e.key === "Enter") {
        let element: HTMLElement = document.getElementsByClassName('send')[0] as HTMLElement;
        element.click();
      }
  
    });
  }

  

}
