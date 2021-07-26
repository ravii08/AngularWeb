import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogBoxComponent } from '../shared/components/dialog-box/dialog-box.component';
import { AuthenticationService } from '../shared/services/authentication.service';
import { StateService } from '../shared/services/state.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  submitted = false;
  ErrorArray: any;
  userNameLabel = "UserName";
  PasswordLabel = "Password"
  username = 'Username';
  password = 'Password';
  Required = ' Required';
  nameError: string;
  passwordError: string;

 

  
  formError = [{ name: this.username, Text: this.userNameLabel },
  { name: this.password, Text: this.PasswordLabel }];
  userData: any;
   
  ngOnInit() {
    this.loginForm = this.userLoginForm.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
    });

  }

  constructor(
    private _auth: AuthenticationService, private _router: Router, public userLoginForm: FormBuilder, public dialog: MatDialog,
    public stateService: StateService) { }

  login() {
    this.ValidateFields();
    if (this.loginForm.invalid) {
      const dialogRef = this.dialog.open(DialogBoxComponent, {
        data: { message: this.ErrorArray, type: this.stateService.ErrorType }
      });
     return;
    }
    this.validateUser()
  }

  validateUser() {
    if (this.loginForm.get('Username').value == 'admin' && this.loginForm.get('Password').value == 'admin123') {
      this._auth.getTokenData().subscribe(res => {
        this.postLogin(res)
      });
    }
  }

  postLogin(Response: any) {
    this._auth.login();
    sessionStorage.setItem('token', Response[0].token);
    sessionStorage.setItem('userName', Response[0].userName);
    sessionStorage.setItem('userRole', Response[0].userRole);
    sessionStorage.setItem('userID', Response[0].userId)

  }

  ValidateFields() {
    const error = '';
    this.ErrorArray = [];
    for (const loginControl in this.loginForm.controls) {
      const control = this.loginForm.get(loginControl);
      control.markAsTouched();
      if (control.errors) {
        for (const typeError in control.errors) {
          const errorText = this.formError.find(x => x.name == loginControl).Text;
          if (typeError == 'required') {
            this.ErrorArray.push(errorText + this.Required);
            this[control + 'Error'] = errorText + ' Required'
          }
        }
      }
    }
  }
}