import { Injectable } from '@angular/core';


import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginResponse?: Usuario;

  public clear(): void {
    this.loginResponse = undefined;
  }

  public logIn(usuario: Usuario){
    this.loginResponse = usuario;
    localStorage.setItem("Usuario", usuario.login);
  }

  public getSessionId() : string | null{
    if(localStorage.getItem("Usuario") == null) return null;
    return localStorage.getItem("Usuario");
  }

  public isAuthenticated(): boolean {
    return Boolean(this.loginResponse);
  }

}
