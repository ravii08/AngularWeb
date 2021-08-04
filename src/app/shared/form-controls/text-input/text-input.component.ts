import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent  {
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
