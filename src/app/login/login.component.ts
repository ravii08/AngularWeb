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
  username = 'username';
  password = 'password';
  required = this.username + 'Required';

  ngOnInit() {
    this.loginForm = this.userLoginForm.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  constructor(
    private _auth: AuthenticationService,
    private _router: Router,
    public userLoginForm: FormBuilder
  ) {}

  login() {
    if (
      this.loginForm.get('username').value == 'admin' &&
      this.loginForm.get('password').value == 'admin123'
    ) {
      this._auth.getTokenData().subscribe(res => {
        console.log(res);
        this.postLogin(res)
      });
      
    } else {
      alert('ok');
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
