import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
  ) { }

  private setIsAuthenticated(status: boolean): void {
    this.isAuthenticated.next(status);
  }

  public getAuthenticationStatus(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (token && !this.isAuthenticated.getValue() || !token && this.isAuthenticated.getValue()) {
      if (token) {
        this.setIsAuthenticated(true);
      } else {
        this.setIsAuthenticated(false);
      }
    }
    return this.isAuthenticated.asObservable();
  }

  public authenticate(key: string): void {
    const generatedToken = (Math.random() + 1).toString(36).substring(2);
    localStorage.setItem('token', generatedToken);
    this.setIsAuthenticated(true);
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['']);
    this.setIsAuthenticated(false);
  }
}
