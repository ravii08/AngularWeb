import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit {

  constructor(public stateVariable: StateService, public service: AuthenticationService) { }

  ngOnInit(): void {
  }

}
