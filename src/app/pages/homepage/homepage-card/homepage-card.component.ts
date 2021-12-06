import {Component, Input, OnInit} from '@angular/core';
import {HomepageCard} from '../../../models/homagepage-cards';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage-card',
  templateUrl: './homepage-card.component.html',
  styleUrls: ['./homepage-card.component.scss']
})
export class HomepageCardComponent implements OnInit {

  @Input() cardData: HomepageCard;
  public cardActionIcon: string = 'chevron_right';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  clickedCard() {
    this.router.navigate([this.cardData.route]).catch((err) => {
      throw Error(err);
    })
  }
}
