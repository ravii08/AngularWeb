import { C, V } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { StateService } from 'src/app/shared/services/state.service';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public ReactiveForm: FormGroup;
  ErrorArray: any= [] ;
  Required = ' Required';

  userNameLabel = "UserName";
  username = 'Username';
  UsernameError: string;
  usernamePlaceholder = "Enter Username"

  checkValue = "check";
  checkLabel = "checkBox";
  checkError :string;
  checkedData:any = [];

  dropDownValue = "dropDown";
  dropDownLabel = "DropDown";
  dropDownError :string;
  dropDownData = [];
  dropDownArray = []

  radioButtonValue = "RadioButton"
  radioButtonLabel = "Gender";
  RadioButtonError :string;
  radioButtonData:any = [];

  dateValue = "JoiningDate";
  dateLabel = "Select Date";
  JoiningDateError :string;
  date: any;

  chipValue = "chip";
  chipLabel = "Chip";
  chipError: string;
  alFieldError = [];


  formError = [{ name: this.username, Text: this.userNameLabel },
    {name: this.dropDownValue, Text: this.dropDownLabel},
    {name: this.dateValue, Text: this.dateLabel},
    ];

    
  constructor(public userLoginForm: FormBuilder, public Service: AuthenticationService, public dialog: MatDialog,
    public stateService: StateService) { }

  ngOnInit() {
    this.ReactiveForm = this.userLoginForm.group({
      Username: ['', Validators.required],
      dropDown: ['',Validators.required],
      JoiningDate: ['',Validators.required],
      chip: [''],
      RadioButton: [''],
      check: ['']
    });
    this.dropDown();
    this.checkBox();
    this.radioButton();
    
  }

  submit() {
   
   this.ValidateFields();
   if(this.ReactiveForm.invalid){
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: { message: this.ErrorArray , type: this.stateService.ErrorType }
    });
    return;
   }
  this.validateForm();
  }

  validateForm() {
    let data = this.ReactiveForm
    if(this.ReactiveForm.valid) {
      const dialogRef = this.dialog.open(DialogBoxComponent, {
        width: '400px',
        data: { message: data.value, type: this.stateService.FormType }
      });
    }
  }
 
  okcheckBoxChange(event) {
    
    this.checkValue = event
  }

  dropDown() {
    this.Service.getDropDownData().subscribe(x => {
     for(let data of x){
       this.dropDownData.push(data.name)
     }
    })
  }

  dropOnSelect(selectedValue:any) {
    this.dropDownData = selectedValue.value
  }

  checkBox() {
    this.Service.getCheckBoxData().subscribe(x => {
      for(let data of x){
        this.checkedData.push(data.value)
      }
    })
  }
  onRadioChange(event) {
    this.radioButtonValue = event
  }

  radioButton() {
    this.Service.getRadioButtonData().subscribe(x => {
      for(let data of x){
        this.radioButtonData.push(data.value)
      }
    })
  }

  
 functioncall(event: any) {
      this.date = event.value
      const converted = new Date(this.date).toLocaleDateString(); 
}

ValidateFields() {
  
  this.ErrorArray = [];
  for (const loginControl in this.ReactiveForm.controls) {
    const control = this.ReactiveForm.get(loginControl);
    control.markAsTouched();
    if (control.errors) {
      for (const typeError in control.errors) {
        const errorText = this.formError.find(x => x.name == loginControl).Text;
        if (typeError == 'required') {
          this.ErrorArray.push(errorText + this.Required);
          this[loginControl + 'Error'] = errorText + this.Required
        }
      }
    }
  }
}
}
