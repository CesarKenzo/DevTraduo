import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/service/auth.service';


interface USER{
  id: number;
  nome: string;
  login: string;
  senha: string;
  profissao: string;
  conhecimentos: string;
  conteudo: string;
  areas: string[];
}

@Component({
  selector: 'app-my-dialog-editar',
  templateUrl: './my-dialog-editar.component.html',
  styleUrls: ['./my-dialog-editar.component.css']
})
export class MyDialogEditarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private _userService: UserService, private _authService: AuthService) { }

  public usuario: Usuario;

  ngOnInit(): void {
    if(this._authService.getSessionId() != -1){
      this._userService.buscarPorId(this._authService.getSessionId())
        .subscribe(
          retorno => {
          this.usuario = retorno;
        }
      );
    }
  }

  public onSucess() {
    this._userService.editarUsuario(this.usuario).subscribe(retorno => {
      if(retorno) this.snackBar.open('Descrição Salva com Sucesso!', '', {duration: 3000});
      else this.onError();
    });
    console.log(this.usuario.profissao);
  }

  public onError() {
    this.snackBar.open('Erro ao Adicionar Descrição.', '', { duration: 3000 });
  }


}
