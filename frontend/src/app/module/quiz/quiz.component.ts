import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {Question, QuizService} from "../../services/quiz.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import html2canvas from "html2canvas";
import * as jspdf from "jspdf";
import jsPDF from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import * as FileSaver from 'file-saver';
import { ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  @ViewChild('chart')
  chart!: ChartComponent;
  series: any = [];
  chartOpts: any = {};
  chartColors: string[] = [
    '#0BD549',
    '#FF5733'
  ]
  legend: any = [];

  color: ThemePalette;
  questions!: Question[];
  form!: FormGroup;
  goodAnswers: number = 0;
  formCompletedMsg: string | null = null;

  constructor(private quizService: QuizService, private router: Router) {}

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  shuffleArray(array: string[] | number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  exportAsPDF(divId: any) {
    const data = document.getElementById(divId) as string | HTMLElement;
    // @ts-ignore
    html2canvas(data).then((canvas) => {
      const contentDataURL = canvas.toDataURL('image/png'); // 'image/jpeg' for lower quality output.
      // @ts-ignore
      let pdf = new jsPDF('v', 'cm', 'a4'); 
      // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 1, 1, 15, 15);
      pdf.save('Filename.pdf');
    });
    // const doc = new jsPDF('p', 'px', 'a4'); 

    //   doc.html(
    //     data, {
    //       callback: function (pdf:any) {
    //         pdf.setFontSize(12)
    //         pdf.save('Test.pdf');
    //       },
          
    //       x: 0,
    //       y: 0,
    //       html2canvas: { scale: 0.25 },
    //     },
    //   );
    // }
  }

  ngOnInit(): void {
    // this.questions = this.quizService.getQuestions()
    this.questions = this.quizService.getQuizQuestions();
    if (this.questions[0] == null) {
      this.router.navigate(['./'])
    }
    this.questions.forEach((q: Question) => {
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
    }, 0);
  }

  initForm() {
    this.form = new FormGroup({});
    this.questions.forEach((q: Question, i: number) =>
      this.form.addControl(
        i.toString(),
        new FormControl(null, Validators.required)
      )
    );

    // this.form = new FormGroup({ groups: formGroup });
  }

  submit() {
    this.questions.map((q: Question, i: number) => {
      if (q.answer === this.form.value[i]) {
        this.goodAnswers++;
      }
    });

    this.formCompletedMsg = `Łącznie udało Ci się uzyskać ${this.goodAnswers} poprawnych odpowiedzi.`;

    this.chartOpts = [this.goodAnswers, this.questions.length - this.goodAnswers];
    console.log(this.chartOpts);
    this.legend = ["Poprawne", "Niepoprawne"];


  }

  generateDocx() {
    const questionParagraphs: Paragraph[] = [];
    this.questions.forEach((q: Question, index: number) => {
      questionParagraphs.push(new Paragraph({
      children: [
          new TextRun(`${index+1}. ${q.question}`),
      ]
      }))
      q.answers.forEach((answer) => {
        questionParagraphs.push(new Paragraph({
          children: [
              new TextRun(`⚪ ${answer}`),
          ]
          }))
      })
    })
    const doc = new Document({
      sections: [
          {
              properties: {},
              children: [
                  ...questionParagraphs
              ],
          },
      ],
  });

  Packer.toBlob(doc).then((blob) => {
    // saveAs from FileSaver will download the file
    FileSaver.saveAs(blob, 'Quiz.docx');
});
  }
}
