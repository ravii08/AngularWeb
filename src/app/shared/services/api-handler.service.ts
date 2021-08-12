import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateService } from './state.service';



@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

constructAPIUrl(url) {
  return environment.apiUrl + url
}

  constructor(public http: HttpClient, public router:Router, public stateService: StateService) { }

  // this method used to call any getAPICall
  public getAPICall(url: string): Observable<any> {
    if(url) {
      return this.http.get<any>(this.constructAPIUrl(url), {
        headers: new HttpHeaders(this.stateService.headerOptions)
      }) .pipe(
        catchError((error) => {
          this.handleError(error);
          return throwError(error)
        })
      );
  }
}

// this method used to call any deleteAPICall
public deleteAPICall(url: string): Observable<any> {
  if(url) {
    return this.http.delete<any>(this.constructAPIUrl(url), {
      headers: new HttpHeaders(this.stateService.headerOptions)
    }).pipe(
      catchError((error) => {
        this.handleError(error);
        return throwError(error)
      })
    );
}
}

// this method used to call any putAPICall
public putAPICall(url: string,payload: any): Observable<any> {
  
    return this.http.put<any>(this.constructAPIUrl(url), payload, {
      headers: new HttpHeaders(this.stateService.headerOptions)
    }).pipe(
      catchError((error) => {
        this.handleError(error);
        return throwError(error)
      })
    );
}

// this method used to call any postAPICall
public postAPICall(url: string,payload: any): Observable<any> {
  
  return this.http.post<any>(this.constructAPIUrl(url), payload, {
    headers: new HttpHeaders(this.stateService.headerOptions)
  }).pipe(
    catchError((error) => {
      this.handleError(error);
      return throwError(error)
    })
  );
}

handleError(error) {
 
  if (error.error instanceof ErrorEvent) {
    // client-side error
    this.stateService.errorMessage = `Error: ${error.error.message}`;
    this.router.navigate(['/error']);
  } else {
    // server-side error
    this.stateService.errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    this.router.navigate(['/error']);
  }
  
 
}
}
