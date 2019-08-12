import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosState } from '../interfaces/todo-state.interface';
import { Store } from '@ngrx/store';
import { ElementsState } from '../interfaces/element-state.interface';
import { getTodosState } from '../selectors/todos.selector';
import { GetTodosAction, UpdateTodoAction } from '../actions/todos.action';
import { Todo } from '../interfaces/todo.interface';
import { TodoService } from '../services/todoservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  title =  'The fabulous Todo List for Our Amazing PO !';

  todos$: Observable<TodosState>;
  todos: Todo[] = [];

  constructor(private store: Store<ElementsState>, private service: TodoService,
              private router: Router) {}

  ngOnInit() {
  this.getAllTodos();
  }

  public getAllTodos() {
    this.todos$ = this.store.select<TodosState>(getTodosState);
    this.store.dispatch(new GetTodosAction());
    this.service.getTodos().subscribe((data: Todo[]) => this.todos = data);
  }

  public getTodo(id) {
    this.router.navigateByUrl('/todos/' + id);
  }

  public getTodoDone(id) {
    let todoToUpdate;
    this.service.getTodo(id).subscribe((data) => {
      todoToUpdate = data;
      this.store.dispatch(new UpdateTodoAction(todoToUpdate));
      this.service.updateTodo(todoToUpdate);
      this.getAllTodos();
    });
    }
}
