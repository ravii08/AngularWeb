import { Component, Input, OnInit } from '@angular/core';

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

  @Input() dropDownData: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
