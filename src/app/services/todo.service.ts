import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Todo} from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoResource = environment.baseURL + 'todos/';

  constructor(private http: HttpClient) {
  }

  get(id?: number): Observable<Todo | Todo[]> {
    const URL = id ? this.todoResource + id : this.todoResource + '?_limit=10';
    return this.http.get<Todo | Todo[]>(URL);
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoResource, todo);
  }

  delete(id: number) {
    return this.http.delete(`${this.todoResource}${id}`);
  }

  update(id: number): Observable<Todo> {
    return this.http.put<Todo>(`${this.todoResource}${id}`, {completed: true});
  }
}
