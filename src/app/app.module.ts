import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Components/todos/todos.component';
import { DeletedTodoComponent } from './Components/deleted-todo/deleted-todo.component';
// import { DeletedTodoComponent } from './Components/deleted-todo/deleted-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    DeletedTodoComponent,
    // DeletedTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
