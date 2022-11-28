import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private url = "http://localhost:3000/users";
  constructor(private _httpClient: HttpClient) { }
  
  getUsers() : Observable<Usuario[]>{
    return this._httpClient.get<Usuario[]>(this.url);
  }

  buscarPorId(id: number): Observable<Usuario> {
    const url = `${this.url}/${id}`
    return this._httpClient.get<Usuario>(url);
  }

  criarUsuario(usuario: Usuario): Observable<Usuario> {
    return this._httpClient.post<Usuario>(this.url, usuario);
  }

  editarUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `${this.url}/${usuario.id}`;
    return this._httpClient.put<Usuario>(url, usuario);
  }

  
}
