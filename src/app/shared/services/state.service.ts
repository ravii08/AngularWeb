import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  navlinks = [
    {
      label: 'Dashboard',
      link: '/dashboard',
      index: 1,
      isActive: false
    },
    {
      label: 'Home',
      link: '/home',
      index: 2,
      isActive: false
    }
    
  ]


  constructor() { }
}
