import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseDataService {

  constructor(private http: HttpClient) { }
  // formatErrors
  private formatErrors(error: any) {
    return throwError(error.error);
  }

  public save<T>(path: string, entity: any): Observable<any> {
    const option = {
      'headers': this.getHeaders()
    }
    return this.http.post<T>(
      `${path}`
      , JSON.stringify(entity)
      , option);
  }
  public get<T>(path: string, param?: any): Observable<any> {
    const option = {
      'headers': this.getHeaders()
    }
    return this.http.get(`${path}`, option);
  }
  public login<T>(path: string, entity: any): Observable<any> {
    return this.http.post<T>(
      `${path}`
      , JSON.stringify(entity)
      , {
        'headers': this.getHeaders(), observe: 'response'
      });
  }
  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', localStorage.getItem('token') || '');
    return headers;
  }

}
