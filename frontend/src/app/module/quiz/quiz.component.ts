import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {QuizService} from "../../services/quiz.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import html2canvas from "html2canvas";
import * as jspdf from "jspdf";
import jsPDF from "jspdf";
import { ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

// export type ChartOptions = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
// };
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  @ViewChild('chart')
  chart!: ChartComponent;
  series: any = [];
  chartOpts:any = {};

  // @ViewChild('chart')
  // chart!: ChartComponent;
  // public chartOptions: Partial<ChartOptions>;

  color: ThemePalette;
  questions!: any;
  form!: FormGroup;
  goodAnswers: number = 0;
  formCompletedMsg: string | null = null;

  constructor(private quizService: QuizService) {
    // this.chartOptions = {
    //   series: [44, 55, 13, 43, 22],
    //   chart: {
    //     width: 380,
    //     type: 'pie',
    //   },
    //   labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    //   responsive: [
    //     {
    //       breakpoint: 480,
    //       options: {
    //         chart: {
    //           width: 200,
    //         },
    //         legend: {
    //           position: 'bottom',
    //         },
    //       },
    //     },
    //   ],
    // };
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

  exportAsPDF(divId: any) {
    let data = document.getElementById(divId);
    // @ts-ignore
    html2canvas(data).then((canvas) => {
      const contentDataURL = canvas.toDataURL('image/png'); // 'image/jpeg' for lower quality output.
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
    if (this.questions[0] == null) {
      window.location.href = './';
    }
    this.questions.forEach((q: any) => {
      this.shuffleArray(q.answers);
    });
    this.initForm();
    setTimeout(async () => {
      let labelList = await document.querySelectorAll(
        '.mdc-form-field > label'
      );
      labelList.forEach((label) => {
        label.classList.add('m-0');
      });
    }, 2500);
  }

  initForm() {
    this.form = new FormGroup({});
    this.questions.forEach((q: any, i: number) =>
      this.form.addControl(
        i.toString(),
        new FormControl(null, Validators.required)
      )
    );

    // this.form = new FormGroup({ groups: formGroup });
  }

  submit() {
    this.questions.map((q: any, i: number) => {
      if (q.answer === this.form.value[i]) {
        this.goodAnswers++;
      }
    });

    this.formCompletedMsg = `Łącznie udało Ci się uzyskać ${this.goodAnswers} poprawnych odpowiedzi.`;

    this.chartOpts = [this.goodAnswers, this.questions.length - this.goodAnswers];
    console.log(this.chartOpts);

  }
}
