import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs';
import { AuthenticationService } from './shared/services/authentication.service';
import { Router } from '@angular/router';
import { CommonService } from './shared/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  navDetail: boolean  

  constructor(public authService: AuthenticationService, public commonService: CommonService){}

 
ngOnInit() {
  this.commonService.navDetailData.subscribe(data => {
    this.navDetail = data
  })
}

 
}
