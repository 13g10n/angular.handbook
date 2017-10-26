import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Manual } from '../_models/manual';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ManualService {

  private baseUrl = 'http://127.0.0.1:8000/api/manuals/';

  constructor(private http: Http) {
  }

  searchManual(query: string): Promise<Manual[]> {
    console.log('searching...');
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

  getManual(manualId: number): Promise<Manual> {
    return this.http
      .get(this.baseUrl + manualId)
      .map(response => response.json() as Manual )
      .toPromise();
  }

}
