import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from 'src/material.module';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MainRoutingModule
  ],
  bootstrap: [MainComponent]
})
export class MainModule { }
