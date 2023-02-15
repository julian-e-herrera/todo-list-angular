import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskLiskComponent } from './task-lisk.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {FormsModule} from '@angular/forms'



@NgModule({
  declarations: [ TaskLiskComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
   FormsModule
  ],
  exports: [
    TaskLiskComponent
  ]
})
export class TaskLiskModule { }
