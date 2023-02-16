import { Injectable } from '@angular/core';
import { TaskItem } from './task-item-dto';
import { NewTask } from './new-task-dto';
import { Observable, BehaviorSubject,tap ,map} from 'rxjs';
import {HttpClient} from '@angular/common/http'


const resourceUrl='http://localhost:3001/tasks'
@Injectable()
export class TaskService {

  constructor(private httpClient:HttpClient) { }

 private tasks =new BehaviorSubject<TaskItem[]>([  
    ])

  getAllTask(date:Date): Observable<TaskItem[]>{
  this.httpClient.get<TaskItem[]>(`${resourceUrl}/${date}`)
      .pipe(tap(console.log))
      .pipe(map(TaskService.mapTaskItems))
      .pipe(tap(console.log))
    .subscribe(t => this.tasks.next(t))
    return this.tasks
  }

  private static mapTaskItems(items: {title:string}[]) {
  return items.map(item=> new TaskItem(item.title))
}
  addTask(date:Date,newTask: NewTask){
  //  this.tasks.push(new TaskItem(newTask.title))
    var updatedTasks = this.tasks.value.concat(new TaskItem(newTask.title))
    

    this.httpClient.post(`${resourceUrl}/${newTask.date}`, newTask)
    .subscribe(() =>this.tasks.next(updatedTasks) )


  }


  removeTask(date:Date,existingTask:TaskItem) {
    var updatedTasks = this.tasks.value.filter(task => task != existingTask)
    this.httpClient.delete((`${resourceUrl}/${date}/${existingTask.title}`))
    .subscribe(() =>  this.tasks.next(updatedTasks))
   
  }
}

