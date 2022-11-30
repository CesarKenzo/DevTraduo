import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppMaterialModule } from './app-material/app-material.module';
import { MydialogComponent } from './components/mydialog/my-dialog.component';
import { FormsModule }   from '@angular/forms';
import { DialogDataPostsComponent } from './components/dialog-data-posts/dialog-data-posts.component';
import { DialogDataExplicacaoComponent } from './components/dialog-data-explicacao/dialog-data-explicacao.component';
import { DialogDataTraducaoComponent } from './components/dialog-data-traducao/dialog-data-traducao.component';
import { MyDialogEditarComponent } from './components/my-dialog-editar/my-dialog-editar.component';
import { DialogCommentComponent } from './components/dialog-comment/dialog-comment.component';



@NgModule({
  declarations: [
    MydialogComponent, 
    DialogDataPostsComponent,
    DialogDataExplicacaoComponent,
    DialogDataTraducaoComponent,
    MyDialogEditarComponent,
    DialogCommentComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    MatExpansionModule
  ]
})
export class SharedModule { }
