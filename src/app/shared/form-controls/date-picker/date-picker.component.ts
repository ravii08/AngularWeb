import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;

  @Input() Name: string;

  @Input() labelForDate : string;

  @Input() label: string;

  @Input() error: string;

  @Input() Required? = false;

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  updateDOB(dateObject) {
    this.onClick.emit(dateObject);
  }


}
