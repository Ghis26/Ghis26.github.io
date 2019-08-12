import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  createDb() {
let todos;

todos = [
      {id: 1, title: 'First Todo', description: 'This is my first todo !', status: 'undone'},
      {id: 2, title: 'Second Todo', description: 'This is my second todo ! Great work ', status: 'undone'}
    ];
return {todos};
  }
}
