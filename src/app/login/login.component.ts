import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogBoxComponent } from '@components/dialog-box/dialog-box.component';
import { DataModelService } from '@model/model/data-model.service';
import { ApiHandlerService } from '@services/api-handler.service';
import { AuthenticationService } from '@services/authentication.service';
import { StateService } from '@services/state.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  submitted = false;
  ErrorArray: any;
  userNameLabel = "userName";
  passwordLabel = "password";
  userName = 'userName';
  password = 'password';
  required = ' Required';
  userNameError:string;
  passwordError:string;
  
  

 

  
  formError = [{ name: this.userName, Text: this.userNameLabel },
  { name: this.password, Text: this.passwordLabel }];
  userData: any;
   
  ngOnInit() {
    this.loginForm = this.userLoginForm.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  constructor(
    private service: AuthenticationService, private _router: Router, public userLoginForm: FormBuilder, public dialog: MatDialog,
    public stateService: StateService, public apiHandlerService: ApiHandlerService, public datModel: DataModelService) { }

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
    if (this.loginForm.get('userName').value == 'admin' && this.loginForm.get('password').value == 'admin123') {
    //  this.apiHandlerService.getAPICall(this.service.TokenUrl).subscribe(x => {
    //    this.postLogin(x);
    //  })
    this.datModel.tokenData().subscribe(x => {
      this.postLogin(x)
    })
    }
  }

  postLogin(response: any) {
    this.service.login();
    sessionStorage.setItem('token', response[0].token);
    sessionStorage.setItem('userName', response[0].userName);
    sessionStorage.setItem('userRole', response[0].userRole);
    sessionStorage.setItem('userID', response[0].userId)

  }

  ValidateFields() {
    
    this.ErrorArray = [];
    for (const loginControl in this.loginForm.controls) {
      const control = this.loginForm.get(loginControl);
      control.markAsTouched();
      if (control.errors) {
        for (const typeError in control.errors) {
          const errorText = this.formError.find(x => x.name == loginControl).Text;
          if (typeError == 'required') {
            this.ErrorArray.push(errorText + this.required);
            this[loginControl + 'Error'] = errorText + this.required
          }
        }
      }
    }
  }
}