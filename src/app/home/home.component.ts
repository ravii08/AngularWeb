import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public stateVariable: StateService) { }

  ngOnInit(): void {
    console.log("home")
  }

}
