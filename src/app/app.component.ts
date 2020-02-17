import { Component } from '@angular/core';
import {Post} from './shared/models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-learn';
  posts: Post[] = [
    {title: 'Test title', text: 'Test text'}
  ];

  addPost($event: Post) {
    this.posts.unshift($event);
  }

}
