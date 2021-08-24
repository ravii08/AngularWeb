import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StateService } from '@app/shared/services/state.service';

import { ErrorPageComponent } from './error-page.component';

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ ErrorPageComponent ],
      providers: [
        StateService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check routing', () => {
    expect(component.router.navigate).toBeTruthy()
  });
  it('check refresh function', () => {
    spyOn(component.router, 'navigate');
    spyOn(sessionStorage, 'clear');
    component.refresh();
    expect(sessionStorage.clear).toHaveBeenCalled();
    expect(component.router.navigate).toHaveBeenCalledWith(['/']);
  });
});
