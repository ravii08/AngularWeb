import { Component, HostListener, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs';
import { AuthenticationService } from './shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POC-BOA';
  @ViewChild('drawer') drawer: any;
  scroll: boolean = false;

  constructor(public service: AuthenticationService, public  breakpointObserver: BreakpointObserver, public route: Router){}

  closeDrawer() {
    this.drawer.close();
  }


  @HostListener("window:resize")
  onResize() {
    this.scroll = false;
    if(window.innerHeight <= 222) {
      this.scroll = true;
    }
  }
}
