import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/user';


@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getUsers(): Observable<User[]> {
        let headers = new Headers({ 'Authorization': 'Token ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.get('http://127.0.0.1:8000/api/users/', options)
            .map((response: Response) => response.json());
    }

    createUser(email: String, password: String, first_name: String, last_name: String): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let data = {
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
        }
        return this.http.post('http://127.0.0.1:8000/api/accounts/signup/', JSON.stringify(data), options)
            .map((response: Response) => response);
    }

    deleteUser(id: Number) {
        let headers = new Headers({ 'Authorization': 'Token ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        this.http.delete('http://127.0.0.1:8000/api/users/' + id + "/", options)
                .subscribe((res) => {
                })
    }

    manageUser(id: Number, blocked: boolean) {
        let headers = new Headers({ 'Authorization': 'Token ' + this.authenticationService.token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let json = JSON.stringify({ is_active: blocked });

        this.http.patch('http://127.0.0.1:8000/api/users/' + id + "/", json, options)
                .subscribe((res) => {
                })
    }

}