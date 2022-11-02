import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data-posts.component.html',
  styleUrls: ['./dialog-data-posts.component.css']
})
export class DialogDataPostsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

}
