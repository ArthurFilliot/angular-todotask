import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PipesModule } from "../pipes/pipes.module";
import { TodoAdderComponent } from './todo-adder/todo-adder.component';
import { RemitterTextComponent } from './remitter-text/remitter-text.component';
import { RecipientLabelComponent } from './recipient-label/recipient-label.component';
import { TransmitterButtonComponent } from './transmitter-button/transmitter-button.component';
import { RecipientListComponent } from './recipient-list/recipient-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoAdderComponent,
    RemitterTextComponent,
    RecipientLabelComponent,
    TransmitterButtonComponent,
    RecipientListComponent
  ],
  imports: [
    BrowserModule, 
    PipesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
