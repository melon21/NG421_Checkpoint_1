import { Component, OnInit,Input } from '@angular/core';
import {TodoService} from '../services/todo.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo
  constructor(private todoService : TodoService, private modalService : NgbModal) { }
  todoTitle = ''
  ngOnInit() {
  }
  isEditing()
  {
return false;
  }
  async deleteTodo(todo){
    let result;
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.modalInstance = modal;
    try {
      result = await modal.result;
      if(result === "yes") {
      }
    }
    catch(ex){
      
    }
  }
  async editTodo(){
    let result;
    const modal = this.modalService.open(TodoEditComponent);
    modal.componentInstance.modalInstance = modal;
    try {
      result = await modal.result;
      if(result === "yes") {
      }
    }
    catch(ex){
      
    }
  }
getStatuses()
{
  return this.todoService.getStatuses();
}

}
