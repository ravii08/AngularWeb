import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '@app/shared/services/loader.service';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // forms = [
  //   {"id":1 , value: "Reactive Form"},
  //   {"id":2 , value: "Template Form"}
  // ]

  constructor(public stateVariable: StateService, public router: Router, public loader: LoaderService) {
    this.loader.display(false)
   }

  ngOnInit() {
    
  }


}
