import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private readonly urlToUser = "http://localhost:3000/usersDev";
  private readonly urlToUser = 'https://dev-traduo-db.herokuapp.com/usersDev';
  constructor(private _httpClient: HttpClient) { }
  
  getUsers() : Observable<Usuario[]>{
    return this._httpClient.get<Usuario[]>(this.urlToUser);
  }

  buscarPorId(id: String): Observable<Usuario> {
    const url = `${this.urlToUser}/${id}`
    return this._httpClient.get<Usuario>(url);
  }

  buscarPorLogin(login: string): Observable<Usuario>{
    const url = `${this.urlToUser}/${login}`
    return this._httpClient.get<Usuario>(url);
  }

  criarUsuario(usuario: Usuario): Observable<Usuario> {
    return this._httpClient.post<Usuario>(this.urlToUser, usuario);
  }

  editarUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `${this.urlToUser}/${usuario.id}`;
    return this._httpClient.put<Usuario>(url, usuario);
  }

  
}
