import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

    public API_URL: string = environment.apiUrl;
    public errStatus: string;

    constructor(
    private http: HttpClient
    ) { }
    // Test
    getUser() {
      return this.http.get(
        this.buildUrl('users/5cd4ee259ba77220b4a7a28b')
      );
    }

    doLogin(email: string, password: string): Observable<any> {
      const body = new HttpParams()
        .set('email', email)
        .set('password', password);
      return this.http.post<any>(
        this.buildUrl('auth/login'),
        body.toString(),
        {
          headers: this.buildHeader()
        }
      );
    }

    handleError(err) {
      if (err.error instanceof Error) {
          console.log(`Client side Error: ${ err.error.message }`);
      } else {
          this.errStatus = err.status;
          console.log(this.errStatus);
      }
    }

    // build header for request
    private buildHeader(): HttpHeaders {
        const header = new HttpHeaders({
            // Accept: 'application/json',
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return header;
    }

    private buildParams(paramsData): HttpParams {
        const params = new HttpParams({ fromObject: paramsData });
        return params;
    }
    // build url for request
    private buildUrl(endpoint: string): string {
        return this.API_URL + endpoint;
    }
}
