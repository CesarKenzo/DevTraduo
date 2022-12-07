import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import UsersJson from 'src/assets/db.json';

import { DialogDataExplicacaoComponent } from 'src/app/shared/components/dialog-data-explicacao/dialog-data-explicacao.component';
import { DialogDataPostsComponent } from 'src/app/shared/components/dialog-data-posts/dialog-data-posts.component';
import { DialogDataTraducaoComponent } from 'src/app/shared/components/dialog-data-traducao/dialog-data-traducao.component';
import { MyDialogEditarComponent } from 'src/app/shared/components/my-dialog-editar/my-dialog-editar.component';
import { UserService } from 'src/app/service/user.service';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

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

  constructor(public dialog: MatDialog,
      private _userService: UserService,
      private _authService:AuthService,
      private router:Router) {}

  public usuario: Usuario;

  ngOnInit(): void {
    if(this._authService.getSessionId() == null) this.router.navigate(['login']);
    else this._userService.buscarPorId(this._authService.getSessionId()!)
    .subscribe(
      retorno => {
        this.usuario = retorno;
        this._authService.logIn(this.usuario);
      }
    );

  }

  openTranslation() {
    this.dialog.open(DialogDataTraducaoComponent, {
      width: '800px',
      height: '40vh',
    },);
  }

  openExplanation() {
    this.dialog.open(DialogDataExplicacaoComponent, {
      width: '800px',
      height: '40vh',
    },);
  }

  openPosts() {
    this.dialog.open(DialogDataPostsComponent, {
      width: '800px',
      height: '40vh',
    },);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogEditarComponent, {
      width: '650px',
      height: '40vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog fechado!' + result);
    });
  }

}
