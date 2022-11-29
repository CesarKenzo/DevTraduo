import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/service/backend.service';
import { Post } from '../../model/post'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postList: Post[] = [];

  constructor(
    private backendService: BackendService,
    private router:Router
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("Usuario") == null) this.router.navigate(['login']);
    this.backendService.listPost().subscribe((postList) => {
      this.postList = postList
    })
  }

}