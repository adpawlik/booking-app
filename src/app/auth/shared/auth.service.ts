import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import * as moment from 'moment';
import { map } from 'rxjs/operators';

const jwt = new JwtHelperService();
class DecodedToken {
  exp: number = 0;
  username: string = '';
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private decodedToken;

  constructor(private http: HttpClient) {
    this.decodedToken = JSON.parse(localStorage.getItem('booking_meta')) || new DecodedToken();
  }

  private saveToken(token: string): string {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('booking_auth', token);
    localStorage.setItem('booking_meta', JSON.stringify(this.decodedToken));
    return token;
  }

  private getExpiration() {
    return moment.unix(this.decodedToken.exp);
  }

  public isAuthenticated(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  public getAthtoken(): string {
    return localStorage.getItem('booking_auth');
  }

  public register(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/register', userData);
  }
  public login(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/login', userData).pipe(map(
      (token: string) => this.saveToken(token)));
  }

  public logout() {
    localStorage.removeItem('booking_auth');
    localStorage.removeItem('booking_meta');
    this.decodedToken = new DecodedToken();
  }

}

