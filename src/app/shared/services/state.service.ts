import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  ErrorType = "Error";
  FormType = "formData"
  confirmation = "confirmation";
  navlinks = [
    {
      label: 'Dashboard',
      link: '/dashboard',
      index: 1,
      isActive: false
    },
    {
      label: 'Forms',
      link: '/home',
      index: 2,
      isActive: false
    }
    
  ]

   headerOptions = {
  'content-type': 'application/json'
  }

  constructor() { }
}
