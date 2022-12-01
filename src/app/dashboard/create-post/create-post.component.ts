import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostCreation } from 'src/app/model/postcreation';
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
  public postTitle: string;
  //public post: Post;
  public postToSend: PostCreation = new PostCreation("", []);

  post: Post = {
    id: 0,
    title: '',
    createdBy: '',
    language: '',
    description: '',
    categories: [],
    likes: 0
  }
  
  postCategorieList: string[] = ['Cloud computing', 'Segurança da informação', 'Arquitetura', 'Programação', 'IoT', 'Inteligência artificial', 'Business intelligence', 'Big Data', 'Projetos', 'Suporte Técnico']
  postLanguageList: string[] = ['Inglês','Chinês','Espanhol','Francês','Árabe','Russo','Alemão','Japonês','Bengali','Hindi','Indonésio']

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
    else{
     this._userService.buscarPorId(localStorage.getItem("Usuario")!).subscribe(retorno => this.usuario = retorno);
     this._postService.getPostByUserId(localStorage.getItem("Usuario")!).subscribe(retorno => {
      this.postToSend.id = retorno.id;
      this.postToSend.posts = retorno.posts;
      console.log(this.postToSend);
    });
    }
  }

  public publicar(){
    //this.post = new Post(this.postToSend.getLastPost() + 1, this.postTitle, this.usuario.nome, this.postLanguage, this.postText, [this.postType], 0);
    //console.log(this.postToSend);
    //this.postToSend.appendPost(this.post);
    //console.log(this.postToSend);
    this.post.createdBy = this.usuario.nome
    this._postService.criarPosts(this.post).subscribe({
      next: data => {
        this.snackBar.open('Post criado com sucesso!', '', {duration: 3000});
        this.router.navigate(['dashboard/home']);
      },
      error: error => {
        this.postToSend.id = localStorage.getItem("Usuario")!;
        this._postService.criarFirstPost(this.postToSend).subscribe({
          next: data => {
            this.snackBar.open('Post criado com sucesso!', '', {duration: 3000});
            this.router.navigate(['dashboard/home']);
          },
          error: error =>{
            this.snackBar.open('Ocorreu um erro na criação do post!', '', {duration: 3000});
          }
        })
      }
    });
  }

}
