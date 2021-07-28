import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
})
export class CustomInputComponent  {
  @Input() label: string;

  @Input() type: string;

  @Input() parentFormGroup: FormGroup;

  @Input() fieldName: string;

  @Input() Name: string;

  @Input() error: string;

  @Input() Required? = false;

  @Input() placeholderValue : string;


  public value: any;
  constructor() {}

  
}
