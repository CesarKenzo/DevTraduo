import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from 'src/app/model/post';
import { PostCreation } from 'src/app/model/postcreation';
import { PostService } from 'src/app/service/post.service';


@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data-posts.component.html',
  styleUrls: ['./dialog-data-posts.component.css']
})
export class DialogDataPostsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _postService: PostService, private snackBar: MatSnackBar) {}

  public posts:Post[];
  public titles:string[] = [];

  ngOnInit(): void {
    this._postService.listar().subscribe({
      next: data => {
        this.posts = data.filter(p => p.createdBy == localStorage.getItem('Usuario'))
      },
      error: error => {
        console.log(error);
        this.snackBar.open('Opa! \n Houve um erro ao buscar os posts!', '', {duration: 3000});
      }
    });
  }

}
