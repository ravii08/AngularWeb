import { U } from '@angular/cdk/keycodes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  // this method used to any getAPICall
  public getAPICall(url: string): Observable<any> {
    if(url) {
      return this.http.get<any>(this.constructAPIUrl(url), {
        headers: new HttpHeaders(this.stateService.headerOptions)
      })
    }
  }
}
