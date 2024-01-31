import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseApiUrl: string ="https://localhost:7173";

  constructor(private http: HttpClient) { }
  getAllTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseApiUrl + '/api/Todo');
  }

  addTodo(newTodo: Todo):Observable<Todo> {
    // Empty Guid
    newTodo.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Todo>(this.baseApiUrl + '/api/Todo', newTodo);
  }

  updateTodo(id: string, todo: Todo):Observable<Todo> {
    return this.http.put<Todo>(this.baseApiUrl + '/api/Todo/' + id, todo);
  }

  deleteTodo(id: string): Observable<Todo>{
    return this.http.delete<Todo>(this.baseApiUrl + '/api/Todo/' + id);
  }

  getAllDeletedTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseApiUrl + '/api/Todo/get-deleted-todos');
  }

  undoDeleteTodo(id: string, todo: Todo):Observable<Todo> {
    return this.http.put<Todo>(this.baseApiUrl + '/api/Todo/undo-deleted-todo/' + id, todo);
  }
}
