import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogDataExplicacaoComponent } from 'src/app/shared/components/dialog-data-explicacao/dialog-data-explicacao.component';
import { DialogDataPostsComponent } from 'src/app/shared/components/dialog-data-posts/dialog-data-posts.component';
import { DialogDataTraducaoComponent } from 'src/app/shared/components/dialog-data-traducao/dialog-data-traducao.component';
import { MyDialogEditarComponent } from 'src/app/shared/components/my-dialog-editar/my-dialog-editar.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  longText: string = '';
  nome: string = 'Marcos Costa da Silva';
  profissao: string = 'PhD em ciência da computação pela Universidade de Carnegie Mellon e especialista em segurança no projeto Network Attached Secure Disks.'
  conhecimentos: string = 'Java, JavaScript, Ruby e Angular.';
  conteudo: string = 'programador iniciante.';
  areas: string[]  = ['asd', 'gddfb'];


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
      console.log('dialog fechado!' + result);
    });
  }

}
