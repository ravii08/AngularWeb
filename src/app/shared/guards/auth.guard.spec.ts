import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';
import { AuthenticationService } from '../services/authentication.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  let next: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        AuthenticationService
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('if Token',() => {
    sessionStorage.setItem('token', "abcusn123");
    let token = guard.canActivate(next, state);
    expect(token).toEqual(true)
  });
  it('if no Token',() => {
    sessionStorage.setItem('token', "");
    spyOn(guard.route, 'navigate')
    guard.canActivate(next, state);
    expect(guard.route.navigate).toHaveBeenCalledWith(["/login"])
  })
});
