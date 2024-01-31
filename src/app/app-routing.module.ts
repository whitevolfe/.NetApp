import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './Components/todos/todos.component';
import { DeletedTodoComponent } from './Components/deleted-todo/deleted-todo.component';
// import { DeletedTodoComponent } from './Components/deleted-todo/deleted-todo.component';

const routes: Routes = [
  {
    path:"",
    component: TodosComponent
  },

  {
    path:"todos",
    component: TodosComponent
  },

  {
    path:"deleted-todos",
    component: DeletedTodoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
