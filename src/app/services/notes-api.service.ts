import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pathToFileURL } from 'url';

declare const API_ROOT: string;
declare const STAGE: string;

@Injectable({
  providedIn: 'root',
})
export class NotesApiService {
  options;
  constructor(private httpClient: HttpClient) {}
  setOptions() {
    this.options = {
      headers: {
        app_user_id: '123',
        app_user_name: 'yuechao',
      },
    };
  }

  getNotes(): Observable<any> {
    // let path = STAGE + '/notes?limit=8';
    // let endPoint = API_ROOT + path;
    let endPoint = 'https://api.modernx.dev/v1/notes?limit=8';
    this.setOptions();

    return this.httpClient.get(endPoint, this.options);
  }
}
