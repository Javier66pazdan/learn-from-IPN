import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatRadioModule } from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatRadioModule, MatButtonModule,MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
