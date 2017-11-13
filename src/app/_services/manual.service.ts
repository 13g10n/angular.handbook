import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Manual } from '../_models/manual';
import {Topic} from '../_models/topic';
import {AuthenticationService} from './authentication.service';
import { Comment } from "../_models/comment";

@Injectable()
export class ManualService {

  private baseUrl = 'http://127.0.0.1:8000/api/manuals/';

  constructor(
    private http: Http,
    private authService: AuthenticationService) {
  }

  searchManual(query: string): Promise<Manual[]> {
    return this.http
      .get(this.baseUrl + '?search=' + query)
      .map(response => response.json() as Manual[] )
      .toPromise();
  }

  getManualList(): Promise<Manual[]> {
    return this.http
      .get(this.baseUrl)
      .map(response => response.json() as Manual[] )
      .toPromise();
  }

  getTopManualList(): Promise<Manual[]> {
    return this.http
      .get(this.baseUrl + 'top/')
      .map(response => response.json() as Manual[] )
      .toPromise();
  }

  getTopicList(): Promise<Topic[]> {
    return this.http
      .get('http://localhost:8000/api/topics/')
      .map(response => response.json() as Topic[] )
      .toPromise();
  }

  searchTopic(query): Promise<Topic[]> {
    return this.http
      .get('http://localhost:8000/api/topics/?search=' + query)
      .map(response => response.json() as Topic[] )
      .toPromise();
  }

  getManual(manualId: number): Promise<Manual> {
    return this.http
      .get(this.baseUrl + manualId)
      .map(response => response.json() as Manual )
      .toPromise();
  }

  create(manual: Manual) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + this.authService.token
    });
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post('http://localhost:8000/api/manuals/', JSON.stringify(manual), options)
      .map(response => response.json())
      .toPromise();
  }

  rate(id: number, value: number) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + this.authService.token
    });
    const options = new RequestOptions({ headers: headers });

    const data = {
      id: id,
      rate: value,
    };

    return this.http
      .post('http://localhost:8000/api/rate/', JSON.stringify(data), options)
      .map(response => response.json())
      .toPromise();
  }

  createComment(id: number, comment: Comment) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + this.authService.token
    });
    const options = new RequestOptions({ headers: headers });

    const data = {
      id: id,
      content: comment.content,
    };

    return this.http
      .post('http://localhost:8000/api/comment/', JSON.stringify(data), options)
      .map(response => response.json())
      .toPromise();
  }

}
