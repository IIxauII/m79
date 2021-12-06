import {Component, OnDestroy, OnInit} from '@angular/core';
import {SidebarService} from '../../services/sidebar/sidebar.service';
import {SidebarNavItem, SidebarNavItemCollection} from '../../models/sidebar';
import {filter, Subject, takeUntil} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject();
  public sidebarNavItemCollection: SidebarNavItemCollection;

  constructor(
    private sidebarService: SidebarService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.sidebarService.getSideBarNavItems().pipe(takeUntil(this.destroy$)).subscribe((items: SidebarNavItemCollection) => {
      this.sidebarNavItemCollection = items;
    });
    this.sidebarService.loadSideBarNavItems();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  navigateToPage(navItem: SidebarNavItem): void {
    this.router.navigate([navItem.route]).catch((err) => {
      throw Error(err);
    })
  }
}
