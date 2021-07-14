import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Input() labelForDate : string;
  @Input() label: string;
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  updateDOB(dateObject) {
    this.onClick.emit(dateObject);
  }


}
