import { Injectable } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //statuses: Array<'Todo'| 'Doing' | 'Done'>;
  statuses: string [] = [
    'Todo', 'Doing', 'Done';
  ]
  todoId: number = 0;
  todoList: ITodo [] = [
    // example of how to make an item in todo list
   
    { title: 'Install Angular CLI', id: this.todoId, status:'Todo',createdAt:new Date() },
  ]
  getStatuses()
  {
    return this.statuses;
  }
  constructor() { }
  getTodos(status){
if(status){
  return this.todoList.filter(todo => todo.status === status);
}
    return this.todoList;
  }

  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
  addTodo(todo: ITodo):void {
    todo.id = this.todoId ++;
    this.todoList.push(todo);
  }
}
