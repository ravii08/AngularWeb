import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {

  @Input() isRequired = false;

  @Input() label: string;

  @Input() Options: any;

  @Input() error?: string;

  @Input() value: string = 'value';

  @Input() id: string = 'id';

  @Input() checked: string = 'checked';

  @Output() valueSelectionChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  checkBoxChange(value:any) {
    this.valueSelectionChanged.emit(value)
  }

}
