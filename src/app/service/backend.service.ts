import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private readonly API_PESSOAS = '/assets/response.json';
  private readonly API_POST = '/assets/diagnosticos.json';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public login(request: number): Observable<any> {
    const api = '../assets/response.json';//mudar
    return this.httpClient.get<any>(api).pipe(
      tap((loginResponse) => (this.authService.loginResponse = loginResponse))
    );
  }

  public salvarSessionStorage(id: number){
    sessionStorage.setItem("post", JSON.stringify(id));
  }

  public listPessoas() {
    return this.httpClient.get<any[]>(this.API_PESSOAS).pipe(
      first(),
      delay(1000),
      tap(pessoas => console.log(pessoas))
    );
  }

  public listPost() {
    return this.httpClient.get<any[]>(this.API_POST).pipe(
      first(),
      delay(1000),
      tap(diagnosticos => console.log(diagnosticos))
    );
  }
}
