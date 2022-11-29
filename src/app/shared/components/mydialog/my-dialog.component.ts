import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/model/usuario';
import { BackendService } from 'src/app/service/backend.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MydialogComponent implements OnInit {


  constructor(private backendService: BackendService, private snackBar: MatSnackBar, private _userService: UserService){
  
    this.ativarEnter();
  }

  public nome: string;
  public login: string;
  public senha: string;

  ngOnInit(): void {}

  public onAdd(): void {
    this._userService.buscarPorId(this.login).subscribe({
      next: data =>{
        this.snackBar.open('Já existe um usuário com o login ' + this.login + " em nosso sistema!", '', {duration: 3000});
      },
      error: error => {
        var usuario = new Usuario(this.login, this.nome, this.login, this.senha, "", "", "", ["", ""]);
        this._userService.criarUsuario(usuario).subscribe({
          next: data =>{
            this.onSucess();
          },
          error: error => {
            this.onError();
            console.log(error.message);
          }
        });
      }
    });
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
