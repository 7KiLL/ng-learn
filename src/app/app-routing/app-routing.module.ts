import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {AboutComponent} from '../components/about/about.component';
import {TodoViewComponent} from '../components/todo-view/todo-view.component';

const routes: Routes = [
  {path: 'posts', component: TodoViewComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
