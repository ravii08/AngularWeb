import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomInputComponent } from './shared/form-controls/custom-input/custom-input.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { NavLinksComponent } from './navigation/nav-links/nav-links.component';
import { MatMenuModule} from '@angular/material/menu';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { CheckBoxComponent } from './shared/form-controls/check-box/check-box.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RadioBoxComponent } from './shared/form-controls/radio-box/radio-box.component';
import {MatRadioModule} from '@angular/material/radio';
import { DatePickerComponent } from './shared/form-controls/date-picker/date-picker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogBoxComponent } from './shared/components/dialog-box/dialog-box.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ChipComponent } from './shared/form-controls/chip/chip.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectFilterModule } from 'mat-select-filter';
import {MatSelectModule} from '@angular/material/select';
import { DropDownComponent } from './shared/form-controls/drop-down/drop-down.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    NavLinksComponent,
    NavBarComponent,
    CheckBoxComponent,
    RadioBoxComponent,
    DatePickerComponent,
    DialogBoxComponent,
    ChipComponent,
    DropDownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
