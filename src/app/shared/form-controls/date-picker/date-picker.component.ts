import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;

  @Input() name: string;

  @Input() labelForDate : string;

  @Input() label: string;

  @Input() error: string;

  @Input() required? = false;

  @Input() placeholderValue: string;

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  updateDOB(dateObject) {
    this.onClick.emit(dateObject);
  }

  

}
