import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject();
  public isAuthenticated: boolean;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.getAuthenticationStatus().pipe(takeUntil(this.destroy$)).subscribe((status: boolean) => {
      this.isAuthenticated = status;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  toggleLoginState() {
    if (this.isAuthenticated) {
      this.authService.logout();
    } else {
      this.authService.authenticate('iliketrains');
    }
  }
}
