import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private REST_API_SERVER = 'http://localhost:4000/';
  private PROD_API_SERVER = 'https://major-project-backend.herokuapp.com/';

  constructor(private httpClient: HttpClient) {}

  public addNewUser(user: User): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    console.log(body);
    return this.httpClient.post(this.REST_API_SERVER + 'api/signup', body, {
      headers: headers,
    });
  }

  public getUser(): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    console.log();
    return this.httpClient.get(this.REST_API_SERVER + 'api/users');
  }
}
