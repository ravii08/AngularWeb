import { G } from '@angular/cdk/keycodes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const headerOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn = false;
  TokenUrl= 'http://localhost:3000/credentials'

  constructor(private route: Router, private http: HttpClient) {}
  login() {
    this.isLoggedIn = true;
    this.route.navigate(['/dashboard']);
    // alert("loggedin")
  }
  // logout() {
  //   sessionStorage.removeItem('currentUser');
  // }

  // public get loggedIn(): boolean {
  //   return (sessionStorage.getItem('currentUser') !== null);
  // }

  getTokenData() {
    return this.http.get(this.TokenUrl, headerOptions);
  }
}
