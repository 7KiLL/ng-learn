import { Component, OnInit } from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})
export class TodoViewComponent implements OnInit {

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
    this.todoService.create(todo).subscribe(res => {
      this.todos.push(res);
    });
  }

  removeItem($event: number) {
    this.todoService.delete($event).subscribe(res => {
      this.todos = this.todos.filter(t => t.id !== $event);
    });
  }
}
