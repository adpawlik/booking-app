import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
/* import { TouchSequence } from 'selenium-webdriver'; */

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getAthtoken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' +  token
        }
      });
    }
    return next.handle(request);
  }
}
