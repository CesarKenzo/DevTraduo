import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostCreation } from 'src/app/model/postcreation';
import { BackendService } from 'src/app/service/backend.service';
import { PostService } from 'src/app/service/post.service';
import { Post } from '../../model/post'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postList: Post[] = [];
  public postCreationList : PostCreation[] = [];

  constructor(
    private backendService: BackendService,
    private router:Router,
    private _postService : PostService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("Usuario") == null) this.router.navigate(['login']);
    this._postService.getPosts().subscribe(retorno => {
      this.postCreationList = retorno;
      console.log(this.postCreationList);
      this.postCreationList.forEach(element => {
        console.log("ELEMENT: " + element.posts);
        this.postList = this.postList.concat(element.posts);
      });
      console.log(this.postList);
    });
    /*this.backendService.listPost().subscribe((postList) => {
      this.postList = postList
    });*/
  }

}