import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftsComponent } from './shifts.component';
import { ShiftsManagementComponent } from './shifts-management/shifts-management.component';
import {SubNavModule} from '../../global/sub-nav/sub-nav.module';
import {AppRoutingModule} from '../../app-routing.module';
import {HeadingModule} from '../../components/heading/heading.module';
import { ShiftsListComponent } from './shifts-list/shifts-list.component';
import { ShiftsAbscensesComponent } from './shifts-abscenses/shifts-abscenses.component';



@NgModule({
  declarations: [
    ShiftsComponent,
    ShiftsManagementComponent,
    ShiftsListComponent,
    ShiftsAbscensesComponent
  ],
  imports: [
    CommonModule,
    SubNavModule,
    AppRoutingModule,
    HeadingModule,
  ],
})
export class ShiftsModule { }
