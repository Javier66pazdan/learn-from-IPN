import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from 'src/material.module';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MaterialModule , AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
