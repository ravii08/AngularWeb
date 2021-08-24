import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { StateService } from '@app/shared/services/state.service';
import { of } from 'rxjs';

import { DialogBoxComponent } from './dialog-box.component';

describe('DialogBoxComponent', () => {
  let component: DialogBoxComponent;
  let fixture: ComponentFixture<DialogBoxComponent>;

  const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed: of({}), close: null});
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };
  dialogRefSpyObj.componentInstance = { body: ''};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      declarations: [ DialogBoxComponent ],
      providers: [
       { provide: MatDialogRef, useValue: mockDialogRef},
       { provide: MAT_DIALOG_DATA, useValue: {}},
       StateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxComponent);
    component = fixture.componentInstance;
    component.data = {
      type: 'confirmation',
      message: 'Confirmation Message',
      ErrorHeader: 'ErrorHeader'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check buttonsChange', () => {
    component.buttonsChange();
    expect(component.data.type).toEqual(component.stateService.confirmation);
    expect(component.buttonText1).toBe('Yes');
    expect(component.buttonText2).toBe('No');
    expect(component.ErrorHeader).toBe(component.ErrorHeader)
  })
});
