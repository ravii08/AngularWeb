import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DatePickerComponent } from './date-picker.component';

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;
  const formBuilder: FormBuilder = new FormBuilder()

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        FormsModule
      ],
      declarations: [ DatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    component.parentFormGroup = formBuilder.group({
      JoiningDate: [new Date(), Validators.required]
    });
    component.name = 'JoiningDate'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check Update Date', () => {
    spyOn(component.onClick,'emit');
    component.updateDOB(event);
    expect(component.updateDOB).toBeTruthy();
    expect(component.onClick.emit).toHaveBeenCalled()
  });
  afterEach(() => {
    fixture.destroy()
  })
});

