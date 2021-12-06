import { Component, OnInit } from '@angular/core';
import {SubNavElement} from '../../models/sub-nav';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})
export class ShiftsComponent implements OnInit {

  public subNavElements: SubNavElement[] = [
    {
      name: 'Management',
      route: '/shifts/management',
    },
    {
      name: 'Lists',
      route: '/shifts/lists',
    },
    {
      name: 'Absences',
      route: '/shifts/absences',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
