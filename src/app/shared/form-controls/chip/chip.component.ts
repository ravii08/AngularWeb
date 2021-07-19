import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipList } from '@angular/material/chips';
import { COMMA, ENTER, T } from '@angular/cdk/keycodes';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent  {

  @Input() parentFormGroup: FormGroup;
  @Input() Name: string;
  @Input() label: string;
  @Input() error: string;
  addOnBlur = true
  // visible = true;
  // selectable = true;
  removable = true;
  
  // countriesCtrl = new FormControl();
  
  // filteredCountries: Observable<string[]>;
  // countries: string[] = [];
  // allCountries: ['Apple',
  // 'Lemon',
  // 'Lime',
  // 'Orange',
  // 'Strawberry'];


  // @ViewChild('chipList', {static: false }) chipList: MatChipList;
  // readonly separatorKeysCodes: number[] = [ENTER];
  // @ViewChild('countryInput') countryInput: ElementRef<HTMLInputElement>;
  // @ViewChild('auto') matAutocomplete: MatAutocomplete;
  



  // constructor(public authService: AuthenticationService) {
  //   this.filteredCountries = this.countriesCtrl.valueChanges.pipe(
  //       startWith(''),
  //       map((country:(string | null))  => country ? this._filter(country):this.allCountries.slice()));
  // }

  // ngOnInit() {
  // }

  // add(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;

  //   // Add our country
  //   if ((value || '').trim()) {
  //     this.countries.push(value.trim());
  //   }

  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }

  //   this.countriesCtrl.setValue(null);
  // }

  // remove(country: string): void {
  //   const index = this.countries.indexOf(country);

  //   if (index >= 0) {
  //     this.countries.splice(index, 1);
  //   }
  // }

  // selected(event: MatAutocompleteSelectedEvent): void {
  //   this.countries.push(event.option.viewValue);
  //   this.countryInput.nativeElement.value = '';
  //   this.countriesCtrl.setValue(null);
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.allCountries.filter(country => country.toLowerCase().indexOf(filterValue) === 0);
  // }


  separatorKeysCodes = [ENTER, COMMA];

  fruitCtrl = new FormControl();

  filteredFruits: Observable<any[]>;

  fruits = [
    'Lemon',
  ];

  allFruits = [
    'Apple',
    'Lemon',
    'Lime',
    'Orange',
    'Strawberry'
  ];

  @ViewChild('fruitInput') fruitInput: ElementRef;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this.filter(fruit) : this.allFruits.slice()));
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {

      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  filter(name: string) {
    return this.allFruits.filter(fruit =>
        fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }


}


