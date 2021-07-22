import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CustomInputComponent } from './form-controls/custom-input/custom-input.component';
import { DatePickerComponent } from './form-controls/date-picker/date-picker.component';
import { CheckBoxComponent } from './form-controls/check-box/check-box.component';
import { RadioBoxComponent } from './form-controls/radio-box/radio-box.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { DropDownComponent } from './form-controls/drop-down/drop-down.component';
import { ChipComponent } from './form-controls/chip/chip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectFilterModule } from 'mat-select-filter';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    CustomInputComponent,
    DatePickerComponent,
    CheckBoxComponent,
    RadioBoxComponent,
    DialogBoxComponent,
    DropDownComponent,
    ChipComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatChipsModule,
    MatAutocompleteModule,
    NgxMatSelectSearchModule,
    MatSelectFilterModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
  ],

  exports: [
    CustomInputComponent,
    DatePickerComponent,
    CheckBoxComponent,
    RadioBoxComponent,
    DialogBoxComponent,
    DropDownComponent,
    ChipComponent
  ]
})
export class SharedModule { }
