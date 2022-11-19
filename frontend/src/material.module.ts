import { NgModule } from '@angular/core';
// import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatRadioModule,
  MAT_RADIO_DEFAULT_OPTIONS,
} from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [MatRadioModule, MatButtonModule, MatIconModule, MatInputModule],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    },
  ],
  bootstrap: [],
  exports: [MatRadioModule, MatButtonModule, MatIconModule, MatInputModule],
})
export class MaterialModule {}
