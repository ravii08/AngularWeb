import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '@components/dialog-box/dialog-box.component';
import { StateService } from '@services/state.service';

export interface Designation {
  id: string;
  value: string;
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('myForm', { static: false }) public MyForm: NgForm | any;

  fname: string | undefined;
  startDate = new Date(1996, 0, 1);
  formData = {
    userName: "",
    empId: "",
    emailId: "",
    dropDown: "",
    radioButton: "",
    joiningDate: "",
 
  }
 

  constructor(public dialog: MatDialog, public stateService: StateService) { }

  ngOnInit() {
   console.log(this.formData)
  }

  designations: Designation[] = [
    { id: '1', value: 'Developer' },
    { id: '2', value: 'Senior Programmer' },
    { id: '3', value: 'Software Architect' }
  ];

  submit() {
    if(this.MyForm.valid){
        this.openDialog();
   }
  }
  openDialog() {
    let data = this.MyForm
    const dialogRef = this.dialog.open(DialogBoxComponent, {
     data: { message: data.value, type: this.stateService.FormType }
    })

  }

 
}
