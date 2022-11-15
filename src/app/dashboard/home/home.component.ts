import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
    this.backendService.listPost().subscribe((postList) => {
      this.postList = postList
    })
  }

}