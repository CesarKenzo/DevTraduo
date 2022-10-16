import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginResponse?: string;

  public clear(): void {
    this.loginResponse = undefined;
  }

  public isAuthenticated(): boolean {
    return Boolean(this.loginResponse);
  }

}
