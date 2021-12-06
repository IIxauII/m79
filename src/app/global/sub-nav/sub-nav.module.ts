import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubNavComponent} from './sub-nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    SubNavComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [
    SubNavComponent,
  ]
})
export class SubNavModule { }
