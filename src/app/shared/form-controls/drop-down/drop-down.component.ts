import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  @Input() parentFormGroup: string;
  @Input() Name: string;
  @Input() label: string;
  @Input() Required? = false;
  @Input() error?: string;
  
  @Input() value: string = 'value';

  @Input() id: string = 'id';
  @Input() fieldName: string;

  @Output() callBackOnSelect: any = new EventEmitter<string>();

  searchText: any  = '';

  @Input() dropDownData: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChange(selectedValue: any) : void {
    this.callBackOnSelect.emit(selectedValue)
  }
}
