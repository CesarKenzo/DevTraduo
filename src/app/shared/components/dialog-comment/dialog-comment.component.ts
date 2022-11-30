import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from 'src/app/model/comment';
import { Post } from 'src/app/model/post';
import { Usuario } from 'src/app/model/usuario';
import { CommentService } from 'src/app/service/comment.service';
import { PostService } from 'src/app/service/post.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dialog-comment',
  templateUrl: './dialog-comment.component.html',
  styleUrls: ['./dialog-comment.component.css']
})
export class DialogCommentComponent implements OnInit {

  comment: Comment = {
    postId: 0,
    userLogin: '',
    content: '',
    type: '',
    postTitle: '',
    postUser: ''
  }

  post: Post = {
    id: 0,
    title: '',
    createdBy: '',
    language: '',
    description: '',
    categories: [],
    likes: 0
  }

  commentType: string[] = ['Tradução', 'Explicação', 'Comentário']

  constructor(
    private commentService: CommentService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  publicar() {
    this.comment.postId = Number.parseInt(sessionStorage.getItem('postID')!)
    this.comment.postTitle = sessionStorage.getItem('postTitle')!
    this.comment.postUser = sessionStorage.getItem('postUser')!
    this.comment.userLogin = localStorage.getItem('Usuario')!
    this.commentService.criarComment(this.comment).subscribe(() => {
      this.router.navigate(['/post/'+Number.parseInt(sessionStorage.getItem('postID')!)])
    })
  }
}