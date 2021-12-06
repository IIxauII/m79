import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {flatMap, map, Observable, switchAll, switchMap, take} from 'rxjs';
import {AuthService} from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsloggedinGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  private checkIfAuthed(): Observable<boolean> {
    this.authService.getAuthenticationStatus().pipe().subscribe((status) => {
      if (!status) {
        this.router.navigate(['/']);
      }
    })
    // map / switchmap somehow does not work here :thinking:
    return this.authService.getAuthenticationStatus().pipe(take(1));
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.checkIfAuthed();
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.checkIfAuthed();
  }
}


