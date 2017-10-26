import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Manual } from '../_models/manual';

@Injectable()
export class ManualService {

  private baseUrl = 'http://127.0.0.1:8000/api/manuals/';

  constructor(private http: Http) {
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
