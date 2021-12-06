import {Component, Input, OnInit} from '@angular/core';
import {SubNavElement} from '../../models/sub-nav';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {

  @Input() subNavElements: SubNavElement[];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateTo(subNavElement: SubNavElement): void {
    this.router.navigate([subNavElement.route]).catch((err) => {
      console.error(err);
    });
  }
}
