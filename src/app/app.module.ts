import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { PostFormComponent } from './components/post/post-form/post-form.component';
import { PostViewComponent } from './components/post/post-view/post-view.component';
import { AppStyleDirective } from './directives/app-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostViewComponent,
    AppStyleDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
