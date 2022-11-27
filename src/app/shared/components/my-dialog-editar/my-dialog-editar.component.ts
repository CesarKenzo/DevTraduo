import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import UsersJson from 'src/assets/usuario.json';


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

  usuario:USER[] = UsersJson;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  public onSucess() {
    this.snackBar.open('Descrição Salva com Sucesso!', '', {duration: 3000});
    console.log(this.usuario[0].profissao);
  }

  public onError() {
    this.snackBar.open('Erro ao Adicionar Descrição.', '', { duration: 3000 });
  }


}
