import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations.component';
import {HeadingModule} from '../../components/heading/heading.module';



@NgModule({
  declarations: [
    LocationsComponent
  ],
    imports: [
        CommonModule,
        HeadingModule,
    ],
})
export class LocationsModule { }
