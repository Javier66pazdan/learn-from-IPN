import {Component, OnInit} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {QuizService} from "../../services/quiz.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import html2canvas from "html2canvas";
import * as jspdf from "jspdf";
import jsPDF from "jspdf";


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

  exportAsPDF(divId: any)
  {
    let data = document.getElementById(divId);
    // @ts-ignore
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')  // 'image/jpeg' for lower quality output.
      // @ts-ignore
      let pdf = new jsPDF('v', 'cm', 'a4'); //Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 0.5, 0.2, 20, 10);
      pdf.save('Filename.pdf');
    });
  }

  ngOnInit(): void {
    // this.questions = this.quizService.getQuestions()
    this.questions = this.quizService.getQuizQuestions();
    if(this.questions[0] == null){
      window.location.href = './';
    }
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
