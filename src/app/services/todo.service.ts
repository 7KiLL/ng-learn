import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Todo} from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoResource = environment.baseURL + 'posts/';

  constructor(private http: HttpClient) {
  }

  get(id?: number): Observable<Todo|Todo[]> {
    const URL = id ? this.todoResource + id : this.todoResource;
    return this.http.get<Todo|Todo[]>(URL);
  }
}
