import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todoservice.service';
import { Todo } from '../interfaces/todo.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo: Todo;

  constructor(private route: ActivatedRoute, private service: TodoService, private location: Location) { }

  ngOnInit() {

    const id = this.route.snapshot.params.id;
    this.service.getTodo(id).subscribe((data: Todo) => this.todo = data);
  }

  public goBack() {
    this.location.back();
  }
}
