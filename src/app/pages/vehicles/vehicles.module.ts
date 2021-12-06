import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles.component';
import {HeadingModule} from '../../components/heading/heading.module';



@NgModule({
  declarations: [
    VehiclesComponent
  ],
    imports: [
        CommonModule,
        HeadingModule,
    ],
})
export class VehiclesModule { }
