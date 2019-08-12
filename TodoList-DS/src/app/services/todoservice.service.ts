import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  SERVER_URL = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

public getTodos() {
  return this.http.get(this.SERVER_URL + 'todos');
}

public getTodo(todoId): Observable<any> {
  return this.http.get(`${this.SERVER_URL + 'todos'}/${todoId}`);
}

public addTodo(todo: {id: number, title: string, description: string, status: string}) {
  return this.http.post(`${this.SERVER_URL + 'todos'}`, todo);
}

public updateTodo(todo: Todo) {
  todo.status = 'done';
  return this.http.put(`${this.SERVER_URL + 'todos'}/${todo.id}`, todo);
}
}
