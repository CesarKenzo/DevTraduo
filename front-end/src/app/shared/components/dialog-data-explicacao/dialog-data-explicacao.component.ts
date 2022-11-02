import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data-explicacao.component.html',
  styleUrls: ['./dialog-data-explicacao.component.css']
})
export class DialogDataExplicacaoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

}
