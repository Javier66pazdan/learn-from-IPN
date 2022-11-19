import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  title = 'frontend';
  srcResult = '';
  color: ThemePalette = 'warn';

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
}
