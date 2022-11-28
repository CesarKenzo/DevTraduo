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
  }

  public getSessionId() : number{
   if(this.loginResponse) return this.loginResponse.id;
   else return -1;
  }

  public isAuthenticated(): boolean {
    return Boolean(this.loginResponse);
  }

}
