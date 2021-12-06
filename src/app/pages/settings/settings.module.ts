import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import {HeadingModule} from '../../components/heading/heading.module';



@NgModule({
  declarations: [
    SettingsComponent
  ],
    imports: [
        CommonModule,
        HeadingModule,
    ],
})
export class SettingsModule { }
