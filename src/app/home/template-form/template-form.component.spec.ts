import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogBoxComponent } from '@app/shared/components/dialog-box/dialog-box.component';
import { SharedModule } from '@app/shared/shared.module';
import { of } from 'rxjs';

import { TemplateFormComponent } from './template-form.component';

describe('TemplateFormComponent', () => {
  let component: TemplateFormComponent;
  let fixture: ComponentFixture<TemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        SharedModule,
        MatSelectModule,
        MatRadioModule,
        BrowserAnimationsModule,
        MatButtonModule
      ],
      declarations: [ TemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('login should perform on valid form', () => {
    spyOn(component,'submit')
    component.submit();
    expect(component.submit).toHaveBeenCalled()
  });
  it('check openDialog function', () => {
    spyOn(component, 'openDialog');
    spyOn(component.dialog, 'open').and.returnValue({afterClosed: () => of(true)} as MatDialogRef<DialogBoxComponent>);
    component.openDialog()
    expect(component.openDialog).toHaveBeenCalled();
  });
});
