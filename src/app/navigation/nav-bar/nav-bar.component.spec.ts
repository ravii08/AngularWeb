import { LayoutModule } from '@angular/cdk/layout';
import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '@app/shared/services/authentication.service';
import { CommonService } from '@app/shared/services/common.service';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      imports: [
        HttpClientTestingModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTabsModule,
        MatMenuModule,
        RouterTestingModule,
      ],
      providers: [
        CommonService, AuthenticationService, HttpClient
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('closedrawer function called', () => {
    component.drawer = { close: function () { return true }};
    component.closeDrawer();
    expect(component.closeDrawer).toBeTruthy()
  });
  it('onResize function called', () => {
    spyOnProperty(window, 'innerHeight').and.returnValue(200);
    component.onResize();
    expect(component.isScroll).toEqual(true);
  });
  it('hostlistener window resize', () => {
    spyOn(component, 'onResize');
    window.dispatchEvent(new Event('resize'));
    expect(component.onResize).toHaveBeenCalled();
  });
  it('ngOnInIt', () => {
    spyOnProperty(window, 'innerHeight').and.returnValue(200);
    component.onResize();
    expect(component.isScroll).toEqual(true);
  });

  afterEach(() => {
    fixture.destroy();
  })
});
