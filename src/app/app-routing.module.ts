import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {OperationsComponent} from './pages/operations/operations.component';
import {ServicesComponent} from './pages/services/services.component';
import {ShiftsComponent} from './pages/shifts/shifts.component';
import {UserComponent} from './pages/user/user.component';
import {VehiclesComponent} from './pages/vehicles/vehicles.component';
import {LocationsComponent} from './pages/locations/locations.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {IsloggedinGuard} from './guards/isloggedin.guard';
import {ShiftsManagementComponent} from './pages/shifts/shifts-management/shifts-management.component';
import {ShiftsListComponent} from './pages/shifts/shifts-list/shifts-list.component';
import {ShiftsAbscensesComponent} from './pages/shifts/shifts-abscenses/shifts-abscenses.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'operations', component: OperationsComponent, canActivate: [IsloggedinGuard]},
  { path: 'services', component: ServicesComponent, canActivate: [IsloggedinGuard]},
  {
    path: 'shifts',
    component: ShiftsComponent,
    canActivate: [IsloggedinGuard],
    canActivateChild: [IsloggedinGuard],
    children: [
      { path: 'management', component: ShiftsManagementComponent},
      { path: 'lists', component: ShiftsListComponent},
      { path: 'absences', component: ShiftsAbscensesComponent},
    ],
  },
  { path: 'user', component: UserComponent, canActivate: [IsloggedinGuard]},
  { path: 'vehicles', component: VehiclesComponent, canActivate: [IsloggedinGuard]},
  { path: 'locations', component: LocationsComponent, canActivate: [IsloggedinGuard]},
  { path: 'settings', component: SettingsComponent, canActivate: [IsloggedinGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
