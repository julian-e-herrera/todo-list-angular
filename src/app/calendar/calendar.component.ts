import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
    throw new Error("failed to load calendar");
    
  }




  selectedDate =new Date()
}
