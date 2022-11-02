import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { Login } from '../model/login';
import { BackendService } from '../service/backend.service';
import { MydialogComponent } from '../shared/components/mydialog/my-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  loading: boolean = false;
  form: FormGroup;

  constructor(
    private backendService: BackendService,
    private router: Router,
    private formBuilder: FormBuilder, 
    private dialog: MatDialog

  ) {

    this.form = this.formBuilder.group({
      usuario: [''],
      senha: ['']
    });

  }

  ngOnInit(): void {
  }


  logar(): void {
    this.router.navigate(['dashboard/home']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MydialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog fechado!');
    });
  }



}