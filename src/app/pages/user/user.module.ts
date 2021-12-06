import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {HeadingModule} from '../../components/heading/heading.module';



@NgModule({
  declarations: [
    UserComponent
  ],
    imports: [
        CommonModule,
        HeadingModule,
    ],
})
export class UserModule { }
