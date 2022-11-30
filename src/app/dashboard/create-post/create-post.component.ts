import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { Usuario } from 'src/app/model/usuario';
import { PostService } from 'src/app/service/post.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  form: FormGroup;

  public usuario: Usuario;
  public postText : string;
  public postType: string;
  public postLanguage: string;
  public post: Post;

  constructor(private formBuilder: FormBuilder,
     private router:Router,
      private _postService: PostService,
      private _userService: UserService,
      private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      categoria: [''],
      idioma: [''],
      texto: ['']
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem("Usuario") == null) this.router.navigate(['login']);
    else this._userService.buscarPorId(localStorage.getItem("Usuario")!).subscribe(retorno => this.usuario = retorno);
  }

  public publicar(){
    this.post = new Post(this.usuario.id, "", this.usuario.nome, this.postLanguage, this.postText, [this.postType], 0)
    this._postService.criarPost(this.post).subscribe({
      next: data => {
        this.snackBar.open('Post criado com sucesso!', '', {duration: 3000});
        this.router.navigate(['dashboard/home']);
      },
      error: error => {
        this.snackBar.open('Ocorreu um erro na criação do post!', '', {duration: 3000});
      }
    });
  }

}
