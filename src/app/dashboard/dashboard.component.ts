import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthenticationService } from '../shared/services/authentication.service';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public loginForm: FormGroup;
  chip = "Chip";
  chipLabel = "Chip Label";
  chipError: string;

 


  constructor(private Service: AuthenticationService, public stateVariable: StateService) { }

  ngOnInit():void {
     console.log("Dashboard");
  }

  
  
}
