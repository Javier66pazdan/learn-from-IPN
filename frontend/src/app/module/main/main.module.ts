import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from 'src/material.module';
import { FormsModule } from "@angular/forms";
import {
  MatRadioModule,
  MAT_RADIO_DEFAULT_OPTIONS,
} from '@angular/material/radio';
// import { SpinnersAngularModule } from 'spinners-angular';
// import { SpinnerCircularModule } from 'spinners-angular/spinner-circular';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MainRoutingModule,
    // SpinnerCircularModule
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    },
  ],
  bootstrap: [MainComponent],
})
export class MainModule {}
