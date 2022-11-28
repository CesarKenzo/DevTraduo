import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BackendService } from 'src/app/service/backend.service';
import { Post } from '../../model/post'
import { Router, ActivatedRoute } from '@angular/router';
import { FlagDialogComponent } from '../../shared/components/flag-dialog/flag-dialog.component';
import { ShareDialogComponent } from 'src/app/shared/components/share-dialog/share-dialog.component';

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
  flagPath: string | undefined;
  sharePath: string | undefined;

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

  openflagDialog(): void {
    const MatdialogRef = this.dialog.open(FlagDialogComponent, {
      width: '500px',
      data: {name: this.flagPath},
    });
  
    MatdialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.flagPath = result;
    });
  }

  openShareDialog(): void {
    const MatdialogRef = this.dialog.open(ShareDialogComponent, {
      width: '650px',
      height: '230px',
      data: {name: this.sharePath},
    });
  
    MatdialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.sharePath = result;
    });
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


