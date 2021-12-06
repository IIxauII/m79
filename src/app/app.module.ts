import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SidebarModule} from './global/sidebar/sidebar.module';
import {HeaderModule} from './global/header/header.module';
import {HomepageModule} from './pages/homepage/homepage.module';
import {ServicesModule} from './pages/services/services.module';
import {LocationsModule} from './pages/locations/locations.module';
import {OperationsModule} from './pages/operations/operations.module';
import {SettingsModule} from './pages/settings/settings.module';
import {ShiftsModule} from './pages/shifts/shifts.module';
import {UserModule} from './pages/user/user.module';
import {VehiclesModule} from './pages/vehicles/vehicles.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    SidebarModule,
    HomepageModule,
    LocationsModule,
    OperationsModule,
    ServicesModule,
    SettingsModule,
    ShiftsModule,
    UserModule,
    VehiclesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
