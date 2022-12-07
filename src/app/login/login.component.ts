import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { Login } from '../model/login';
import { BackendService } from '../service/backend.service';
import { MydialogComponent } from '../shared/components/mydialog/my-dialog.component';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login_nome:string;
  public login_senha:string;
  login: Login = new Login();
  loading: boolean = false;
  form: FormGroup;

  constructor(
    private backendService: BackendService,
    private router: Router,
    private formBuilder: FormBuilder, 
    private dialog: MatDialog,
    private _userService: UserService,
    private _authService: AuthService,
    private snackBar: MatSnackBar
  ) {

    this.form = this.formBuilder.group({
      usuario: [''],
      senha: ['']
    });

  }

  ngOnInit(): void {
  }


  logar(): void {
    this._userService.buscarPorId(this.login_nome.trim()).subscribe({
      next: data => {
      if(data.senha == this.login_senha.trim()){
        this._authService.logIn(data);
        this.router.navigate(['dashboard/home']);
      }else{
        this.snackBar.open('Senha inválida', '', {duration: 3000});
      }
    },
    error: error => {
      console.log(error.message);
      this.snackBar.open('Usuário não cadastrado!', '', {duration: 3000});
    }
    });  
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MydialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog fechado!');
    });
  }
}