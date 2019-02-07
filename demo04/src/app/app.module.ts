import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { StorgeService } from './services/storge.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
