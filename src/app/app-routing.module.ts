import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { TaskLiskComponent } from './tasks/task-lisk.component';

const routes: Routes = [
  { component: CalendarComponent, path: '' },
  {component:TaskLiskComponent,path:'tasks'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
