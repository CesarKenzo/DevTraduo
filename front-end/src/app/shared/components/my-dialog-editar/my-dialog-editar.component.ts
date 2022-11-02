import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Usuario } from 'src/app/model/usuario';


@Component({
  selector: 'app-my-dialog-editar',
  templateUrl: './my-dialog-editar.component.html',
  styleUrls: ['./my-dialog-editar.component.css']
})
export class MyDialogEditarComponent implements OnInit {

  usuario = new Usuario();

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  public onSucess() {
    this.snackBar.open('Descrição Salva com Sucesso!', '', {duration: 3000});
  }

  public onError() {
    this.snackBar.open('Erro ao Adicionar Descrição.', '', { duration: 3000 });
  }


}
