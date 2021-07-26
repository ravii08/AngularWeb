import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent  {
  @Input() label: string;
  @Input() type: string;
  @Input() parentFormGroup: FormGroup;
  @Input() fieldName: string;
  @Input() Name: string;
  @Input() error: string;
  @Input() Required? = false;

  public value: any;
  constructor() {}

  
}
