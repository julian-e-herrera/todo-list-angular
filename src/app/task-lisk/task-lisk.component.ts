import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Route } from '@angular/router';

@Component({
  selector: 'app-task-lisk',
  templateUrl: './task-lisk.component.html',
  styleUrls: ['./task-lisk.component.css']
})
export class TaskLiskComponent implements OnInit{
  constructor(private route:ActivatedRoute) { }
  date: Date = new Date()
  newTaskTitle:string=''


  ngOnInit(): void{
  this.date = new Date(this.route.snapshot.params['date'])
    
  }

  tasks:Task[] = [
    new Task('Visit Ann')  ,
    new Task("Call dad")  ,
    new Task("Go to te gym")  ,
    new Task( "Wash the dishes") ,
    new Task("Shop for the party")  
    ];
  
  
  
  
  add(taskNgForm: NgForm) {
      
    if (taskNgForm.touched == false) return
    if (taskNgForm.valid == false) return
    
      this.tasks.push(new Task(this.newTaskTitle))
      this.newTaskTitle = ''
      taskNgForm.reset({date:this.date})
    }
  
  
    remove(existingTask: Task) {
      var userConfirmed=confirm(`Are you sure that you want to remove the following task? \n "${existingTask.title}"`)
      
  
      if (userConfirmed) {
        this.tasks=this.tasks.filter(task=>task != existingTask)
      }
    }
  
   
  
  }
  
  
  class Task{
    constructor(public title: string) {
      
    }
    
    public isDone = false
    toggleIsDone() {
      this.isDone=!this.isDone
     }
   

}
