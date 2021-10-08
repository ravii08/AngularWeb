import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '@app/shared/services/authentication.service';
import { CommonService } from '@app/shared/services/common.service';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  navDetail: boolean  
  
  showLoader: boolean;

  constructor(public authService: AuthenticationService, public commonService: CommonService, public loaderService: LoaderService){}


ngOnInit() {
  this.commonService.navDetailData.subscribe(data => {
    this.navDetail = data
  })

  this.loaderService.status.subscribe((val: boolean) => {
    this.showLoader = val;
 
})

}
}
