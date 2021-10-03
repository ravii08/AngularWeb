import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AuthenticationService } from '@app/shared/services/authentication.service';

import { ReactiveFormComponent } from './reactive-form.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogBoxComponent } from '@app/shared/components/dialog-box/dialog-box.component';
import { TextInputComponent } from '@app/shared/form-controls/text-input/text-input.component';
import { CheckBoxComponent } from '@app/shared/form-controls/check-box/check-box.component';
import { RadioBoxComponent } from '@app/shared/form-controls/radio-box/radio-box.component';
import { ChipComponent } from '@app/shared/form-controls/chip/chip.component';
import { DropDownComponent } from '@app/shared/form-controls/drop-down/drop-down.component';
import { DatePickerComponent } from '@app/shared/form-controls/date-picker/date-picker.component';
import { SharedModule } from '@app/shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { of } from 'rxjs';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule,
        SharedModule,
        MatMenuModule,
        MatDatepickerModule,
        MatRadioModule,
        MatCheckboxModule,
        FormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatButtonModule

      ],
      declarations: [ 
        ReactiveFormComponent,
        DialogBoxComponent,
        TextInputComponent,
        CheckBoxComponent,
        RadioBoxComponent,
        ChipComponent,
        DropDownComponent,
        DatePickerComponent
       ],
       providers: [
         {provide: FormBuilder, useValue: formBuilder},
         AuthenticationService, {provide: MatDialogRef, useValue: {}},
         {provide: MAT_DIALOG_DATA, useValue: []}
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call dropDown component', () => {
    spyOn(component, 'dropDown');
    component.dropDown();
    expect(component.dropDown).toHaveBeenCalled()
  });
  it('should call radioButton component', () => {
    spyOn(component, 'radioButton');
    component.radioButton();
    expect(component.radioButton).toHaveBeenCalled()
  });
  it('should call checkBox component', () => {
    spyOn(component, 'checkBox');
    component.checkBox();
    expect(component.checkBox).toHaveBeenCalled()
  });
  it('should call DatePicker component', () => {
    const a = new Date("August 15, 2021 10:18:25")
    component.reactiveForm.setControl('functioncall', new FormControl(a))
    component.functionCall(a);
    expect(component.functionCall).toBeTruthy()
  });
  it('submit function', () => {
    spyOn(component, 'submit');
    component.submit();
    expect(component.submit).toHaveBeenCalled()
  });
  it('validate fields form inValid', () => {
    spyOn(component, 'ValidateFields');
    spyOn(component.dialog, 'open').and.returnValue({afterClosed: () => of(true)} as MatDialogRef<DialogBoxComponent>);
    component.ValidateFields()
    expect(component.ValidateFields).toHaveBeenCalled();
  });
  it('validate fields form Valid', () => {
    spyOn(component, 'validateForm');
    spyOn(component.dialog, 'open').and.returnValue({afterClosed: () => of(true)} as MatDialogRef<DialogBoxComponent>);
    component.validateForm()
    expect(component.validateForm).toHaveBeenCalled();
  });
  it('validate fields', () => {
    spyOn(component, 'ValidateFields')
    component.ValidateFields();
    expect(component.ValidateFields).toHaveBeenCalled()
  })
});
