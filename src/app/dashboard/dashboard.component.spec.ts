import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      declarations: [ DashboardComponent ],
      providers: [
        {provide: MatSnackBarRef, useValue: {}},
        {provide: MAT_SNACK_BAR_DATA, useValue: []}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Build SVG function', ()=>{
    spyOn(component, 'buildSvg');
    component.buildSvg();
    expect(component.buildSvg).toHaveBeenCalled()
  });
  it('Have width and height',() =>{
    expect(component.width).toBe(window.innerWidth * 1.0);
    expect(component.height).toBe(window.innerHeight * 1.0);
  })
});
