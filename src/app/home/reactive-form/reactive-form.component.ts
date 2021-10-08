import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoaderService } from '@app/shared/services/loader.service';
import { DialogBoxComponent } from '@components/dialog-box/dialog-box.component';
import { DataModelService } from '@model/model/data-model.service';
import { ApiHandlerService } from '@services/api-handler.service';
import { AuthenticationService } from '@services/authentication.service';
import { StateService } from '@services/state.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  userForm: object;
  public reactiveForm: FormGroup;
  ErrorArray = [] ;
  Required = ' Required';

  userNameLabel = "userName";
  username = 'userName';
  userNameError: string;
  usernamePlaceholder = "Enter Username"

  checkValue = "check";
  checkLabel = "checkBox";
  checkError :string;
  checkedData = [];

  dropDownValue = "dropDown";
  dropDownLabel = "dropDown";
  dropDownError :string;
  dropDownData = [];
  

  radioButtonValue = "radioButton"
  radioButtonLabel = "Gender";
  RadioButtonError :string;
  radioButtonData = [];

  dateValue = "joiningDate";
  dateLabel = "Select Date";
  joiningDateError :string;
  date: any;

  chipValue = "chip";
  chipLabel = "Chip";
  chipError: string;
  chipPlaceholder = "Select chip"
  alFieldError = [];

  submittedData = ''

  formError = [{ name: this.username, Text: this.userNameLabel },
    {name: this.dropDownValue, Text: this.dropDownLabel},
    {name: this.dateValue, Text: this.dateLabel},
    ];

    
  constructor(public userLoginForm: FormBuilder, public service: AuthenticationService, public dialog: MatDialog,
    public stateService: StateService, public apiHandlerService: ApiHandlerService, public dataModel: DataModelService,
    public loader: LoaderService, private SpinnerService: NgxSpinnerService) {
      this.loader.display(true)
     }

  ngOnInit() {
    
    this.userForm = {
      userName: ['', Validators.required],
      dropDown: ['',Validators.required],
      joiningDate: [new Date(),Validators.required],
      chip: [''],
      radioButton: [''],
      check: ['']
    };
    this.reactiveForm  =  this.userLoginForm.group(this.userForm)
    this.dropDown();
    this.checkBox();
    this.radioButton();
    
  }

  submit() {
   
   this.ValidateFields();
   if(this.reactiveForm.invalid){
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: { message: this.ErrorArray , type: this.stateService.ErrorType }
    });
    return;
   }
  this.validateForm();
  this.stateService.reactiveFormData = this.reactiveForm.value
  console.log(this.stateService.reactiveFormData)
  }

  validateForm() {
    let data = this.reactiveForm.value
    if(this.reactiveForm.valid) {
      const dialogRef = this.dialog.open(DialogBoxComponent, {
        data: { message: data, type: this.stateService.FormType }
      });
    }
   }
 
  okcheckBoxChange(event) {
    
    this.checkValue = event
  }

  dropDown() {
   
    
    // this.loader.display(true);
    this.apiHandlerService.getAPICall(this.service.dropDownDataUrl).subscribe(x => {
      this.loader.display(false)
      for(let data of x) {
        this.dropDownData.push(data.name)
        
      }
    })

    // this.dataModel.dropDown().subscribe(x => {
    //   for(let data of x) {
    //     this.dropDownData.push(data.name)
    //   }
    // })
  }


  checkBox() {
 
    
    this.apiHandlerService.getAPICall(this.service.checkBoxDataUrl).subscribe(x => {
      this.loader.display(false)
      for(let data of x) {
        this.checkedData.push(data.value);
        
      }
    })
  }
  onRadioChange(event) {
    this.radioButtonValue = event
  }

  radioButton() {
  
    this.dataModel.radioButton().subscribe(x => {
      for(let data of x) {
        this.radioButtonData.push(data.value)
      }
    })
  }

  
 functionCall(event:any) {
      this.date = event.value
      const converted = new Date(this.date).toLocaleDateString(); 
}

ValidateFields() {
  
  this.ErrorArray = [];
  for (const loginControl in this.reactiveForm.controls) {
    const control = this.reactiveForm.get(loginControl);
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
