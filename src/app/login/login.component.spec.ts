import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogBoxComponent } from '@app/shared/components/dialog-box/dialog-box.component';
import { TextInputComponent } from '@app/shared/form-controls/text-input/text-input.component';
import { AuthenticationService } from '@app/shared/services/authentication.service';
import { SharedModule } from '@app/shared/shared.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;



  beforeEach(async(async () => {
   await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule,
        SharedModule,
        FormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule
      ],
      declarations: [ 
        LoginComponent,
        DialogBoxComponent,
        TextInputComponent,
      ],
      providers: [
        AuthenticationService, FormBuilder, 
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('validate fields', () => {
    component.ValidateFields();
    expect(component.ValidateFields).toBeTruthy();
  });
  it('login should not perform on invalid form', () => {
    expect(component.submitForm()).toBeUndefined();
  });
  it('login should perform on invalid form', () => {
    component.loginForm = component.userLoginForm.group({
      userName: ['admin', Validators.required],
      password: ['', Validators.required]
    });
    spyOn(component, 'ValidateFields');
    spyOn(component.dialog, 'open');
    component.submitForm();
    expect(component.submitted).toEqual(true);
    expect(component.ValidateFields).toHaveBeenCalled();
    expect(component.dialog.open).toHaveBeenCalled()
  });
  it('login should perform on valid form', () => {
    component.loginForm = component.userLoginForm.group({
      userName: ['admin', Validators.required],
      password: ['admin123', Validators.required]
    });
    spyOn(component, 'ValidateFields');
    spyOn(component,'validateUser');
    component.submitForm();
    expect(component.submitted).toEqual(true);
    expect(component.ValidateFields).toHaveBeenCalled();
    expect(component.validateUser).toHaveBeenCalled();
  });
  it('checking form value change', () => {
    component.submitted = true;
    spyOn(component, 'ValidateFields');
    component.onFormValuesChange();
    expect(component.onFormValuesChange).toBeTruthy();
    expect(component.ValidateFields).toHaveBeenCalled()
  })
});
