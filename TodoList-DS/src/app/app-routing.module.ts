import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: '', redirectTo : '/todos', pathMatch: 'full'},
  {path : 'todos', component : TodosComponent},
  {path: 'todos/:id', component : TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
