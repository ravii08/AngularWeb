import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  buttonText1 = "ok";
  buttonText2 = null;
  ErrorHeader = "All the required fileds must contain correct information. Check and validate required fields";
  formData: any;
  constructor(public stateService: StateService, public dialog: MatDialog, public dialogRef: MatDialogRef<DialogBoxComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.buttonsChange()
    }

  ngOnInit(): void {
    this.formData = this.data
  }

  buttonsChange() {
    if (this.data.type === this.stateService.confirmation) {
      this.buttonText1 = 'Yes';
      this.buttonText2 = 'No'
    }
  }

}
