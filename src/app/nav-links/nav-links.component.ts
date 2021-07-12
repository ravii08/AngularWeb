import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthenticationService } from '../shared/services/authentication.service';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit {

  @ViewChild('sidenav') public myNav: MatSidenav;
  sidenav: string
  isShown = false;
  constructor(public stateVariable: StateService, public service: AuthenticationService) { }

  ngOnInit(): void {
  }


}
