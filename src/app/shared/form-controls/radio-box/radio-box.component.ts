import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-box',
  templateUrl: './radio-box.component.html',
  styleUrls: ['./radio-box.component.scss']
})
export class RadioBoxComponent implements OnInit {


  @Input() isRequired = false;

  @Input() label: string;

  @Input() options: any;

  @Input() error?: string;

  @Input() value: string = 'value';

  @Input() name : string;

  @Input() parentFormGroup: FormGroup;

  @Output() valueSelectionChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  optionChanged(value: any) {
    this.valueSelectionChanged.emit(value.source.value)
  }

}
