import { Injectable } from '@angular/core';
import {combineLatest, filter, Observable, Subject, take, takeUntil} from 'rxjs';
import {SidebarNavItemCollection} from '../../models/sidebar';
import {Event, NavigationEnd, Router, RouterEvent} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sideBarNavItems: Subject<SidebarNavItemCollection> = new Subject<SidebarNavItemCollection>();

  constructor(
    private router: Router,
  ) {
    combineLatest([
      router.events.pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      ),
       this.getSideBarNavItems().pipe(take(1)),
    ]).subscribe(([event, sidebarNavItemCollection]: [NavigationEnd, SidebarNavItemCollection]) => {
      sidebarNavItemCollection.forEach((sideBarNavItems) => {
        sideBarNavItems.map((item) => {
          const urlFirstSegment = '/' + this.router.url.split('/')[1];
          if (item.route == event.url || item.route == urlFirstSegment) {
            item.active = true;
          } else {
            item.active = false;
          }
        });
      });
      this.setSideBarNavItems(sidebarNavItemCollection);
    });
  }

  getSideBarNavItems(): Observable<any> {
    return this.sideBarNavItems.asObservable();
  }

  loadSideBarNavItems(): void {
    const mockedReturnData: SidebarNavItemCollection = [
      [
        {
          route: '/',
          icon: 'home',
          ariaLabel: 'Homepage Link',
          active: true,
        },
        {
          route: '/operations',
          icon: 'science',
          ariaLabel: 'Operations Link',
          active: false,
        },
        {
          route: '/services',
          icon: 'route',
          ariaLabel: 'Services Link',
          active: false,
        },
        {
          route: '/shifts',
          icon: 'event',
          ariaLabel: 'Shifts Link',
          active: false,
        },
        {
          route: '/user',
          icon: 'people',
          ariaLabel: 'User Link',
          active: false,
        },
        {
          route: '/vehicles',
          icon: 'train',
          ariaLabel: 'Vehicles Link',
          active: false,
        },
        {
          route: '/locations',
          icon: 'map',
          ariaLabel: 'Locations Link',
          active: false,
        },
      // bad url example
      /*{
        route: '/bad',
        icon: 'map',
        ariaLabel: 'bad Link',
        active: false,
      },*/
      ],
      [
        {
          route: '/settings',
          icon: 'settings',
          ariaLabel: 'Settings Link',
          active: false,
        },
      ]
    ];
    this.setSideBarNavItems(mockedReturnData);
  }

  setSideBarNavItems(items: SidebarNavItemCollection): void {
    this.sideBarNavItems.next(items);
  }
}
