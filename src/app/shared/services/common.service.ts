import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  public navDetail: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public navDetailData = this.navDetail.asObservable();

  constructor(private router: Router) { }

  getUrlParams() {
    this.router.url.indexOf('login') == -1
  }
}
