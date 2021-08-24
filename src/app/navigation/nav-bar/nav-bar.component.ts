
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AuthenticationService } from '@services/authentication.service';
import { CommonService } from '@services/common.service';
import { StateService } from '@services/state.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: any;
  @ViewChild('drawer') drawer: any
  isScroll: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointer.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    
  );
  isSmall$: Observable<boolean> = this.breakpointer.observe(Breakpoints.Small)
  .pipe(
    map(result => result.matches),
    
  );
  isMedium$: Observable<boolean> = this.breakpointer.observe(Breakpoints.Medium)
  .pipe(
    map(result => result.matches),
    
  );
  isDesktop$: Observable<boolean> = this.breakpointer.observe(Breakpoints.Web)
  .pipe(
    map(result => result.matches),
    
  );

  constructor(public stateVaraibles: StateService, public router: Router, public breakpointer: BreakpointObserver,
     public commonService: CommonService, public authService: AuthenticationService) { }

  ngOnInit(): void {
    if(window.innerHeight <= 222) {
      this.isScroll = true;
    }
  }


  closeDrawer() {
    if(this.drawer) {
    this.drawer.close();
    }
  }

  @HostListener("window:resize")
  onResize() {
    this.isScroll = false;
    if(window.innerHeight <= 222) {
      this.isScroll = true;
    }
  }
}


