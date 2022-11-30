import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommentService } from 'src/app/service/comment.service';
import { Comment } from 'src/app/model/comment';


@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data-explicacao.component.html',
  styleUrls: ['./dialog-data-explicacao.component.css']
})
export class DialogDataExplicacaoComponent implements OnInit {

  explanationList: Comment[] = []

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const id = localStorage.getItem("Usuario")
    this.commentService.getComment().subscribe((explanationList) => {
      this.explanationList = explanationList.filter(c => c.userLogin == id! && c.type == 'Explicação')
    });
  }

}
