import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatRadioModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
