import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '@services/authentication.service';
import { StateService } from '@services/state.service';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {

  @Input() layout: string;
  @Input() drawer: any
  isShown = false;
  constructor(public stateVariable: StateService, public service: AuthenticationService) { }

  ngOnInit(): void {
  }


}
