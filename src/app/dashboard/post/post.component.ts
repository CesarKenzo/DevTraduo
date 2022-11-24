import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BackendService } from 'src/app/service/backend.service';
import { Post } from '../../model/post'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post = {
    id: 0,
    title: '',
    createdBy: '',
    language: '',
    description: '',
    categories: [],
    likes: 0
  }

  filePath: string | undefined;

  constructor(
    private backendService: BackendService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
    ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: {name: this.filePath},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.filePath = result;
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.backendService.findPostById(parseInt(id!)).subscribe((post) => {
      this.post = post
    })
  }

}

@Component({
  selector: 'attach-file-dialog',
  templateUrl: 'attach-file-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
