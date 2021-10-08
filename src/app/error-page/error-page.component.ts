import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '@app/shared/services/loader.service';
import { StateService } from '@app/shared/services/state.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor(public router: Router, public stateService: StateService, public Loader: LoaderService) { 
    this.Loader.display(false)
  }

  ngOnInit(): void {
  }

  refresh() {
    sessionStorage.clear();
    this.router.navigate(['/'])
  }

}
