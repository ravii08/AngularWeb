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
  public variables = ['One','Two','County', 'Three', 'Zebra', 'XiOn'];
  public variables2 = [{ name: 'One' }, { id: 1, name: 'Two' }];

  public filteredList1 = this.variables.slice();
  // public filteredList2 = this.variables.slice();
  // public filteredList3 = this.variables.slice();
  // public filteredList4 = this.variables.slice();
  // public filteredList5 = this.variables2.slice();

  constructor(public authService: AuthenticationService, public commonService: CommonService){}

 
ngOnInit() {
  this.commonService.navDetailData.subscribe(data => {
    this.navDetail = data
  })
}

 
}
