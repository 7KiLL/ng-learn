import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../../../shared/models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  title = '';
  text = '';

  @Output() handleAdd: EventEmitter<Post> = new EventEmitter<Post>();
  constructor() { }

  ngOnInit() {
  }

  submit() {
    const post: Post = {
      title: this.title,
      text: this.text,
    };
    this.handleAdd.emit(post);
  }
}
