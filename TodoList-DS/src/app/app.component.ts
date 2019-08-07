import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosState } from './interfaces/todo-state.interface';
import { Store } from '@ngrx/store';
import { ElementsState } from './interfaces/element-state.interface';
import { getTodosState } from './selectors/todos.selector';
import { GetTodosAction } from './actions/todos.action';
import { Todo } from './interfaces/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My TodoList for the fabulous PO !';

  todos$: Observable<TodosState>;
  todos: Todo[] = [];

  constructor(private store: Store<ElementsState>) {}

  ngOnInit() {
    this.todos$ = this.store.select<TodosState>(getTodosState);
    this.store.dispatch(new GetTodosAction());
    this.todos.push({id: 1, title: 'First Todo', description: 'This is my first todo !', status: 'in progress'},
     {id: 2, title: 'Second Todo', description: 'This is my second todo ! Great work ', status: 'in progress'});
  }
}
