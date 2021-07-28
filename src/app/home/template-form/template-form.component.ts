import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

//   public ReactiveForm: FormGroup;
//   ErrorArray: any= [] ;
//   Required = ' Required';

//   userNameLabel = "UserName";
//   username = 'Username';
  

//   checkValue = "check";
//   checkLabel = "checkBox";
//   checkError: string;
//   checkedData:any = [];

//   dropDownValue = "dropDown";
//   dropDownLabel = "DropDown";
//   dropDownData:any = [];

//   radioButtonValue = "RadioButton"
//   radioButtonLabel = "Gender";
//   radioButtonError: string
//   radioButtonData:any = [];

//   dateValue = "JoiningDate";
//   dateLabel = "Select Date";
//   date: any;

//   chipValue = "chip";
//   chipLabel = "Chip Label";
//   alFieldError = [];


//   formError = [{ name: this.username, Text: this.userNameLabel },
//     {name: this.checkValue, Text: this.checkLabel},
//     {name: this.dropDownValue, Text: this.dropDownLabel},
//     {name: this.radioButtonValue, Text: this.radioButtonLabel},
//     {name: this.dateValue, Text: this.dateLabel},
//     {name: this.dateValue, Text: this.chipLabel}
//     ];

    
//   constructor(public userLoginForm: FormBuilder, public Service: AuthenticationService, public dialog: MatDialog,
//     public stateService: StateService) { }

//   ngOnInit() {
    
//     this.dropDown();
//     this.checkBox();
//     this.radioButton();
    
//   }

//   submit() {
   
//    this.ValidateFields();
//    if(this.ReactiveForm.invalid){
//     const dialogRef = this.dialog.open(DialogBoxComponent, {
//       data: { message: this.ErrorArray , type: this.stateService.ErrorType }
//     });
//     return;
//    }
//   this.validateForm();
//   }

//   validateForm() {
//     let data = this.ReactiveForm
//     if(this.ReactiveForm.valid) {
//       const dialogRef = this.dialog.open(DialogBoxComponent, {
//         width: '400px',
//         data: { message: data.value, type: this.stateService.FormType }
//       });
//     }
//   }
 
//   okcheckBoxChange(event) {
//     console.log(event)
//   }

//   dropDown() {
//     this.Service.getDropDownData().subscribe(x => {
//      for(let data of x){
//        this.dropDownData.push(data.value)
//      }
//     })
//   }

//   checkBox() {
//     this.Service.getCheckBoxData().subscribe(x => {
//       for(let data of x){
//         console.log(data)
//         this.checkedData.push(data.value)
//       }
//     })
//   }
//   onRadioChange(event) {
//     console.log(event)
//   }

//   radioButton() {
//     this.Service.getRadioButtonData().subscribe(x => {
//       for(let data of x){
//         this.radioButtonData.push(data.value)
//       }
//     })
//   }

  
//  functioncall(event: any) {
//       this.date = event.value
//       const converted = new Date(this.date).toLocaleDateString(); 
// }

// ValidateFields() {
  
//   this.ErrorArray = [];
//   for (const loginControl in this.ReactiveForm.controls) {
//     const control = this.ReactiveForm.get(loginControl);
//     control.markAsTouched();
//     if (control.errors) {
//       for (const typeError in control.errors) {
//         const errorText = this.formError.find(x => x.name == loginControl).Text;
//         if (typeError == 'required') {
//           this.ErrorArray.push(errorText + this.Required);
          
//         }
//       }
//     }
//   }
// }



constructor(public userLoginForm: FormBuilder, public Service: AuthenticationService, public dialog: MatDialog,
     public stateService: StateService) { }
  
    ngOnInit() {
      
      
      
    }
}
