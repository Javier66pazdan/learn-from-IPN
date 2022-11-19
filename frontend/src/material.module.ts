import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [],
    imports: [MatRadioModule, MatButtonModule,MatIconModule, MatInputModule,],
    providers: [],
    bootstrap: [],
    exports: [MatRadioModule, MatButtonModule,MatIconModule, MatInputModule]
  })
  export class MaterialModule {}
  