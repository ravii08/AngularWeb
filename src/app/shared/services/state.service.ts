import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  navlinks = [
    {
      label: 'Home',
      link: '/home',
      index: 1,
      isActive: false
    },
    {
      label: 'Dashboard',
      link: '/dashboard',
      index: 2,
      isActive: false
    }
  ]


  constructor() { }
}
