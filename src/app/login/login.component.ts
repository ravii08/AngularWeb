import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  username = 'Username';
  password = 'Password';
  Required = ' Required';
 

  ngOnInit() {
    this.loginForm = this.userLoginForm.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
    
    });
  }

  constructor(
    private _auth: AuthenticationService,
    private _router: Router,
    public userLoginForm: FormBuilder
  ) {}

  login() {
    if (
      this.loginForm.get('Username').value == 'admin' &&
      this.loginForm.get('Password').value == 'admin123'
    ){
      this._auth.getTokenData().subscribe(res => {
        // console.log(res);
        this.postLogin(res)
      });
    }
    else {
      alert("enter correct Details")
      // this.loginForm.reset()
    }
  }

  postLogin(Response:any) {
    if(this.loginForm.valid) {
      this._auth.login();
      sessionStorage.setItem('token', Response[0].token);
      sessionStorage.setItem('userName', Response[0].userName);
      sessionStorage.setItem('userRole',Response[0].userRole);
      sessionStorage.setItem('userID', Response[0].userId)
    }
  }

}
