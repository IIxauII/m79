import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { ServicesComponent } from './services.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {HeadingModule} from '../../components/heading/heading.module';
import { ServiceModalComponent } from './service-modal/service-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    ServicesComponent,
    ServiceModalComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    HeadingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe,],
  exports: [
    ServicesComponent,
  ]
})
export class ServicesModule { }
