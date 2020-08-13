import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { LoginService } from '../services/login.service';

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.loginService.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + authToken,
        //TOKEN_HEADER_KEY: authToken,
      },
    });

    // req = req.clone({
    //   headers: req.headers.set(TOKEN_HEADER_KEY, authToken),
    // });

    return next.handle(req);
  }
}
