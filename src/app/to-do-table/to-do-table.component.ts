import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-table',
  templateUrl: './to-do-table.component.html',
  styleUrls: ['./to-do-table.component.css']
})
export class ToDoTableComponent implements OnInit {
displayedColumns: string[] = ['id', 'title', 'status', 'descriptions', 'createdAt'];
  constructor() { }

  ngOnInit() {
  }

}
