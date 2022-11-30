import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Comment } from 'src/app/model/comment';
import { CommentService } from 'src/app/service/comment.service';


@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data-traducao.component.html',
  styleUrls: ['./dialog-data-traducao.component.css']
})
export class DialogDataTraducaoComponent implements OnInit {

  commentList: Comment[] = []

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const id = localStorage.getItem("Usuario")
    this.commentService.getComment().subscribe((commentList) => {
      this.commentList = commentList.filter(c => c.userLogin == id! && c.type == 'Tradução')
    });
  }

}
