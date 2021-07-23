import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthenticationService } from '../shared/services/authentication.service';
import { StateService } from '../shared/services/state.service';
import * as d3 from 'd3';
import { colorLegend } from './colorlegend';
import { loadandprocessdata } from './loadandprocessdata';
import { G } from '@angular/cdk/keycodes';
import * as t from 'topojson';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  

  constructor(private Service: AuthenticationService, public stateVariable: StateService) { }
 public ngOnInit() {
 }
  
}
