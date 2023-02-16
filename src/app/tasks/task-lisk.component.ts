import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Route } from '@angular/router';
import { NewTask } from './new-task-dto';
import { TaskItem } from './task-item-dto';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-lisk',
  templateUrl: './task-lisk.component.html',
  styleUrls: ['./task-lisk.component.css'],
  
})
export class TaskLiskComponent implements OnInit{
  constructor(private route:ActivatedRoute,private taskService:TaskService) { }

  newTask:NewTask=new NewTask

  tasks = this.taskService.getAllTask(this.route.snapshot.params['date'])

  ngOnInit(): void{
  var strDate = new Date(this.route.snapshot.params['date'])
    this.newTask=new NewTask(this.newTask.title, new Date(strDate))
  }

;
  
  
  
  
  add(taskNgForm: NgForm) {
      
    if (taskNgForm.touched == false) return
    if (taskNgForm.valid == false) return
    
     this.taskService.addTask(this.newTask.date,this.newTask)
    // this.tasks=this.taskService.getAllTask()
      taskNgForm.reset({date:this.newTask.date})
    }
  
  
    remove(existingTask: TaskItem) {
      var userConfirmed=confirm(`Are you sure that you want to remove the following task? \n "${existingTask.title}"`)
      
  
      if (userConfirmed) {
    this.taskService.removeTask(this.newTask.date,existingTask)
      }
    }
  
   
  
  }
  
  
