import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private REST_API_SERVER = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest(): Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
