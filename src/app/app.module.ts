import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskLiskModule } from './task-lisk/task-lisk.module';
import { CalendarModule } from './calendar/calendar.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskLiskModule,
    CalendarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
