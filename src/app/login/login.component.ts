import { Component, OnInit, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  @ViewChildren('formLogin') formLogin!: NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string;
  contador: number = 0;

  constructor(
    private backendService: BackendService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog

  ) {

    if (this.backendService.usuarioLogado) {
      this.router.navigate(["dashboard/home"]);
    }

    this.tempoRotacaoImagem();

  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.message = params['error'];
      });
  }


  logar(): void {
    this.loading = true; //mostrar uma imagem
    /*
    if (this.formLogin.form.valid) {
      this.backendService.login(this.login).subscribe((usu) => {
        if (usu != null) {
          this.backendService.usuarioLogado = usu;
          this.loading = false;
          this.router.navigate(["/dashboard/home"]);
        }
        else {
          this.loading = false;
          this.message = "Usuário/Senha Inválida.";
        }
      }
      );
    }
    */

    this.router.navigate(['dashboard/home']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MydialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog fechado!');
    });
  }


  public trocaDeDiv() {
    if (this.contador === 4) this.contador = 0;
    return this.contador;
  }

  public tempoRotacaoImagem(): void {
    let time = 3000;

    setInterval(() => {
      this.contador++;
      this.trocaDeDiv();
    }, time);
  }



}