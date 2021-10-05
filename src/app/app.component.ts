import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '@app/shared/services/authentication.service';
import { CommonService } from '@app/shared/services/common.service';
import { LoaderService } from './shared/services/loader.service';
import { I } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  navDetail: boolean  
  

  constructor(public authService: AuthenticationService, public commonService: CommonService, public loader: LoaderService){}

 @HostListener('window:scroll', ['$event'])
 onWindowScroll(event) {
   this.loader.scrollTop.next(true);
   this.loader.notifyBarObs.subscribe(notifyIsOn => {
     if( notifyIsOn && window.pageYOffset > 65) {
       this.loader.scrollTop.next(false);
     }
     else if (!notifyIsOn && window.pageYOffset > 20) {
       this.loader.scrollTop.next(false)
     }
   })
 }

ngOnInit() {
  this.commonService.navDetailData.subscribe(data => {
    this.navDetail = data
  })
  this.loader.display(false)
}

 
}
