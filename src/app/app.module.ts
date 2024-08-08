import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // Solo estamos usando un componente
  ],
  imports: [
    BrowserModule // Solo necesitamos BrowserModule para este caso simple
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
