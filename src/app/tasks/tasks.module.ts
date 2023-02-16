import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskLiskComponent } from './task-lisk.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {FormsModule} from '@angular/forms'
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ TaskLiskComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    FormsModule,
   HttpClientModule
  ],
  providers:[TaskService],
  exports: [
    TaskLiskComponent
  ]
})
export class TasksModule { }
