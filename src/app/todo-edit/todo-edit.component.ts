import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
modalInstance: NgbModalRef;
constructor() { }

ngOnInit() {
}
yes(){
  this.modalInstance.close("yes");
}
}
