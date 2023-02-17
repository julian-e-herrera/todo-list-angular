import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskLiskComponent } from './task-lisk.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {FormsModule} from '@angular/forms'
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';
import { TaskTableComponent } from '../task-table/task-table.component';



@NgModule({
  declarations: [ TaskLiskComponent, TaskTableComponent],
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
