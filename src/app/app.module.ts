import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';  
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';

import { TodoService } from "./todo.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
