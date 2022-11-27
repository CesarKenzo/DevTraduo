import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import UsersJson from 'src/assets/usuario.json';

import { DialogDataExplicacaoComponent } from 'src/app/shared/components/dialog-data-explicacao/dialog-data-explicacao.component';
import { DialogDataPostsComponent } from 'src/app/shared/components/dialog-data-posts/dialog-data-posts.component';
import { DialogDataTraducaoComponent } from 'src/app/shared/components/dialog-data-traducao/dialog-data-traducao.component';
import { MyDialogEditarComponent } from 'src/app/shared/components/my-dialog-editar/my-dialog-editar.component';

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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  users:USER[] = UsersJson;

  longText: string = '';
  nome: string = this.users[0].nome;
  profissao: string = this.users[0].profissao;
  conhecimentos: string = this.users[0].conhecimentos;
  conteudo: string = this.users[0].conteudo;
  areas: string[]  = this.users[0].areas;


  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openTranslation() {
    this.dialog.open(DialogDataTraducaoComponent, {},);
  }

  openExplanation() {
    this.dialog.open(DialogDataExplicacaoComponent, {},);
  }

  openPosts() {
    this.dialog.open(DialogDataPostsComponent, {},);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogEditarComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog fechaaado!' + result);
    });
  }

}
