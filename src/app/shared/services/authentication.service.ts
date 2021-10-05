
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs'

const headerOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn = false;
  // TokenUrl= 'http://localhost:3000/credentials';

  // chipUrl = 'https://jsonplaceholder.typicode.com/users';

  dropDownDataUrl = 'http://localhost:4000/Users';

  // checkBoxDataUrl = 'http://localhost:4000/CheckBox';

  // radioButtonDataUrl = 'http://localhost:4000/RadioButton';

  constructor(private route: Router, private http: HttpClient) {}
  login() {
    this.isLoggedIn = true;
    this.route.navigate(['/dashboard']);
  }
 

  // getTokenData() {
  //   return this.http.get(this.TokenUrl, headerOptions);
  // }

  // getChipData():Observable<any>  {
  //   return this.http.get<any>(this.chipUrl, headerOptions)
  // }

  getDropDownData():Observable<any> {
    return this.http.get<any>(this.dropDownDataUrl, headerOptions)
  }

  // getCheckBoxData(): Observable<any>{
  //   return this.http.get<any>(this.checkBoxDataUrl, headerOptions)
  // }

  // getRadioButtonData(): Observable<any>{
  //   return this.http.get<any>(this.radioButtonDataUrl,headerOptions)
  // }
}
