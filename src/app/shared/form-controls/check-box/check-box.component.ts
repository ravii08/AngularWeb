import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {

  @Input() isRequired = false;

  @Input() label: string;

  @Input() options: any;

  @Input() error?: string;

  @Input() value: string;

  @Input() name: string;

  @Input() parentFormGroup : FormGroup;

  @Output() valueSelectionChanged = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
   

  }

  checkBoxChange() {
    this.valueSelectionChanged.emit()

  }

}
