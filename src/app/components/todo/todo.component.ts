import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../interfaces/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  @Input() todo: Todo;
  @Output() itemRemoved: EventEmitter<number> = new EventEmitter<number>();
  @Output() itemCompleted: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
  }

  removeItem() {
    this.itemRemoved.emit(this.todo.id);
  }

  completeItem() {
    this.itemCompleted.emit(this.todo.id);
  }
}
