import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() parentFormGroup: string;

  @Input() name: string;

  @Input() label: string;

  @Input() required? = false;
  
  @Input() error?: string;
  
  @Input() value: string = 'value';

  @Input() id: string = 'id';

  @Input() fieldName: string;

  @Input() placeholderValue: string;

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
