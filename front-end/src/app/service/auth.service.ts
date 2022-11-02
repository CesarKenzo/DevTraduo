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

  public isAuthenticated(): boolean {
    return Boolean(this.loginResponse);
  }

}
