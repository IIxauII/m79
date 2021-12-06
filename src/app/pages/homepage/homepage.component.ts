import {Component, OnDestroy, OnInit} from '@angular/core';
import {HomepageCard} from '../../models/homagepage-cards';
import {Observable, of, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {

  public cards: HomepageCard[];
  private destroy$: Subject<boolean> = new Subject<boolean>();
  // this data will be fetched from a service, mocking return value here
  // TODO: need to introduce a pagesService, which fetches page information (containing routes, and sub items which
  //  components need)
  private cards$: Observable<HomepageCard[]> = of([
    {
      title: 'Operations Board',
      icon: 'science',
      description: 'Alle Leistungen und Aktivitäten im Live Überblick',
      route: '/operations'
    },
    {
      title: 'Leistungen',
      icon: 'route',
      description: 'Leistungen steuern, anlegen und das passende Personal finden',
      route: '/services'
    },
    {
      title: 'Schichtpläne',
      icon: 'event',
      description: 'Steuere Schichten, sowie An - und Abwesenheiten',
      route: '/shifts'
    },
    {
      title: 'Personal',
      icon: 'people',
      description: 'Behalte alle Qualifikationen, Tarifbedingungen und persönliche Einsatzpräferenzen deines...',
      route: '/user'
    },
  ])

  constructor() { }

  ngOnInit(): void {
    this.cards$.pipe(takeUntil(this.destroy$)).subscribe((cards) => {
      this.cards = cards;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
