import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data-traducao.component.html',
  styleUrls: ['./dialog-data-traducao.component.css']
})
export class DialogDataTraducaoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}

}
