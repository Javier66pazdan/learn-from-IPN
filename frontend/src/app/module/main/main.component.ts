import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {QuizService} from "../../services/quiz.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  // accent;

  accent: ThemePalette = 'accent';
  searchedValue: string = '';
  isLoading = false;

  constructor(private quizService: QuizService, private router: Router) {}

  onSubmit() {
    this.isLoading = true;
    const body = {
      subject: this.searchedValue,
    };
    this.quizService.getQuestions(body).subscribe({
      next: (value) => {
        this.quizService.setQuizQuestions(value);
        this.router.navigate(['/quiz']);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.isLoading = false;
        // this.router.navigate(['/quiz'])
      },
    });
  }
}
