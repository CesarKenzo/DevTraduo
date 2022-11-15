import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';

import { AuthService } from './auth.service';
import { Login } from '../model/login';
import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private readonly API_PESSOAS = '/assets/pessoas.json';
  private readonly API_POST = 'http://localhost:3000/posts';
  //private readonly API_POST = '/assets/posts.json';
  private readonly API_CADASTRO = '/assents/cadastro.json';

  LS_CHAVE: string = "usuarioLogado";

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  //efetua o login, buscando no banco
  public login(request: Login): Observable<Login> {
    const api = '../../assets/login.json';
    return this.httpClient.get<Login>(api).pipe(
      tap((loginResponse) => (this.authService.loginResponse = loginResponse))
    );
  }

  //retorna o usuario logado
  public get usuarioLogado(): Usuario {

    let usu = localStorage[this.LS_CHAVE];
    return (usu ? JSON.parse(localStorage[this.LS_CHAVE]) : null);

  }
  public set usuarioLogado(usuario: Usuario) {

    localStorage[this.LS_CHAVE] = JSON.stringify(usuario);
  }

  //remove o usuario do registro
  logout() {
    delete localStorage[this.LS_CHAVE];
  }

  public salvarSessionStorage(id: number) {
    sessionStorage.setItem("post", JSON.stringify(id));
  }


  //para o rank
  public listPessoas() {
    return this.httpClient.get<any[]>(this.API_PESSOAS).pipe(
      first(),
      delay(1000),
      tap(pessoas => console.log(pessoas))
    );
  }


  //carregar os posts de todos os usuarios
  public listPost() {
    return this.httpClient.get<any[]>(this.API_POST).pipe(
      first(),
      delay(1000),
      tap(diagnosticos => console.log(diagnosticos))
    );
  }


  save(record: Usuario) {
    console.log(record);
    return this.httpClient.post<Usuario>(this.API_CADASTRO, record).pipe(first());
  }


}
