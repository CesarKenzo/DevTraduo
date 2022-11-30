import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostCreation } from 'src/app/model/postcreation';
import { BackendService } from 'src/app/service/backend.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  postList: Post[] = [];
  postListSorted : Post[] = [];

  constructor(
    private backendService: BackendService,
    private router:Router,
    private _postService : PostService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("Usuario") == null) this.router.navigate(['login']);
    this._postService.listar().subscribe((postList) => {
      this.postList = postList;
      this.postList.sort((a,b) => {
          if(a.likes < b.likes) return 1;
          else if(a.likes > b.likes) return -1;
          return 0;
      });
    });
    /*
    this._postService.getPosts().subscribe(retorno => {
      this.postCreationList = retorno;
      console.log(this.postCreationList);
      this.postCreationList.forEach(element => {
        console.log("ELEMENT: " + element.posts);
        this.postList = this.postList.concat(element.posts);
      });
      console.log(this.postList);
    });
    */
    /*this.backendService.listPost().subscribe((postList) => {
      this.postList = postList
    });*/
  }

}
