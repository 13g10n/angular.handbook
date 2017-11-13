import {EventEmitter, Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { TranslationService } from '../_translations/translation.service';
import { User } from '../_models/user';

@Injectable()
export class AuthenticationService {

  private DOMAIN = 'http://127.0.0.1:8000/';

  public token: string;

  userChange: EventEmitter<User> = new EventEmitter();

  constructor(
    private http: Http,
    private translateService: TranslationService
  ) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.userChange.emit(JSON.parse(localStorage.getItem('user')));
  }

  getUserChangeEmitter() {
    return this.userChange;
  }

  setUser(user) {
    this.translateService.use(user.language);
    localStorage.setItem('user', JSON.stringify(user));
    this.userChange.emit(user);
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
