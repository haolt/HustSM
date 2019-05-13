import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Division } from './division.class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DivisionsService {

  public API_URL: string = environment.apiUrl;
  public errStatus: string;

  constructor(
    private http: HttpClient
  ) { }

  getAllDivisions() : Observable<any>{
    return this.http.get(
      this.buildUrl('divisions')
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
