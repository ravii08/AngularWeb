import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  forms = [
    {"id":1 , value: "Reactive Form"},
    {"id":2 , value: "Template Form"}
  ]

  constructor(public stateVariable: StateService, public router: Router) { }

  ngOnInit(): void {
    console.log("home")
  }


}
