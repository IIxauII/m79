import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './operations.component';
import {HeadingModule} from '../../components/heading/heading.module';



@NgModule({
  declarations: [
    OperationsComponent
  ],
    imports: [
        CommonModule,
        HeadingModule,
    ],
})
export class OperationsModule { }
