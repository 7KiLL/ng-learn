import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { TodoViewComponent } from './components/todo-view/todo-view.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AboutComponent,
    TodoViewComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
