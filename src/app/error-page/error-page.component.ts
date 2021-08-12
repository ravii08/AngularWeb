import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '@app/shared/services/state.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor(public router: Router, public stateService: StateService) { }

  ngOnInit(): void {
  }

  refresh() {
    sessionStorage.clear();
    this.router.navigate(['/'])
  }

}
