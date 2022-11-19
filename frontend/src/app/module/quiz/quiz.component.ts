import {Component, OnInit} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {QuizService} from "../../services/quiz.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{

  color: ThemePalette;
  questions!: any;
  form!: FormGroup;
  goodAnswers: number = 0;
  formCompletedMsg: string | null = null

  constructor(private quizService: QuizService) {
  }

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  ngOnInit(): void {
    // this.questions = this.quizService.getQuestions()
    this.questions = this.quizService.getQuizQuestions();
    this.questions.forEach((q: any) => {
      this.shuffleArray(q.answers)
    })
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({});
    this.questions.forEach((q: any, i: number) => this.form.addControl(i.toString(), new FormControl(null, Validators.required)))
    // this.form = new FormGroup({ groups: formGroup });
  }


  submit() {
    this.questions.map((q: any, i: number) => {
      if (q.answer === this.form.value[i]) {
        this.goodAnswers++;
      }
    })
    this.formCompletedMsg = `Łącznie udało Ci się uzyskać ${this.goodAnswers} poprawnych odpowiedzi.`
  }
}
