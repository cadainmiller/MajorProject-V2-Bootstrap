import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private REST_API_SERVER = 'http://localhost:4000/';

  constructor(private httpClient: HttpClient, private router: Router) {}

  public loginUser(user: User): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    //console.log(body);
    return this.httpClient.post(this.REST_API_SERVER + 'api/login', body, {
      headers: headers,
    });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
}
