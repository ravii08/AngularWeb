import { C, V } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '@components/dialog-box/dialog-box.component';
import { DataModelService } from '@model/model/data-model.service';
import { ApiHandlerService } from '@services/api-handler.service';
import { AuthenticationService } from '@services/authentication.service';
import { StateService } from '@services/state.service';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  public userForm: FormGroup;
  ErrorArray: any= [] ;
  Required = ' Required';

  userNameLabel = "userName";
  username = 'userName';
  userNameError: string;
  usernamePlaceholder = "Enter Username"

  checkValue = "check";
  checkLabel = "checkBox";
  checkError :string;
  checkedData:any = [];

  dropDownValue = "dropDown";
  dropDownLabel = "dropDown";
  dropDownError :string;
  dropDownData = [];
  

  radioButtonValue = "radioButton"
  radioButtonLabel = "Gender";
  RadioButtonError :string;
  radioButtonData:any = [];

  dateValue = "joiningDate";
  dateLabel = "Select Date";
  joiningDateError :string;
  date: any;

  chipValue = "chip";
  chipLabel = "Chip";
  chipError: string;
  chipPlaceholder = "Select chip"
  alFieldError = [];


  formError = [{ name: this.username, Text: this.userNameLabel },
    {name: this.dropDownValue, Text: this.dropDownLabel},
    {name: this.dateValue, Text: this.dateLabel},
    ];

    
  constructor(public userLoginForm: FormBuilder, public service: AuthenticationService, public dialog: MatDialog,
    public stateService: StateService, public apiHandlerService: ApiHandlerService, public dataModel: DataModelService) { }

  ngOnInit() {
    this.userForm = this.userLoginForm.group({
      userName: ['', Validators.required],
      dropDown: ['',Validators.required],
      joiningDate: [new Date(),Validators.required],
      chip: [''],
      radioButton: [''],
      check: ['']
    });
    this.dropDown();
    this.checkBox();
    this.radioButton();
    
  }

  submit() {
   
   this.ValidateFields();
   if(this.userForm.invalid){
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: { message: this.ErrorArray , type: this.stateService.ErrorType }
    });
    return;
   }
  this.validateForm();
  }

  validateForm() {
    let data = this.userForm
    if(this.userForm.valid) {
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
    // this.apiHandlerService.getAPICall(this.service.dropDownDataUrl).subscribe(x => {
    //   for(let data of x) {
    //     this.dropDownData.push(data.name)
    //   }
    // })

    this.dataModel.dropDown().subscribe(x => {
      for(let data of x) {
        this.dropDownData.push(data.name)
      }
    })
  }

  dropOnSelect(selectedValue:any) {
    this.dropDownData = selectedValue.value
  }

  checkBox() {
    // this.apiHandlerService.getAPICall(this.service.checkBoxDataUrl).subscribe(x => {
    //   for(let data of x) {
    //     this.checkedData.push(data.value)
    //   }
    //  })

    this.dataModel.checkBox().subscribe(x => {
      for(let data of x) {
        this.checkedData.push(data.value)
      }
    })
  }
  onRadioChange(event) {
    this.radioButtonValue = event
  }

  radioButton() {
    // this.apiHandlerService.getAPICall(this.service.radioButtonDataUrl).subscribe(x => {
    //   for(let data of x) {
    //     this.radioButtonData.push(data.value)
    //   }
    // })

    this.dataModel.radioButton().subscribe(x => {
      for(let data of x) {
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
  for (const loginControl in this.userForm.controls) {
    const control = this.userForm.get(loginControl);
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
