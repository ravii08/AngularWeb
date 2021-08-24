import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@app/shared/shared.module';

import { RadioBoxComponent } from './radio-box.component';

describe('RadioBoxComponent', () => {
  let component: RadioBoxComponent;
  let fixture: ComponentFixture<RadioBoxComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioBoxComponent ],
      imports : [
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        FormsModule,
        MatRadioModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioBoxComponent);
    component = fixture.componentInstance;
    component.parentFormGroup = formBuilder.group({
      username: ["username"],
    });
    component.name = 'username'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check valueOnSelect', () => {
    const spy = spyOn(component.valueSelectionChanged,'emit');
    component.optionChanged();
    expect(spy).toHaveBeenCalled();
  });
});
