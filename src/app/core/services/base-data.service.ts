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
    return this.http.post<T>(
      `${path}`
      , JSON.stringify(entity)
      , {
        'headers': this.getHeaders(), observe: 'response'
      })
      .pipe(catchError(this.formatErrors));
  }
  public get<T>(path: string, param?: any): Observable<any> {
    const option = {
      'headers': new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.get(`${path}`, option);
  }
  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    
    headers = headers.append('Authorization', localStorage.getItem('token'));
    console.log(headers )
    return headers;
  }

}
