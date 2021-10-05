import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public scrollTop: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public overlay: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public fullOverlay: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public onDrawerOverlay:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public notifyBarOverlay:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public notifyBarObs = this.notifyBarOverlay.asObservable();

  display(value:boolean) {
    this.status.next(value);
    this.scrollTop.subscribe(data => data ? (this.fullOverlay.next(false), this.overlay.next(true)): this.fullOverlay.next(true));
    if(document.documentElement.scrollTop === 0) {
      this.fullOverlay.next(false);
    }
  }
}
