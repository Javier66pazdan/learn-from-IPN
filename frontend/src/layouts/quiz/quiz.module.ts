import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QuizComponent } from './quiz.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [BrowserModule, MatRadioModule, MatButtonModule,MatIconModule, MatInputModule],
  providers: [],
  bootstrap: [QuizComponent],

})

export class QuizModule {}
