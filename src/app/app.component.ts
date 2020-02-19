import {Component, OnInit} from '@angular/core';
import {Todo} from './interfaces/todo';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];
  title = '';

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.get()
      .subscribe((res: Todo[]) => {
      this.todos = res;
    });
  }


  addTodo() {
    const todo: Todo = {
      title: this.title
    };
    this.http.post<Todo>('https://my-json-server.typicode.com/typicode/demo/posts', todo)
      .subscribe(res => {
        this.todos.push(res);
      });
  }
}
