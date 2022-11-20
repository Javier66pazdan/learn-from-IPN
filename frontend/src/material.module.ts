import { NgModule } from '@angular/core';
// import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatRadioModule,
  MAT_RADIO_DEFAULT_OPTIONS,
} from '@angular/material/radio';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [],
  imports: [
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    NgApexchartsModule
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    },
  ],
  bootstrap: [],
  exports: [
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    NgApexchartsModule,
  ],
})
export class MaterialModule {}
