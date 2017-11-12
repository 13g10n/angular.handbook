import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../_models/user';
import {TranslateService} from "../_translations/translate.service";

@Injectable()
export class AuthenticationService {

  private DOMAIN = 'http://127.0.0.1:8000/';

  public token: string;

  constructor(
    private http: Http,
    private translateService: TranslateService
  ) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  setUser(user) {
    this.translateService.use(user.language);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getToken() {
    return this.token;
  }

  login(email: string, password: string): Observable<String> {
    const myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json');

    return this.http.post(
      this.DOMAIN + 'api/accounts/login/',
      JSON.stringify({ email: email, password: password }),
      { headers: myHeader }
    )
      .map((response: Response) => {
        const token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));
        }

        return response.json();
      });
  }

  logout(): void {
      this.token = null;
      localStorage.removeItem('currentUser');
  }

  isLoggedIn() {
      if (localStorage.getItem('currentUser') == null) {
          return false;
      } else {
          return true;
      }
  }
}
