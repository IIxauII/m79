import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  @Input() headingString: string;
  @Input() center: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
